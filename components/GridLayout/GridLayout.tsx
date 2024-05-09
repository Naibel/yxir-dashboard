import { useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import BarChart from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";
import PieChart from "../PieChart/PieChart";
import { Widget } from "../Widget/Widget";

import { useAlertStore } from "@/hooks";
import { Cols, Item, LayoutType } from "@/types/types";

const ResponsiveGridLayout = WidthProvider(Responsive);

type GridLayoutType = {
  className?: string;
  cols?: Cols;
  rowHeight?: number;
  onLayoutChange?: (layout: LayoutType[]) => void;
};

const GridLayout = ({
  className = "layout",
  cols = { lg: 8, md: 6, sm: 6, xs: 4, xxs: 2 },
  rowHeight = 100,
  onLayoutChange,
}: GridLayoutType) => {
  const { setAlertMessage } = useAlertStore();

  const [items, setItems] = useState<Item[]>(
    [0, 1, 2, 3, 4].map(function (i) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
      };
    })
  );

  const [newCounter, setNewCounter] = useState(items.length);
  // const [breakpoint, setBreakpoint] = useState(0);
  const [currentCols, setCurrentCols] = useState(0);
  // const [layout, setLayout] = useState(0);

  const createElement = (item: Item) => {
    const i = item.add ? "+" : item.i;

    return (
      <div key={i} data-grid={item}>
        <Widget index={i} onRemove={onRemoveItem}>
          <PieChart />
        </Widget>
      </div>
    );
  };

  const onAddItem = () => {
    /*eslint no-console: 0*/
    console.log("adding", "n" + newCounter);

    if (newCounter < 10) {
      // Add a new item. It must have a unique key!
      setItems((prevState: Item[]) => {
        const newEntry: Item = {
          i: "n" + newCounter,
          x: (prevState.length * 2) % (currentCols || 12),
          y: Infinity, // puts it at the bottom
          w: 2,
          h: 2,
        };
        return [...prevState, newEntry];
      });

      setNewCounter((counter) => counter + 1);
    } else {
      setAlertMessage({
        type: "error",
        message: "Vous avez déjà ajouté 10 widgets.",
      });
    }
  };

  const onRemoveItem = (i: string) => {
    console.log("removing", i);
    setItems((prevState) => prevState.filter((item) => item.i !== i));
  };

  // We're using the cols coming back from this to calculate where to add new items.
  const onBreakpointChange = (breakpoint: any, cols: any) => {
    // setBreakpoint(breakpoint);
    setCurrentCols(cols);
  };

  const onLayoutChangeHandler = (layout: any) => {
    onLayoutChange && onLayoutChange(layout);
    // setLayout(layout);
  };

  const children = useMemo(
    () => items.map((item) => createElement(item)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newCounter]
  );

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveGridLayout
        onLayoutChange={onLayoutChangeHandler}
        onBreakpointChange={onBreakpointChange}
        className={className}
        cols={cols}
        rowHeight={rowHeight}
      >
        {children}
      </ResponsiveGridLayout>
    </div>
  );
};

export default GridLayout;
