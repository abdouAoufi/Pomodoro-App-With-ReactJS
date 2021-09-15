import React, { useState } from "react";

export const timecontext = React.createContext();

export const TimeProvider = (props) => {
  const [time, setTime] = useState(25);
  return (
    <timecontext.Provider value={{ time, setTime }}>
      {props.children}
    </timecontext.Provider>
  );
};
