import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

export const Widget = ({
  index,
  onRemove,
  children,
}: {
  index: string;
  onRemove: (i: string) => void;
  children: ReactNode;
}) => (
  <div className="bg-white p-5 h-full rounded-lg shadow-lg cursor-grab">
    <span className="text">Widget</span>
    {children}
    <span
      className="remove"
      style={{
        zIndex: 10,
        position: "absolute",
        right: "10px",
        top: "10px",
        cursor: "pointer",
      }}
      onClick={() => onRemove(index)}
    >
      <IoClose className="opacity-50 hover:opacity-100" />
    </span>
  </div>
);
