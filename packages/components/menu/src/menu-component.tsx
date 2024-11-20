/* eslint-disable react/prop-types */
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
  type Placement,
} from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
import { ChevronRightIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import { menuVariants } from "./style";
import { MenuContext, useMenu } from "./use-menu";

export type MenuProps = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  triggerOn?: "hover" | "click";
  placement?: Placement;
  nestedPlacement?: Placement;
  offset?: number;
  nestedOffset?: number;
  classNames?: {
    popover?: string;
    arrow?: string;
    triggerWrapper?: string;
  };
  showArrow?: boolean;
  isOpen?: boolean;
  initialOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
} & ComponentProps<"div">;

export const MenuComponent = ($props: MenuProps) => {
  const { menu: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    children,
    trigger,
    triggerOn = "click",
    placement,
    nestedPlacement,
    className,
    classNames,
    offset: offsetProp = 4,
    nestedOffset = 2,
    showArrow = false,
    isOpen: propOpen,
    initialOpen = false,
    onOpenChange,
    ...restProps
  } = props;

  const [isOpen, setIsOpen] = useControlledState(
    initialOpen,
    propOpen,
    onOpenChange,
  );
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);
  const arrowRef = useRef(null);
  const parent = useMenu();

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const isNested = parentId != null;

  const { floatingStyles, refs, context } = useFloating<HTMLDivElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested
      ? (nestedPlacement ?? "right-start")
      : (placement ?? "bottom-end"),
    middleware: [
      offset({
        mainAxis: isNested ? nestedOffset : offsetProp,
        alignmentAxis: isNested ? -4 : 0,
      }),
      flip(),
      shift({ padding: 5 }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hoverEnabled = triggerOn === "hover" || isNested;
  const hover = useHover(context, {
    enabled: hoverEnabled,
    delay: { open: 75 },
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const click = useClick(context, {
    event: "mousedown",
    toggle: !isNested,
    ignoreMouse: isNested,
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, { bubbles: true });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead],
  );

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on("click", handleTreeClick);
    tree.events.on("menuopen", onSubMenuOpen);

    // eslint-disable-next-line consistent-return
    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("menuopen", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId, setIsOpen]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit("menuopen", { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  const value = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      getItemProps,
      setHasFocusInside,
      isOpen,
    }),
    [activeIndex, getItemProps, isOpen],
  );

  const menuClasses = menuVariants();
  const menuItemClass = menuClasses.menuItem({
    opened: isOpen && hasFocusInside && isNested,
  });

  return (
    <FloatingNode id={nodeId}>
      <div
        ref={useMergeRefs([refs.setReference, item.ref])}
        tabIndex={
          !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
        }
        role={isNested ? "menuitem" : undefined}
        {...getReferenceProps(
          parent.getItemProps({
            ...restProps,
            onFocus(event: React.FocusEvent<HTMLDivElement>) {
              restProps.onFocus?.(event);
              setHasFocusInside(false);
              parent.setHasFocusInside(true);
            },
          }),
        )}
        className={cn({
          [menuItemClass]: isNested,
          "inline-block": !isNested,
          [classNames?.triggerWrapper ?? ""]: isNested,
        })}
      >
        {trigger}
        {isNested && <ChevronRightIcon aria-hidden className="ml-auto" />}
      </div>
      <MenuContext.Provider value={value}>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          <AnimatePresence>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  modal={false}
                  initialFocus={isNested ? -1 : 0}
                  returnFocus={!isNested}
                >
                  {/* @ts-expect-error tserror */}
                  <m.div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className={menuClasses.menu({
                      className: cn(className, classNames?.popover),
                    })}
                    initial={{ opacity: 0, top: -10 }}
                    animate={{ opacity: 1, top: 0 }}
                    exit={{ opacity: 0, top: 10 }}
                    {...getFloatingProps()}
                  >
                    {showArrow && (
                      <FloatingArrow
                        ref={arrowRef}
                        context={context}
                        className={cn("fill-content2", classNames?.arrow)}
                      />
                    )}
                    {children}
                  </m.div>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </AnimatePresence>
        </FloatingList>
      </MenuContext.Provider>
    </FloatingNode>
  );
};
