import { IconType } from "react-icons";
import { Tooltip } from "react-tooltip";

type ChartButtonProps = {
  tooltip: { id: string; content: string };
  Icon: IconType;
  onClick: () => void;
};

const ChartButton = ({ tooltip, Icon, onClick }: ChartButtonProps) => (
  <div onClick={onClick}>
    <a data-tooltip-id={tooltip.id} data-tooltip-content={tooltip.content}>
      <button className="shadow-indigo-200 text-gray-600 shadow-lg z-20 p-4 bg-white hover:bg-gray-600 hover:text-white active:bg-gray-700 duration-300 rounded-full">
        <Icon size={20} />
      </button>
    </a>
    <Tooltip id={tooltip.id} place={"left"} />
  </div>
);

export default ChartButton;
