import { Soda } from "@dorkodu/soda";

import prismLogo from "../../../images/prism.svg";

export function Header() {
  return (
  <header class="header">
      <div class="__content">
        <div class="__logo">
          <img src={prismLogo} alt="prism brand" />
        </div>
        <nav class="__nav">
          <ul>
            <li><a href="#foreword" rel="dofollow">foreword</a></li>
            <li><a href="#philosophy" rel="dofollow">philosophy</a></li>
            <li><a href="#inspriation" rel="dofollow">inspiration</a></li>
            <li><a href="https://github.com/dorkodu/prism" rel="dofollow">github</a></li>
            <li><a href="https://dorkodu.com/folks" rel="dofollow">join the folks!</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}