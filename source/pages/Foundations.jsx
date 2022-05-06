import { Soda } from "@dorkodu/soda";

//* layouts
import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { IntroSection } from "../layouts/IntroSection";

//* components
import { Image } from "../components/Image";
import { Picture } from "../components/Picture";
import { LinkButton } from "../components/LinkButton";
import { Blockquote } from "../components/Blockquote";
import { WhatNext } from "../components/WhatNext";

//* images
import IntroPhoto from "../../../images/unsplash/jean-louis-paulin-Rr1CIeo9cPo-unsplash.jpg";

//? pages are not meant to be reusable, so keep it as static as how you wish :)

export function Foundations() {
  return (
    <div>
      <IntroSection
        title="prism: foundations"
        tagline=""
        statement=""
        picture={<Picture source={IntroPhoto} title="" />}
        links={[
          <LinkButton type="primary" label="our philosophy" link="#philosophy" />,
          <LinkButton type="secondary" label="join us!" link="https://dorkodu.com/work" />
        ]}
      />
      <main class="main">
        <article>
          <h3>our design philosophy</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consectetur fuga aperiam nisi quod amet quas reiciendis recusandae.</p>          
        </article>
        <article>
          <h3>terms and concepts</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consectetur fuga aperiam nisi quod amet quas reiciendis recusandae.</p>          
        </article>
        <article>
          <h3>design tokens</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consectetur fuga aperiam nisi quod amet quas reiciendis recusandae.</p>          
        </article>
        <article>
          <h3>our inspirations</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consectetur fuga aperiam nisi quod amet quas reiciendis recusandae.</p>          
        </article>
      </main>
    </div>
  );
}