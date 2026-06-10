"use client";

import { createContext, use } from "react";

import { useRender } from "@base-ui/react/use-render";

import { tableStyles } from "./styles";

import type { TableVariants } from "./styles";

const TableContext = createContext<{
  styles: ReturnType<typeof tableStyles>;
} | null>(null);

const useTableContext = () => {
  const ctx = use(TableContext);
  if (!ctx) {
    throw new Error("useTableContext must be used within a TableContext");
  }
  return ctx;
};

export const Table = (props: Table.Props) => {
  const {
    variant,
    radius,
    density,
    isHeaderSticky,
    allowHover,
    separateRows,
    className,
    render,
    ...restProps
  } = props;
  const styles = tableStyles({
    variant,
    radius,
    density,
    isHeaderSticky,
    allowHover,
    separateRows,
  });

  const renderElement = useRender({
    defaultTagName: "table",
    props: {
      ...restProps,
      "data-slot": "table",
      className: styles.root({ className }),
    },
    render,
  });

  return <TableContext value={{ styles }}>{renderElement}</TableContext>;
};

export namespace Table {
  export interface Props
    extends useRender.ComponentProps<"table">, TableVariants {}
}

export const TableHeader = (props: TableHeader.Props) => {
  const { styles } = useTableContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "thead",
    props: {
      ...rest,
      "data-slot": "header",
      className: styles.thead({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace TableHeader {
  export interface Props extends useRender.ComponentProps<"thead"> {}
}

export const TableColumn = (props: TableColumn.Props) => {
  const { styles } = useTableContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "th",
    props: {
      ...rest,
      "data-slot": "column",
      className: styles.th({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace TableColumn {
  export interface Props extends useRender.ComponentProps<"th"> {}
}

export const TableRow = (props: TableRow.Props) => {
  const { styles } = useTableContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "tr",
    props: {
      ...rest,
      "data-slot": "row",
      className: styles.tr({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace TableRow {
  export interface Props extends useRender.ComponentProps<"tr"> {}
}

export const TableCell = (props: TableCell.Props) => {
  const { styles } = useTableContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "td",
    props: {
      ...rest,
      "data-slot": "cell",
      className: styles.td({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace TableCell {
  export interface Props extends useRender.ComponentProps<"td"> {}
}

export const TableEmptyState = () => {
  return (
    <TableRow>
      <TableCell className="text-center py-12" colSpan={100}>
        No data found
      </TableCell>
    </TableRow>
  );
};

export const TableBody = (props: TableBody.Props) => {
  const { styles } = useTableContext();
  const {
    className,
    children,
    emptySlot = <TableEmptyState />,
    render,
    ...rest
  } = props;
  const composedChildren = children ?? emptySlot;
  const renderElement = useRender({
    defaultTagName: "tbody",
    props: {
      ...rest,
      "data-slot": "body",
      className: styles.tbody({ className }),
      children: composedChildren,
    },
    render,
  });
  return renderElement;
};

export namespace TableBody {
  export interface Props extends useRender.ComponentProps<"tbody"> {
    emptySlot?: React.ReactNode;
  }
}

export const TableFooter = (props: TableFooter.Props) => {
  const { styles } = useTableContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "tfoot",
    props: {
      ...rest,
      "data-slot": "footer",
      className: styles.tfoot({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace TableFooter {
  export interface Props extends useRender.ComponentProps<"tfoot"> {}
}
