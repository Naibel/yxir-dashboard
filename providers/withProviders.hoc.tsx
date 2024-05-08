"use client";

import AlertProvider from "@/providers/AlertProvider";

const withProviders = (WrappedComponent: React.ComponentType) => {
  const ComponentWithProviders = () => (
    <AlertProvider>
      <WrappedComponent />
    </AlertProvider>
  );
  return ComponentWithProviders;
};

export default withProviders;
