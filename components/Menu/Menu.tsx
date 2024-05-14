import { useState } from "react";
import { FaChartBar, FaChartLine, FaChartPie, FaTable } from "react-icons/fa";

import AddButton from "./AddButton";
import ChartButton from "./ChartButton";

import { ChartType } from "@/types";

const Menu = ({ onAddItem }: { onAddItem: (type: ChartType) => void }) => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const handleAddButton = (type: ChartType) => {
    setIsMenuDisplayed((prevState) => !prevState);
    onAddItem(type);
  };
  return (
    <div className="fixed flex flex-col gap-2 bottom-10 right-10 z-40">
      {isMenuDisplayed && (
        <div className="flex flex-col gap-2">
          <ChartButton
            tooltip={{ id: "chart-bar-button", content: "Diagramme à barre" }}
            onClick={() => handleAddButton("bar")}
            Icon={FaChartBar}
          />
          <ChartButton
            tooltip={{
              id: "chart-pie-button",
              content: "Diagramme à camenbert",
            }}
            onClick={() => handleAddButton("pie")}
            Icon={FaChartPie}
          />
          <ChartButton
            tooltip={{
              id: "chart-line-button",
              content: "Diagramme à ligne",
            }}
            onClick={() => handleAddButton("line")}
            Icon={FaChartLine}
          />
          <ChartButton
            tooltip={{
              id: "table-button",
              content: "Tableau",
            }}
            onClick={() => handleAddButton("table")}
            Icon={FaTable}
          />
        </div>
      )}
      <AddButton
        onClick={() => {
          setIsMenuDisplayed((prevState) => !prevState);
        }}
      />
    </div>
  );
};

export default Menu;
