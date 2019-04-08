// index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, hashHistory, Route, IndexRedirect } from "react-router";

import { AppRouter } from "components/App";

import "styles/index.scss";

ReactDOM.render(
    <AppRouter/>,
    document.getElementById("root")
);
