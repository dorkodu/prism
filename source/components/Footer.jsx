import { Soda } from "@dorkodu/soda";

export function Footer() {
  return (
    <footer class="footer">
    <div class="__wrapper">
      
      <div class="__brand">
        <h3 class="__title">the <span class="--keyword">dorkodu</span> company</h3>
      </div>

      <div class="__nav">
      
        <div class="__column">
          <h4>prism</h4>
          <ul>
          <li><a href="/" rel="dofollow">foreword</a></li>
            <li><a href="#foundations" rel="dofollow">foundations</a></li>
            <li><a href="#styles" rel="dofollow">styles</a></li>
            <li><a href="#components" rel="dofollow">components</a></li>
            <li><a href="https://github.com/dorkodu/prism">github</a></li>
          </ul>
        </div>

        <div class="__column">
          <h4>company</h4>
          <ul>
            <li><a href="/">frontpage</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/manifesto">manifesto</a></li>
            <li><a href="https://dorkodu.com/work">join the folks!</a></li>
            <li><a href="/investors">be an investor!</a></li>
          </ul>
        </div>

      </div>

      <div class="__copyright">
        <p class="__statement">&copy; 2022 dorkodu</p>
      </div>
    </div>
  </footer>
  )
}