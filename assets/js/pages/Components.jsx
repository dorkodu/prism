import { Soda } from "@dorkodu/soda";

//* layouts
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

export function Components() {
  return (
    <div>
      <IntroSection
        title="prism components"
        tagline="common components"
        statement="we believe in this as a part of our mission, use technology to create wonderful, artistically subtle and liberating experiences for everyone."
        picture={<Picture source={IntroPhoto} title="" />}
        links={[
          <LinkButton type="primary" label="our philosophy" link="#philosophy" />,
          <LinkButton type="secondary" label="join us!" link="https://dorkodu.com/work" />
        ]}
        />
      <main class="main">
        <article>
          <h3>buttons</h3>
          <p>
            Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.
            There are five types of common buttons: <b>standard</b>, <b>primary</b>, <b>secondary</b>, <b>outlined</b> and <b>text</b>.
          </p>

          <h4>link buttons</h4>
          <div class="button-container">
            <LinkButton label="standard" link="#" />
            <LinkButton type="primary" label="primary" link="#" />
            <LinkButton type="secondary" label="secondary" link="#" />
            <LinkButton type="outlined" label="outlined" link="#" />
            <LinkButton type="text" label="text" link="#" />
          </div>
          
        </article>
      </main>
    </div>
  );
}