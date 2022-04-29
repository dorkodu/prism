//* libraries
import { Soda } from "@dorkodu/soda";
import { superpage } from "@dorkodu/superpage.js";

//* pages
import { Frontpage } from "./assets/js/pages/Frontpage";
import { Foundations } from "./assets/js/pages/Foundations";
import { Styles } from "./assets/js/pages/Styles";
import { Components } from "./assets/js/pages/Components";
import { Oops } from "./assets/js/pages/Oops";

//? add styles with SCSS
import "./assets/scss/style.scss";

superpage.route("/", () => {
  Soda.render(
    <Frontpage />,
    document.getElementById("root")
  );
});

superpage.route("foundations", () => {
  Soda.render(
    <Foundations/>,
    document.getElementById("root")
  );
});

superpage.route("styles", () => {
  Soda.render(
    <Styles/>,
    document.getElementById("root")
  );
});

superpage.route("components", () => {
  Soda.render(
    <Components/>,
    document.getElementById("root")
  );
});

superpage.route("oops", () => {
  Soda.render(
    <Oops/>,
    document.getElementById("root")
  );
});

superpage.fallback(() => {
  superpage.to("oops");
});

superpage.run("hash", () => {});