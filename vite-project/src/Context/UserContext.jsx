import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
export const useBattery = () => {
  return useContext(BatteryContext);
};

export const UserProvider = ({ children }) => {
  const [authuser, setAuthUser] = useState(false);
  const [stopDecrease, setStopDecrease] = useState(false);

  const [level, setLevel] = useState(100);

  // Simulate battery level decrease over time
  useEffect(() => {
    const interval = setInterval(() => {
      if (stopDecrease) {
        //to check if it is stop or not
        setLevel((prevLevel) => Math.max(prevLevel - 1, 0)); // Decrease battery level by 1
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [stopDecrease]);
  const contextValue = {
    authuser,
    setAuthUser,
    level,
    setLevel,
    stopDecrease,
    setStopDecrease,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
