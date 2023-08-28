import { createSlice } from "@reduxjs/toolkit";
import { orderState } from "./types";
import { RootState } from "app/store";

export const initialState: orderState = {
  activeTab: { key: "sell", label: "Sell" },
  currency: {
    from: {
      code: "BTC",
      name: "Bitcoin",
    },
    to: {
      code: "IRR",
      name: "",
    },
  },
  course: {
    to: 503415541,
    from: 1,
    from_to_usd: 19564.64842,
    dynamic: 0.15,
  },
  balance: { amount: 0.0014536, currency: "BTC" },
  toggledPrice: true,
  calcValues: {
    from: 0,
    to: 0,
    desired_price: 503415541,
    balance_percent: 0,
    timeOrder: {
      hh: "00",
      mm: "00",
    },
  },
};

export const orderModel = createSlice({
  name: "order",
  initialState,
  reducers: {
    setToggledPrice: (state, { payload }) => {
      state.toggledPrice = payload;
    },
    setCalcValue: (state, { payload }) => {
      state.calcValues = { ...state.calcValues, ...payload };
    },
    setIsActiveTab: (state, { payload }) => {
      state.activeTab = payload;
    },
  },
});

export const getBalance = (state: RootState) => state.order.balance;
export const getCurrency = (state: RootState) => state.order.currency;
export const getCourse = (state: RootState) => state.order.course;
export const getCalcValues = (state: RootState) => state.order.calcValues;
export const getActiveTab = (state: RootState) => state.order.activeTab;

export const { setCalcValue, setIsActiveTab } = orderModel.actions;

export const reducer = orderModel.reducer;
