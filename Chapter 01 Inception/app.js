//Manipulate HTML DOM using JS
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste All";
// const root = document.getElementById("root");
// root.appendChild(heading);

//Create h1 element and whatever we want to print in tha h1 element (nested)
//React JS core parts
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "I am H1 tag inside div 1"),
    React.createElement("h2", { key: "h2-1" }, "I am H2 tag inside div 1"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I am H1 tag inside div 2"),
    React.createElement("h2", { key: "h2-2" }, "I am H2 tag inside div 2"),
  ]),
]);

//single element(not nested)
const heading = React.createElement(
    "h1", {id : "heading", xyz : "abc"}, "Hello from React only single element"
);
//returning what inside parent
console.log(parent);

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering heading in the root
root.render(parent);
//root.render(heading);