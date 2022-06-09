//* libraries
import { Soda } from "@dorkodu/soda";

//? add styles with SCSS
import "./source/styles/style.scss";

//? website
import { Website } from "./source/Website";

Soda.render(
  <Website/>,
  document.getElementById("root")
);