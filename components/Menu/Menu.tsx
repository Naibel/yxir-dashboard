import { useState } from "react";
import { FaChartBar, FaChartLine, FaChartPie, FaTable } from "react-icons/fa";

import AddButton from "./AddButton";
import ChartButton from "./ChartButton";

import { ChartType } from "@/types/types";

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
            tooltipId={"chart-bar-button"}
            tooltipText={"Diagramme à barres"}
            onClick={() => handleAddButton("bar")}
          >
            <FaChartBar size={20} />
          </ChartButton>
          <ChartButton
            tooltipId={"chart-pie-button"}
            tooltipText={"Diagramme à camenbert"}
            onClick={() => handleAddButton("pie")}
          >
            <FaChartPie size={20} />
          </ChartButton>
          <ChartButton
            tooltipId={"chart-line-button"}
            tooltipText={"Diagramme à ligne"}
            onClick={() => handleAddButton("line")}
          >
            <FaChartLine size={20} />
          </ChartButton>
          <ChartButton
            onClick={() => handleAddButton("table")}
            tooltipId={"table-button"}
            tooltipText={"Tableau"}
          >
            <FaTable size={20} />
          </ChartButton>
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
