import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { players } from "./Players";

import { App } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App initialPlayers={players} />
  </StrictMode>,
  rootElement
);
