import React from "react";

export const useTabs = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newTub: number) => {
    setTab(newTub);
  };
  return {
    tab,
    handleTabChange,
  };
};
