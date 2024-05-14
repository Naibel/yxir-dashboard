import { ReactNode, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

type WidgetProps = {
  title: string;
  index: string;
  onRemove: (i: string) => void;
  children: ReactNode;
};

const Widget = ({ title, index, onRemove, children }: WidgetProps) => {
  const [isHeaderOnHover, setIsHeaderOnHover] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col box-sizing bg-white h-full shadow-indigo-200 rounded-xl ${
        isHeaderOnHover ? "shadow-lg opacity-50" : ""
      } duration-300`}
    >
      <div
        onMouseEnter={() => setIsHeaderOnHover(true)}
        onMouseLeave={() => setIsHeaderOnHover(false)}
        className="flex allowGrab cursor-grab px-5 pt-5"
      >
        <span className="text flex-1 text-lg font-bold text-indigo-950">
          {title}
        </span>
      </div>
      <div className="absolute right-5 top-5">
        <a
          data-tooltip-id="close-widget"
          data-tooltip-content="Supprimer ce widget"
        >
          <button
            className="cursor-pointer z-50 duration-300 text-indigo-600 cancelGrab bg-indigo-50 rounded-full p-1 shadow-indigo-100 hover:bg-indigo-200"
            onClick={() => {
              onRemove(index);
            }}
          >
            <IoClose size={20} className="opacity-100" />
          </button>
          <Tooltip
            style={{ backgroundColor: "#6366f1", color: "#fff" }}
            id="close-widget"
          />
        </a>
      </div>
      <div className="h-full px-5 pb-5">{children}</div>
    </div>
  );
};

export default Widget;
