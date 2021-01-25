// import React from "react";
// import ReactDOM from "react-dom";
// import Badge from "./components/Badge";
// import "./global.css";
// import BadgeNew from "./pages/BadgeNew";
// import "bootstrap/dist/css/bootstrap.css";
// import Badges from "./pages/Badges";
// import App from "./components/App";

// // const element = <h1>Hello,Obleto</h1>;
// const element = React.createElement("h1", {}, "Hola poderosos");
// const container = document.getElementById("app");
// // const name = "Johana";
// // const ejemplo = <h1>Hola soy: {name}</h1>;

// // // ReactDOM.render(__qué__, __dónde__);
// // const jsx = (
// //   <div>
// //     <h2>Hola {name}</h2>
// //     <p>
// //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex veritatis
// //       doloremque sequi nam alias sit necessitatibus modi, id suscipit illum esse
// //       at iusto iure consequatur doloribus nihil non facere repellendus!
// //     </p>
// //   </div>
// // );

// // ReactDOM.render(
// //   <Badge
// //     firstName="Jefferson"
// //     lastName="Paz"
// //     jobTitle="Mechatronics Enginnering"
// //     email="pazjefferson11216"
// //   />,
// //   container
// // );
// // ReactDOM.render(<BadgeNew />, container);
// ReactDOM.render(<App />, container);

import React from "react";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import App from "./components/App";

const container = document.getElementById("app");

render(<App />, container);
