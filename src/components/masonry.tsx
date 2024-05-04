import React, { useLayoutEffect, useState } from "react";

interface MasonryProps {
  breakpointCols?: number | { default: number; [key: number]: number };
  className?: string;
  columnClassName?: string;
  children?: React.ReactNode;
  columnAttrs?: React.HTMLAttributes<HTMLDivElement>;
  column?: React.HTMLAttributes<HTMLDivElement>; // Deprecated
}

const DEFAULT_COLUMNS = 1;

const Masonry: React.FC<MasonryProps> = ({
  breakpointCols,
  className,
  columnClassName = "masonry-column",
  children,
  columnAttrs,
  column,
}) => {
  const [columnCount, setColumnCount] = useState<number>(DEFAULT_COLUMNS);
  const reCalculateColumnCount = () => {
    const windowWidth = window.innerWidth || Infinity;
    let breakpointColsObject = breakpointCols;

    if (typeof breakpointColsObject !== "object") {
      breakpointColsObject = {
        default: breakpointColsObject || DEFAULT_COLUMNS,
      };
    }

    let matchedBreakpoint = Infinity;
    let columns = breakpointColsObject.default || DEFAULT_COLUMNS;

    for (let breakpoint in breakpointColsObject) {
      const optBreakpoint = parseInt(breakpoint);
      const isCurrentBreakpoint =
        optBreakpoint > 0 && windowWidth >= optBreakpoint;

      if (isCurrentBreakpoint) {
        matchedBreakpoint = optBreakpoint;
        columns = breakpointColsObject[breakpoint];
      }
    }

    columns = Math.max(1, columns || 1);

    if (columnCount !== columns) {
      setColumnCount(columns);
    }
  };

  useLayoutEffect(() => {
    reCalculateColumnCount();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", reCalculateColumnCount);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", reCalculateColumnCount);
      }
    };
  }, []);

  const itemsInColumns = () => {
    const currentColumnCount = columnCount;
    const itemsInColumns = new Array(currentColumnCount);

    const items = React.Children.toArray(children);

    for (let i = 0; i < items.length; i++) {
      const columnIndex = i % currentColumnCount;

      if (!itemsInColumns[columnIndex]) {
        itemsInColumns[columnIndex] = [];
      }

      itemsInColumns[columnIndex].push(items[i]);
    }

    return itemsInColumns;
  };

  const renderColumns = () => {
    const childrenInColumns = itemsInColumns();
    const columnWidth = `${100 / childrenInColumns.length}%`;
    let classNameOutput = columnClassName;

    if (classNameOutput && typeof classNameOutput !== "string") {
      console.error(
        '[Masonry] The property "columnClassName" requires a string'
      );
      if (typeof classNameOutput === "undefined") {
        classNameOutput = "masonry-column";
      }
    }

    const columnAttributes = {
      ...column,
      ...columnAttrs,
      style: {
        ...columnAttrs?.style,
        // width: columnWidth,
      },
      className: classNameOutput + " " + columnCount,
    };

    return childrenInColumns.map((items, i) => {
      return (
        <div {...columnAttributes} key={i}>
          {items}
        </div>
      );
    });
  };

  let classNameOutput = className;

  if (typeof className !== "string") {
    console.error('[Masonry] The property "className" requires a string');

    if (typeof className === "undefined") {
      classNameOutput = "my-masonry-grid";
    }
  }

  return <div className={classNameOutput}>{renderColumns()}</div>;
};

export default Masonry;
