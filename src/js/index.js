//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/simpleCounter.css";

//import your own components
import Home from "./component/home.jsx"

let counter = 0;

//render your react application
setInterval(function () {
    ReactDOM.render(<Home counter={counter}/>, document.querySelector("#app"));
    counter++;
    console.log(counter)
}, 1000);

