import React from "react"
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id : "root"},
    "Sonam is Learning React",
);
//writing above code becomes tough so we use JSX which is HTML written inside JS, JSX is more readable.
//Slight difference in between JSX and HTML
//For class use (className)
//for tabindex use (tabIndex)

//React Componenet TITLE
const Title = () => (
    <h1 id = "heading" className = "head" tabIndex = "5">
        Welcome to JSX Learning..
    </h1>
);

const elem = <span>React Element </span>;

//React element title
const title = (
  <h1 id="heading" className="head" tabIndex="5">
    {/* {elem} <br></br> */}
    Welcome to JSX Learning code 🧑🏻‍💻
  </h1>
);
const number = 1000;

//React Componenet(2 types)
//1) Class Based Component - OLD way
//2) Functional Component - NEW way

//1
const HeadingComponent = () => (
    <div id = "container">
        {999 + 9999}
        {title}
        {Title()}
        <Title/>
        <Title></Title>
        <h1 className = "heading" >Hello Sonam from functional component</h1>
        <MainComponent/>
        <h2>{number}</h2>
        {console.log("Sonam learning React inside functional component")}
    </div>
);
const MainComponent = () => (
    <h2 className = "heading">This is the main Component</h2>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);