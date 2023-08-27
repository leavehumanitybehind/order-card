import { configureStore } from "@reduxjs/toolkit";

import { orderModel } from "entities/order";

export const store = configureStore({
  reducer: {
    order: orderModel.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
