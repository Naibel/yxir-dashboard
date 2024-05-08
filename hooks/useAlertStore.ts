import { create } from "zustand";

import { AlertType } from "@/components/Alert/Alert";

interface StoreState {
  alertMessage: AlertType | null;
  setAlertMessage: (newValue: AlertType | null) => void;
}

const useAlertStore = create<StoreState>()((set) => ({
  alertMessage: null,
  setAlertMessage: (newValue: AlertType | null) =>
    set(() => ({ alertMessage: newValue })),
}));

export default useAlertStore;
