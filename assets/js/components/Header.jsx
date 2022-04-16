import { Soda } from "@dorkodu/soda";

export function Header({image, links}) {
  return (
  <header class="header">
      <div class="__content">
        <div class="__logo">
          <img src={image.src} alt={img.alt} />
        </div>
        <nav class="__nav">
          <ul>
            {links.map((link) => <li><a href={link.url}>{link.text}</a></li>)}
          </ul>
        </nav>
      </div>
    </header>
  )
}