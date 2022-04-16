import { Soda } from "@dorkodu/soda";

import { Frontpage } from "./assets/js/pages/Frontpage";

import "./assets/scss/style.scss";

Soda.render(
  <Frontpage />,
  document.getElementById("root")
);