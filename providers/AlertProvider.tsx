import { ReactNode } from "react";
import { createPortal } from "react-dom";

import Alert from "@/components/Alert/Alert";
import { useAlertStore } from "@/hooks";

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const { alertMessage, setAlertMessage } = useAlertStore();

  return (
    <>
      {alertMessage &&
        createPortal(
          <Alert
            type={alertMessage.type}
            message={alertMessage.message}
            onClose={() => setAlertMessage(null)}
          />,
          document.body
        )}
      {children}
    </>
  );
};

export default AlertProvider;
