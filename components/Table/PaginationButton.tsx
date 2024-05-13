import { IconType } from "react-icons";
import { Tooltip } from "react-tooltip";

type PaginationButtonProps = {
  tooltip: { id: string; content: string };
  disabled: boolean;
  onClick: () => void;
  Icon: IconType;
};

const PaginationButton = ({
  tooltip,
  disabled,
  onClick,
  Icon,
}: PaginationButtonProps) => (
  <a
    className="flex"
    data-tooltip-id={tooltip.id}
    data-tooltip-content={tooltip.content}
  >
    <button
      className={disabled ? "opacity-50" : ""}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon size={30} />
    </button>
    <Tooltip place="top" id={tooltip.id} />
  </a>
);

export default PaginationButton;
