"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { initialState, INITIALSTATETYPE } from "./page.type";

const context = createContext<INITIALSTATETYPE>(initialState);

export function PageProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState({
    value: "",
    fromType: 1,
    toType: 2,
    error: "",
    result: "",
  });

  const convert = () => {
    const { fromType, toType, value } = state;

    const baseConverter: Record<number, number> = {
      1: 10,
      2: 2,
      8: 8,
      16: 16,
    };

    const baseFrom = baseConverter[fromType];
    const baseTo = baseConverter[toType];

    if (!(fromType === 1 || toType === 1)) {
      return setState({
        ...state,
        error: "Selain x to decimal or decimal to x, tidak dibolehkan",
      });
    }

    let temp;
    temp = parseInt(value, baseFrom);

    const result = temp.toString(baseTo);

    setState({ ...state, result });
  };

  // handle input
  const handleChangeInput = (value: string) => {
    setState({ ...state, value });
  };

  // handle select from type
  const handleSelectFromType = (id: number) => {
    setState({ ...state, fromType: id, error: "" });
  };

  // handle select to type
  const handleSelectToType = (id: number) => {
    setState({ ...state, toType: id, error: "" });
  };

  return (
    <context.Provider
      value={{
        action: {
          handleChangeInput,
          handleSelectFromType,
          handleSelectToType,
          convert,
        },
        state,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default function usePageTest1() {
  return useContext(context);
}
