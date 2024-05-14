import { useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import {
  Chart,
  LayoutPlaceholder,
  Menu,
  ResizableHandle,
  Table,
  Widget,
} from "@/components";
import { useAlertStore } from "@/hooks";
import {
  barChartConfig,
  lineChartConfig,
  pieChartConfig,
} from "@/mocks/chartConfigs";
import { columnsData } from "@/mocks/columnsData";
import mockData from "@/mocks/MOCK_DATA.json";
import { ChartType, Cols, Item, LayoutType } from "@/types";

const getComponent = (chart: ChartType) => {
  switch (chart) {
    case "pie":
      return <Chart config={pieChartConfig} />;
    case "bar":
      return <Chart config={barChartConfig} />;
    case "line":
      return <Chart config={lineChartConfig} />;
    case "table":
      return <Table tableData={mockData} columnsData={columnsData} />;
    default:
      return <div></div>;
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
    w: 12,
    h: 5,
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
  // Memoization to prevent rerendering and loss of the layout data
  const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);

  const { setAlertMessage } = useAlertStore();

  const [items, setItems] = useState<Item[]>([]);
  const [newCounter, setNewCounter] = useState(items.length);
  const [breakpoint, setBreakpoint] = useState();
  const [currentCols, setCurrentCols] = useState(0);
  const [layout, setLayout] = useState();

  const onAddItem = (chart: ChartType) => {
    /*eslint no-console: 0*/
    console.log("adding", "n" + newCounter);

    if (newCounter < 10) {
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
    setBreakpoint(breakpoint);
    setCurrentCols(cols);
  };

  const onLayoutChangeHandler = (layout: any) => {
    onLayoutChange && onLayoutChange(layout);
    setLayout(layout);
  };

  // Memoization des widgets afin de limiter les re-rendu de la grille uniquement lors de l'ajout/suppression de widgets
  const widgets = useMemo(
    () =>
      items.map((item: Item) => (
        <div key={item.i} data-grid={item}>
          <Widget
            title={chartData[item.type].title}
            index={item.i}
            onRemove={onRemoveItem}
          >
            {getComponent(item.type)}
          </Widget>
        </div>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newCounter]
  );

  return (
    <div className={widgets.length === 0 ? `flex flex-1` : ""}>
      <Menu onAddItem={onAddItem} />
      {widgets.length > 0 ? (
        <ResponsiveGridLayout
          margin={[20, 20]}
          containerPadding={[0, 0]}
          draggableHandle=".allowGrab"
          draggableCancel=".cancelGrab"
          resizeHandle={<ResizableHandle />}
          onLayoutChange={onLayoutChangeHandler}
          onBreakpointChange={onBreakpointChange}
          className={className}
          cols={cols}
          rowHeight={rowHeight}
        >
          {widgets}
        </ResponsiveGridLayout>
      ) : (
        <LayoutPlaceholder />
      )}
    </div>
  );
};

export default GridLayout;
