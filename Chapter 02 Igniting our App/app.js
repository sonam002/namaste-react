import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "h1",
    {
        id : "title",
        key: "heading",
    },
    "Sonam Verma"
);
const heading1 = React.createElement(
    "h1",
    {
        id : "title1",
        key: "heading1",
    },
    "Sonam Verma updated heading no two"
);
const container = React.createElement(
    "div",
    {
        id : "container",
    },
    [heading, heading1,]
);
//create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react Element inside root
root.render(container);