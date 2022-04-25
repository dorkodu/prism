import { Soda } from "@dorkodu/soda";

//* components
import { Image } from "../components/Image";

//* images
import PrismLogo from "../../../images/prism.svg";

export function Header({image, links}) {
  return (
    <header class="header">
      <div class="__content">
        <div class="__logo">
          <Image source={PrismLogo} title="prism logo" />
        </div>
        <nav class="__nav">
          <ul>
            <li><a href="#foreword" rel="dofollow">foreword</a></li>
            <li><a href="#philosophy" rel="dofollow">philosophy</a></li>
            <li><a href="#inspriation" rel="dofollow">inspiration</a></li>
            <li><a href="https://github.com/dorkodu/prism">github</a></li>
            <li><a href="https://dorkodu.com/folks" rel="dofollow">join the folks!</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}