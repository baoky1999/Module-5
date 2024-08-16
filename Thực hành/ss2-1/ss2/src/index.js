// ss2
//
// import React from "react";
// import ReactDOM from "react-dom/client";
//
// const name = "Your name";
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(
//     React.createElement("h1", { style: { textAlign: "center" } }, name)
// );


// ss3

// import ReactDOM from "react-dom/client";
//
// const name = "Your name";
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);


// ss3

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
    root.render(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};

setInterval(tick, 1000);