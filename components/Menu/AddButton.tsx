import { FaPlus } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

type AddButtonProps = {
  onClick: () => void;
};

const AddButton = ({ onClick }: AddButtonProps) => (
  <div className="bottom-10 right-10 z-30">
    <a
      data-tooltip-id="add-button-tooltip"
      data-tooltip-content="Ajouter un widget"
    >
      <button
        className=" shadow-indigo-700/50 shadow-lg p-4 bg-indigo-500 hover:bg-indigo-600 active:bg-sky-700 duration-300 rounded-full text-white"
        onClick={onClick}
      >
        <FaPlus size={20} />
      </button>
    </a>
    <Tooltip id="add-button-tooltip" />
  </div>
);

export default AddButton;
