import { ReactNode } from "react";
import { Tooltip } from "react-tooltip";

type ChartButtonProps = {
  tooltipId: string;
  tooltipText: string;
  children: ReactNode;
  onClick: () => void;
};

const ChartButton = ({
  tooltipId,
  tooltipText,
  children,
  onClick,
}: ChartButtonProps) => (
  <div onClick={onClick}>
    <a data-tooltip-id={tooltipId} data-tooltip-content={tooltipText}>
      <button
        className="shadow-indigo-200 text-neutral-600 shadow-lg z-20 p-4 bg-white hover:bg-neutral-600 hover:text-white active:bg-neutral-700 duration-300 rounded-full text-white"
        onClick={() => {}}
      >
        {children}
      </button>
    </a>
    <Tooltip id={tooltipId} />
  </div>
);

export default ChartButton;
