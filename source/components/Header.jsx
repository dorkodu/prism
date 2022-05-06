import { Soda } from "@dorkodu/soda";

//* components
import { Image } from "../components/Image";

//* images
import PrismLogo from "../../../images/prism.svg";

export function Header() {
  return (
    <header class="header">
      <div class="__content">
        <div class="__logo">
          <Image source={PrismLogo} title="prism logo" />
        </div>
        <nav class="__nav">
          <ul>
            <li><a href="/" rel="dofollow">foreword</a></li>
            <li><a href="#foundations" rel="dofollow">foundations</a></li>
            <li><a href="#styles" rel="dofollow">styles</a></li>
            <li><a href="#components" rel="dofollow">components</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}