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

export function Styles() {
  return (
    <div>
      <Header />
      <IntroSection
        title="prism: styles"
        tagline=""
        statement=""
        picture={<Picture source={IntroPhoto} title="" />}
        links={actionLinks}
        />
      <main class="main">
      </main>

      <Footer/>
    </div>
  );
}