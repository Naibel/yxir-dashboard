import React from "react";
// Import dynamique afin d'implémenter le lazy loading
import dynamic from "next/dynamic";

import { chartConfig } from "./chartConfig";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = () => {
  return <Chart {...chartConfig} />;
};
export default LineChart;
