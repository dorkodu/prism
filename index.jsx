//* libraries
import { Soda } from "@dorkodu/soda";
import { Superpage } from "@dorkodu/superpage.js";

//* pages
import { Frontpage } from "./assets/js/pages/Frontpage";

//? add styles with SCSS
import "./assets/scss/style.scss";

// TODO: add superpage router by-default and add multiple pages

Soda.render(
  <Frontpage />,
  document.getElementById("root")
);