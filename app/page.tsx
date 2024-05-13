"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import withProviders from "@/providers/withProviders.hoc";
import GridLayout from "@/views/GridLayout";

const Home = () => (
  <main className="flex flex-col h-screen">
    <div className="px-4 pt-4 md:px-10 md:pt-10">
      <h1 className="text-3xl text-indigo-950 font-bold">My Dashboard</h1>
    </div>
    <GridLayout />
  </main>
);

export default withProviders(Home);
