import { useEffect, useRef } from "react";

type EventHandler<K extends keyof WindowEventMap> = (
  event: WindowEventMap[K],
) => void;

export const useEventListener = <K extends keyof WindowEventMap>(
  target: EventTarget | null, //
  eventType: K, // Event type
  handler: EventHandler<K>, // Event handler
) => {
  const savedHandler = useRef<EventHandler<K> | null>(null);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!target) return () => {};
    const eventListener = (event: WindowEventMap[K]) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };
    target.addEventListener(eventType, eventListener as EventListener);
    return () => {
      target.removeEventListener(eventType, eventListener as EventListener);
    };
  }, [eventType, target]);
};
