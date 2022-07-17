import React from "react";
import "./assets/styles/styles.scss";

// Your top level component
import App from "./App";

import {createRoot} from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
