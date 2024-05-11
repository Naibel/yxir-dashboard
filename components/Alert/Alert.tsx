import { IoClose } from "react-icons/io5";

import styles from "./Alert.module.css";

export type AlertType = {
  type: "error" | "warning" | "success" | "info";
  message: string;
};

const Alert = ({
  type,
  message,
  onClose,
}: AlertType & { onClose: () => void }) => (
  <div className="fixed bottom-10 left-0 right-0 z-30">
    <div
      className={`flex w-fit m-auto gap-5 items-center rounded-md shadow-lg p-5 ${styles[type]} `}
    >
      <span className="text-white">{message}</span>
      <IoClose
        className="duration-300 text-white cursor-pointer hover:bg-red-700 active:bg-red-800 rounded-full"
        onClick={onClose}
        size={30}
      />
    </div>
  </div>
);

export default Alert;
