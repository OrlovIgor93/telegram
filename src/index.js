import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import {BrowserRouter} from "react-router-dom";
import "./index.css";
import {StoreProvider} from "./store";

ReactDOM.render(
    <StoreProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
);

