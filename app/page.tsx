"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import withProviders from "@/providers/withProviders.hoc";
import Dashboard from "@/views/Dashboard";

const Home = () => (
  <main className="flex flex-col min-h-screen box-sizing p-4 md:p-10">
    <div className="pb-4">
      <h1 className="text-3xl text-indigo-950 font-bold">Mon Dashboard</h1>
    </div>
    <Dashboard />
  </main>
);

export default withProviders(Home);
