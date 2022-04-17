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
          <h4>company</h4>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/manifesto">manifesto</a></li>
            <li><a href="/jobs">jobs</a></li>
            <li><a href="/investors">be an investor!</a></li>
          </ul>
        </div>
      
        <div class="__column">
          <h4>resources</h4>
          <ul>
            <li><a href="/products">products</a></li>
            <li><a href="https://github.com/dorkodu">open source</a></li>
            <li><a href="/legal">legal</a></li>
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