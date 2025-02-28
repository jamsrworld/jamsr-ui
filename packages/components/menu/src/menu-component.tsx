/* eslint-disable react/prop-types */
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
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
import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type UIProps,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { AnimatePresence, m, type Variants, type Variant } from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import { menuVariants, type MenuSlots, type MenuVariantProps } from "./styles";
import { MenuContext, useMenu, type MenuContextType } from "./use-menu";

type Props = MenuVariantProps & {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  triggerOn?: "hover" | "click";
  placement?: Placement;
  nestedPlacement?: Placement;
  offset?: number;
  nestedOffset?: number;
  classNames?: SlotsToClasses<MenuSlots>;
  showArrow?: boolean;
  isOpen?: boolean;
  initialOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
  closeOnEscapeKey?: boolean;
  closeOnOutsidePress?: boolean;
  lockScroll?: boolean;
  motionVariants?: Variants;
};
export type MenuProps = Props & ComponentProps<"div">;

const motionVariants = {
  initial: (placement: Placement) => {
    return {
      opacity: 0,
      ...(placement.startsWith("bottom") && {
        top: -10,
      }),
      ...(placement.startsWith("top") && {
        top: 10,
      }),
      ...(placement.startsWith("right") && {
        left: -10,
      }),
      ...(placement.startsWith("left") && {
        left: 10,
      }),
    } satisfies Variant;
  },
  animate: (placement: Placement) => {
    return {
      opacity: 1,
      ...(placement.startsWith("bottom") && {
        top: 0,
      }),
      ...(placement.startsWith("top") && {
        top: 0,
      }),
      ...(placement.startsWith("right") && {
        left: 0,
      }),
      ...(placement.startsWith("left") && {
        left: 0,
      }),
    } satisfies Variant;
  },
  exit: (placement: Placement) => {
    return {
      opacity: 0,
      ...(placement.startsWith("bottom") && {
        top: 10,
      }),
      ...(placement.startsWith("top") && {
        top: -10,
      }),
      ...(placement.startsWith("right") && {
        left: 10,
      }),
      ...(placement.startsWith("left") && {
        left: -10,
      }),
    } satisfies Variant;
  },
};

export const MenuComponent = ($props: MenuProps) => {
  const { menu: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    menuVariants.variantKeys,
  );
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;

  const {
    as,
    children,
    trigger,
    triggerOn = "click",
    placement = isNested ? "right-start" : "bottom-end",
    className,
    classNames,
    offset: $offset = isNested ? 2 : 4,
    showArrow = false,
    isOpen: propOpen,
    initialOpen = false,
    onOpenChange,
    openDelay = 75,
    closeDelay = 0,
    closeOnEscapeKey = true,
    closeOnOutsidePress = true,
    lockScroll = true,
    motionVariants: propMotionVariants,
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
  const item = useListItem();

  const { floatingStyles, refs, context } = useFloating<HTMLDivElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      offset({
        mainAxis: $offset,
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
    delay: { open: openDelay, close: closeDelay },
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
  const dismiss = useDismiss(context, {
    bubbles: true,
    escapeKey: closeOnEscapeKey,
    outsidePress: closeOnOutsidePress,
  });
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

  const styles = menuVariants(variantProps);
  const value: MenuContextType = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      getItemProps,
      setHasFocusInside,
      isOpen,
      classNames,
      styles,
    }),
    [activeIndex, classNames, getItemProps, isOpen, styles],
  );

  const isActive = isOpen && hasFocusInside && isNested;
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
            onMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
              restProps.onMouseEnter?.(event);
              setHasFocusInside(false);
              parent.setHasFocusInside(true);
            },
          }),
        )}
        data-active={dataAttr(isActive)}
        data-nested={dataAttr(isNested)}
        data-open={dataAttr(isOpen)}
        className={
          !isNested
            ? styles.base({ className: classNames?.base })
            : styles.menuItem({ className: classNames?.menuItem })
        }
      >
        {trigger}
        {isNested && <ChevronRightIcon aria-hidden className="ml-auto" />}
      </div>
      <MenuContext.Provider value={value}>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          <AnimatePresence>
            {isOpen && (
              <FloatingPortal>
                <FloatingOverlay
                  className={styles.backdrop({
                    className: classNames?.backdrop,
                  })}
                  data-slot="backdrop"
                  lockScroll={lockScroll}
                >
                  <FloatingFocusManager
                    context={context}
                    modal
                    initialFocus={-1}
                    returnFocus={!isNested}
                    disabled
                  >
                    <div
                      ref={refs.setFloating}
                      style={floatingStyles}
                      className={styles.popover({
                        className: cn(className, classNames?.popover),
                      })}
                      {...getFloatingProps()}
                    >
                      {showArrow && (
                        <FloatingArrow
                          ref={arrowRef}
                          context={context}
                          className={styles.arrow({
                            className: classNames?.arrow,
                          })}
                        />
                      )}
                      <m.ul
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={placement}
                        variants={propMotionVariants ?? motionVariants}
                        className={styles.content({
                          className: cn(className, classNames?.content),
                        })}
                      >
                        {children}
                      </m.ul>
                    </div>
                  </FloatingFocusManager>
                </FloatingOverlay>
              </FloatingPortal>
            )}
          </AnimatePresence>
        </FloatingList>
      </MenuContext.Provider>
    </FloatingNode>
  );
};
