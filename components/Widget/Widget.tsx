import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

type WidgetProps = {
  title: string;
  index: string;
  onRemove: (i: string) => void;
  children: ReactNode;
};

export const Widget = ({ title, index, onRemove, children }: WidgetProps) => (
  <div className="flex flex-col box-sizing bg-white p-5 h-full shadow-indigo-100 rounded-xl shadow-lg hover:shadow-xl duration-300 ">
    <div className="flex allowGrab cursor-grab">
      <span className="text flex-1 text-lg font-bold">{title}</span>
      <button
        className="cancelGrab remove"
        style={{
          cursor: "pointer",
          zIndex: 50,
        }}
        onClick={() => {
          onRemove(index);
        }}
      >
        <IoClose size={20} className="opacity-50 hover:opacity-100" />
      </button>
    </div>
    <div className="h-full overflow-auto ">{children}</div>
  </div>
);
