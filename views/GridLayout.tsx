import { useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import BarChart from "@/components/BarChart/BarChart";
import LineChart from "@/components/LineChart/LineChart";
import Menu from "@/components/Menu/Menu";
import PieChart from "@/components/PieChart/PieChart";
import Table from "@/components/Table/Table";
import { Widget } from "@/components/Widget/Widget";
import { useAlertStore } from "@/hooks";
import { columnsData } from "@/mocks/columnsData";
import mockData from "@/mocks/MOCK_DATA.json";
import { ChartType, Cols, Item, LayoutType } from "@/types/types";

const ResponsiveGridLayout = WidthProvider(Responsive);

const getComponent = (chart: ChartType) => {
  switch (chart) {
    case "pie":
      return <PieChart />;
    case "bar":
      return <BarChart />;
    case "line":
      return <LineChart />;
    case "table":
      return <Table tableData={mockData} columnsData={columnsData} />;
    default:
      return <Table tableData={mockData} columnsData={columnsData} />;
  }
};

const chartData = {
  pie: {
    title: "Diagramme en camenbert",
    w: 2,
    h: 3,
  },
  bar: {
    title: "Diagramme en barres",
    w: 3,
    h: 3,
  },
  line: {
    title: "Diagramme en lignes",
    w: 3,
    h: 3,
  },
  table: {
    title: "Tableau",
    w: 6,
    h: 4,
  },
};

type GridLayoutProps = {
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
}: GridLayoutProps) => {
  const { setAlertMessage } = useAlertStore();

  const [items, setItems] = useState<Item[]>([]);
  const [newCounter, setNewCounter] = useState(items.length);
  // const [breakpoint, setBreakpoint] = useState(0);
  const [currentCols, setCurrentCols] = useState(0);
  // const [layout, setLayout] = useState(0);

  const createElement = (item: Item) => {
    return (
      <div key={item.i} data-grid={item}>
        <Widget
          title={chartData[item.type].title}
          index={item.i}
          onRemove={onRemoveItem}
        >
          {getComponent(item.type)}
        </Widget>
      </div>
    );
  };

  const onAddItem = (chart: ChartType) => {
    /*eslint no-console: 0*/
    console.log("adding", "n" + newCounter);

    if (newCounter < 10) {
      // Add a new item. It must have a unique key!
      setItems((prevState: Item[]) => {
        const newEntry: Item = {
          i: "n" + newCounter,
          x: (prevState.length * 2) % (currentCols || 12),
          y: Infinity, // puts it at the bottom
          w: chartData[chart].w,
          h: chartData[chart].h,
          type: chart,
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
    setItems((prevItems) => prevItems.filter((item) => item.i !== i));
    setNewCounter((counter) => counter - 1);
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

  const grids = useMemo(
    () => items.map((item) => createElement(item)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newCounter]
  );

  return (
    <div>
      <Menu onAddItem={onAddItem} />
      <ResponsiveGridLayout
        onLayoutChange={onLayoutChangeHandler}
        onBreakpointChange={onBreakpointChange}
        className={className}
        cols={cols}
        rowHeight={rowHeight}
      >
        {grids}
      </ResponsiveGridLayout>
    </div>
  );
};

export default GridLayout;
