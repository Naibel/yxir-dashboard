import dynamic from "next/dynamic";

import { chartConfig } from "./chartConfig";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  return <Chart {...chartConfig} />;
};

export default BarChart;
