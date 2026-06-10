import { useRef } from "react";

type Value = any;

export interface ItemData {
  value: Value;
  textValue: string;
  disabled: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
}

export interface CollectionSnapshot {
  version: number;
  items: Map<Value, ItemData>;
}

export interface ItemContextValue {
  value: Value;
  disabled: boolean;
  isSelected: boolean;
  isHighlighted: boolean;
  textId: string;
}

export interface CollectionStore {
  getSnapshot: () => CollectionSnapshot;
  subscribe: (listener: () => void) => () => void;
  register: (value: Value, data: Omit<ItemData, "value">) => void;
  unregister: (value: Value) => void;
  getItems: () => Map<Value, ItemData>;
}

const createCollectionStore = () => {
  let version = 0;
  const items = new Map<Value, ItemData>();
  const listeners = new Set<() => void>();
  const snapshot: CollectionSnapshot = {
    version,
    items,
  };
  let pendingNotify = false;

  const getSnapshot = () => snapshot;

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const notify = () => {
    if (pendingNotify) {
      return;
    }
    pendingNotify = true;

    queueMicrotask(() => {
      pendingNotify = false;
      version++;
      snapshot.version = version;
      snapshot.items = items;
      listeners.forEach((listener) => listener());
    });
  };

  const register = (value: Value, data: Omit<ItemData, "value">) => {
    const existing = items.get(value);
    if (
      existing?.textValue === data.textValue &&
      existing.disabled === data.disabled
    )
      return;

    items.set(value, { value, ...data });
    notify();
  };

  const unregister = (value: Value) => {
    if (!items.has(value)) return;
    items.delete(value);
    notify();
  };

  const getItems = () => items;

  return {
    getSnapshot,
    subscribe,
    register,
    unregister,
    getItems,
  };
};

export const useCollection = () => {
  const storeRef = useRef<CollectionStore>(null);
  if (!storeRef.current) {
    storeRef.current = createCollectionStore();
  }

  return storeRef.current;
};
