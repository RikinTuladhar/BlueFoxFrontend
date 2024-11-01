'use client'
import React from "react";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
const ProviderRedux = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux;
