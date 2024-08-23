export type INITIALSTATETYPE = {
  action: {
    convert: () => void;
    handleChangeInput: (value: string) => void;
    handleSelectFromType: (id: number) => void;
    handleSelectToType: (id: number) => void;
  };
  state: {
    value: string;
    fromType: number;
    toType: number;
    error: string;
    result: string;
  };
};

export const initialState: INITIALSTATETYPE = {
  action: {
    convert: () => {},
    handleChangeInput: () => {},
    handleSelectFromType: () => {},
    handleSelectToType: () => {},
  },
  state: {
    value: "",
    fromType: 1,
    toType: 2,
    error: "",
    result: "",
  },
};
