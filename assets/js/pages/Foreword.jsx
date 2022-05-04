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
        <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Culpa corporis fuga reiciendis ut maxime expedita dignissimos necessitatibus quibusdam eaque! 
          Dolorum deserunt excepturi numquam. 
          Sequi, atque?
        </p>
      </article>
    </div>  
  );
}