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
  donutChartConfig,
  lineChartConfig,
} from "@/mocks/chartConfigs";
import { columnsData } from "@/mocks/columnsData";
import mockData from "@/mocks/MOCK_DATA.json";
import { Cols, Item, WidgetType } from "@/types";

const widgetData = {
  donut: {
    title: "Origine des défauts matériels",
    component: <Chart config={donutChartConfig} />,
    w: 2,
    h: 3,
    minW: 1,
    minH: 2,
  },
  bar: {
    title: "Evolution des ventes (en millions d'€)",
    component: <Chart config={barChartConfig} />,
    w: 3,
    h: 3,
    minW: 2,
    minH: 2,
  },
  line: {
    title: "Evolution des commandes sur 2023",
    component: <Chart config={lineChartConfig} />,
    w: 3,
    h: 3,
    minW: 2,
    minH: 2,
  },
  table: {
    title: "Inventaire des produits",
    component: <Table tableData={mockData} columnsData={columnsData} />,
    w: 12,
    h: 5,
    minW: 6,
    minH: 5,
  },
};

type DashboardProps = {
  className?: string;
  cols?: Cols;
  rowHeight?: number;
};

const Dashboard = ({
  className = "layout",
  cols = { lg: 8, md: 6, sm: 6, xs: 4, xxs: 2 },
  rowHeight = 100,
}: DashboardProps) => {
  // Memoization to prevent rerendering and loss of the layout data
  const ResponsiveDashboard = useMemo(() => WidthProvider(Responsive), []);

  const { setAlertMessage } = useAlertStore();

  const [items, setItems] = useState<Item[]>([]);
  const [newCounter, setNewCounter] = useState(items.length);
  const [currentCols, setCurrentCols] = useState(0);

  const onAddItem = (chart: WidgetType) => {
    if (newCounter < 10) {
      setItems((prevState: Item[]) => {
        const newEntry: Item = {
          i: "n" + newCounter,
          x: (prevState.length * 2) % (currentCols || 12),
          y: Infinity, // puts it at the bottom
          w: widgetData[chart].w,
          h: widgetData[chart].h,
          minW: widgetData[chart].minW,
          minH: widgetData[chart].minH,
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
    setItems((prevItems) => prevItems.filter((item) => item.i !== i));
    setNewCounter((counter) => counter - 1);
  };

  // We're using the cols coming back from this to calculate where to add new items.
  const onBreakpointChange = (breakpoint: string, cols: number) => {
    setCurrentCols(cols);
  };

  // Memoization des widgets afin de limiter les re-rendu de la grille uniquement lors de l'ajout/suppression de widgets
  const widgets = useMemo(
    () =>
      items.map((item: Item) => (
        <div key={item.i} data-grid={item}>
          <Widget
            title={widgetData[item.type].title}
            index={item.i}
            onRemove={onRemoveItem}
          >
            {widgetData[item.type].component}
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
        <ResponsiveDashboard
          margin={[20, 20]}
          containerPadding={[0, 0]}
          draggableHandle=".allowGrab"
          draggableCancel=".cancelGrab"
          resizeHandle={<ResizableHandle />}
          onBreakpointChange={onBreakpointChange}
          className={className}
          cols={cols}
          rowHeight={rowHeight}
        >
          {widgets}
        </ResponsiveDashboard>
      ) : (
        <LayoutPlaceholder />
      )}
    </div>
  );
};

export default Dashboard;
