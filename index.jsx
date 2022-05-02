//* libraries
import { Soda } from "@dorkodu/soda";
import { superpage } from "@dorkodu/superpage.js";

//? add styles with SCSS
import "./assets/scss/style.scss";

//? website
import { Website } from "./assets/js/Website";

Soda.render(
  <Website/>,
  document.getElementById("root")
);