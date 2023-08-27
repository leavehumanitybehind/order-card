import { Provider } from "react-redux";
import { store } from "../store";
import { ReactNode } from "react";

export const WithStore = ({children}: {children:ReactNode}) => 
  <Provider store={store}>{children}</Provider>;