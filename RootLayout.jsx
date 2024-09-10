import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPanel from "./NavbarPanel";
import store from "./store/store";
import {Provider} from 'react-redux'


function RootLayout() {
  return (
    <Provider store={store}>
      <NavbarPanel />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
}

export default RootLayout;
