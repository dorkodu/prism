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

export function Foreword() {
  return (
    <div>
      <IntroSection
        title="prism"
        tagline="our artwork styleguide"
        statement="we believe in this as a part of our mission, use technology to create wonderful, artistically subtle and liberating experiences for everyone."
        picture={<Picture source={IntroPhoto} title="some psychedelics make it work 😉" />}
        links={[
          <LinkButton type="primary" label="our philosophy" link="#philosophy" />,
          <LinkButton type="secondary" label="join us!" link="https://dorkodu.com/work" />
        ]}
      />
      <article>
        <h1>hi, there 👋</h1>
        <h3>Lorem ipsum dolor sit amet consectetur?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corporis fuga reiciendis ut maxime expedita dignissimos necessitatibus quibusdam eaque! Dolorum deserunt excepturi numquam. Sequi, atque?</p>
        
        <h4>Blockquote</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <Blockquote message="Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary." owner="steve jobs"/>
        
        <div class="button-container">
          <WhatNext title="steve jobs" action="read next" link="https://apple.com/remembering-steve"/>
          <WhatNext title="apple computer, inc." action="read next" link="https://apple.com"/>
        </div>
      </article>
      <IntroSection
        title="simple components"
        tagline=""
        statement="each sample of our most basic components is here."
        middle
        />
      <article>
        <h3>common buttons</h3>
        <p>
          Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.
          There are five types of common buttons: <b>standard</b>, <b>primary</b>, <b>secondary</b>, <b>outlined</b> and <b>text</b>.
        </p>
        <div class="button-container">
          <LinkButton label="standard" link="#" />
          <LinkButton type="primary" label="primary" link="#" />
          <LinkButton type="secondary" label="secondary" link="#" />
          <LinkButton type="outlined" label="outlined" link="#" />
          <LinkButton type="text" label="text" link="#" />
        </div>
      </article>
    </div>
  );
}