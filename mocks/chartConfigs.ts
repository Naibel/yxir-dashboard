import { Props } from "react-apexcharts";

// BAR CHART CONFIG
export const barChartConfig: Props = {
  type: "bar",
  width: "100%",
  height: "100%",
  series: [
    {
      name: "France",
      data: [80, 90, 300, 320, 500, 350, 200, 230, 500, 600],
    },
    {
      name: "UK",
      data: [100, 80, 200, 120, 300, 450, 130, 200, 300, 260],
    },
    {
      name: "Allemagne",
      data: [200, 170, 100, 220, 200, 150, 100, 80, 100, 110],
    },
    {
      name: "Hors Europe",
      data: [400, 270, 200, 250, 200, 300, 150, 280, 250, 200],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    title: {
      text: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1e1b4b", "#a5b4fc", "#6366f1", "#312e81"],
    plotOptions: {
      bar: {
        columnWidth: "80%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

// LINE CHART CONFIG
export const lineChartConfig: Props = {
  type: "area",
  height: "100%",
  width: "100%",
  series: [
    {
      name: "Commandes France",
      data: [80, 160, 100, 50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
    {
      name: "Commandes E.U. (hors France)",
      data: [400, 200, 140, 270, 400, 200, 120, 200, 250, 320, 230, 400],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#6366f1", "#312e81"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Avril",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

// PIE CHART CONFIG
export const donutChartConfig: Props = {
  type: "donut",
  width: "100%",
  height: "100%",
  series: [44, 55, 23, 43],
  options: {
    labels: [
      "Défauts mécaniques",
      "Défauts de dimensions",
      "Défauts d'aspect",
      "Coût de revient trop élevé",
    ],
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return Math.round(val) + "%";
      },
    },
    colors: ["#312e81", "#4338ca", "#6366f1", "#a5b4fc"],
    legend: {
      show: false,
    },
  },
};
