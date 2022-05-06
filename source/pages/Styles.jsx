import { Soda } from "@dorkodu/soda";

//* layouts
import { Header } from "../../assets/js/layouts/Header";
import { Footer } from "../../assets/js/layouts/Footer";
import { IntroSection } from "../../assets/js/layouts/IntroSection";

//* components
import { Image } from "../components/Image";
import { Picture } from "../components/Picture";
import { LinkButton } from "../components/LinkButton";
import { Blockquote } from "../components/Blockquote";
import { WhatNext } from "../components/WhatNext";

//* images
import IntroPhoto from "../../../images/unsplash/jean-louis-paulin-Rr1CIeo9cPo-unsplash.jpg";

export function Styles() {
  return (
    <div>
      <IntroSection
        title="prism: styles"
        tagline=""
        statement=""
        picture={<Picture source={IntroPhoto} title="" />}
        links={[
          <LinkButton type="primary" label="our philosophy" link="#philosophy" />,
          <LinkButton type="secondary" label="join us!" link="https://dorkodu.com/work" />
        ]}
      />
      <article>
        <p>styles will come here.</p>
      </article>
    </div>
  );
}