import React from "react";
import ReactDOM from "react-dom";

import First from "./components/first.jsx";

const el = <First name="Test" />;

ReactDOM.render(
    el,
    document.querySelector("#app")
);
