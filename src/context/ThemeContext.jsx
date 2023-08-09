import React, { createContext, useReducer, useState } from "react";

const Context = createContext();

function ThemeContext({ children }) {
  const [isOpened, setIsOpened] = useState(false);

  const [isReg, setIsReg] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Context.Provider
      value={{ isOpened, setIsOpened, isReg, setIsReg, isLogin, setIsLogin }}
    >
      {children}
    </Context.Provider>
  );
}

export { ThemeContext, Context };
