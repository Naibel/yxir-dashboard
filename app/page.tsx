"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import ResponsiveAddRemove from "@/components/GridLayout";
import AlertProvider from "@/providers/AlertProvider";

export default function Home() {
  return (
    <AlertProvider>
      <main className="p-10 h-screen">
        <div className="">
          <h1>Yxir Dashboard</h1>
        </div>
        <div>
          <ResponsiveAddRemove />
        </div>
      </main>
    </AlertProvider>
  );
}
