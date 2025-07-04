declare namespace chrome {
  export const sidePanel: {
    setPanelBehavior: (options: { openPanelOnActionClick: boolean }) => Promise<void>;
  };
} 