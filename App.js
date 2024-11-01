const parent=React.createElement("div",{
    id:"parent"},
    React.createElement("div",{
        id:"child"},
    React.createElement("h1",{},"I'm h1 tag"))
);

console.log(parent);//object
const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);