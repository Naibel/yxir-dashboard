"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import withProviders from "@/providers/withProviders.hoc";
import GridLayout from "@/views/GridLayout";

const Home = () => {
  return (
    <main className="p-10 h-screen">
      <div>
        <h1 className="text-2xl  font-bold">Yxir Dashboard</h1>
      </div>
      <div>
        <GridLayout />
      </div>
    </main>
  );
};

export default withProviders(Home);
