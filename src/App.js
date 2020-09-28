import React from "react";
import "./styles.css";
import { Menu } from "./menu";

import { Appetisers } from "./Appetisers";
import { SalmaSpecials } from "./SalmaSpecials";

export default function App() {
  return (
    <div className="main_layout">
      <Menu></Menu>
      <main>
        <Appetisers />
        <SalmaSpecials />
      </main>
    </div>
  );
}
