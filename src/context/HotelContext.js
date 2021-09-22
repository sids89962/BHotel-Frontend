import React, { useReducer, createContext } from "react";
const initialState = {
  city: null,
  hotel: null,
  quickSearch: null,
  suggestion: null,
  hotelList: [],
  hotelDetails: null,
};
const hotelReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_CITY":
      return { ...state, city: payload };
    case "GET_TRIP":
      return { ...state, quickSearch: payload };
    case "GET_CITY_HOTEL":
      return { ...state, hotel: payload };
    case "SET_SUGESSTION":
      return { ...state, suggestion: payload };
    case "SET_HOTEL_LIST":
      return { ...state, hotelList: payload };
    case "SET_HOTEL_DETAILS":
      return { ...state, hotelDetails: payload };
    default:
      return { ...state };
  }
};

export const HotelContext = createContext();
export const HotelProvider = (props) => {
  const [state, dispatch] = useReducer(hotelReducer, initialState);
  return (
    <HotelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </HotelContext.Provider>
  );
};