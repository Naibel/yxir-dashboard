import { Props } from "react-apexcharts";
import dynamic from "next/dynamic";

// Import dynamique afin d'implémenter le lazy loading
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart = ({ config }: { config: Props }) => {
  return <ApexChart {...config} />;
};

export default Chart;
