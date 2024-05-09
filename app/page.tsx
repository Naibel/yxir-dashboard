"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import GridLayout from "@/components/GridLayout/GridLayout";
import withProviders from "@/providers/withProviders.hoc";

const Home = () => {
  return (
    <main className="p-10 h-screen">
      <div className="">
        <h1>Yxir Dashboard</h1>
      </div>
      <div>
        <GridLayout />
      </div>
    </main>
  );
};

export default withProviders(Home);
