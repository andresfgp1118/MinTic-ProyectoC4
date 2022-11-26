import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  car: {
    carItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CAR_ADD_ITEM":
      //Cuando se agrega un pago al carrito de pagos.
      const newItem = action.payload;
      const existItem = state.car.carItems.find(
        (item) => item._id === newItem._id
      );
      const carItems = existItem
        ? state.car.carItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.car.carItems, newItem];
      return { ...state, car: { ...state.car, carItems } };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
