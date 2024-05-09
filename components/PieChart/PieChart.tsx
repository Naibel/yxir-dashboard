import dynamic from "next/dynamic";

import { chartConfig } from "./chartConfig";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  return <Chart {...chartConfig} />;
};

export default PieChart;
