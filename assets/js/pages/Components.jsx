import { Soda } from "@dorkodu/soda";

//* layouts
import { IntroSection }    from "../layouts/IntroSection";
import { CardDeck }        from "../layouts/CardDeck";
import { Banner }          from "../layouts/Banner";
import { DescriptiveList } from "../layouts/DescriptiveList";

//* components
import { Image }           from "../components/Image";
import { Picture }         from "../components/Picture";
import { LinkButton }      from "../components/LinkButton";
import { Blockquote }      from "../components/Blockquote";
import { WhatNext }        from "../components/WhatNext";
import { Card }            from "../components/Card";
import { DescriptiveItem } from "../components/DescriptiveItem";

//* images
import IntroPhoto       from "../../../images/unsplash/jean-louis-paulin-Rr1CIeo9cPo-unsplash.jpg";
import IceCreamDoodle from "../../../images/opendoodles/IceCreamDoodle.svg";
import LovingDoodle from "../../../images/opendoodles/LovingDoodle.svg";

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

          <h4>whatnext buttons</h4>
          <div class="button-container">
            <WhatNext title="steve jobs" action="read next" link="https://apple.com/remembering-steve"/>
            <WhatNext title="apple computer, inc." action="read next" link="https://apple.com"/>
          </div>
        </article>

        <article>
          <h3>blockquote</h3>
          <Blockquote message="Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary." owner="steve jobs"/>
        </article>

        <article class="--wide">
          <h3>cards</h3>
          <CardDeck>
            <Card tag="tag" title="title here." message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, explicabo quam rerum sint commodi harum ipsam!"/>
            <Card tag="tag" title="title here." message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, explicabo quam rerum sint commodi harum ipsam!"/>
            <Card tag="tag" title="title here." message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, explicabo quam rerum sint commodi harum ipsam!"/>
            <Card tag="tag" title="title here." message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, explicabo quam rerum sint commodi harum ipsam!"/>
            <Card tag="tag" title="title here." message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, explicabo quam rerum sint commodi harum ipsam!"/>
            <Card
              badge={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 9l4 -4l4 4m-4 -4v14"></path><path d="M21 15l-4 4l-4 -4m4 4v-14"></path></svg>}
              title="title here."
              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, explicabo quam rerum sint commodi harum ipsam!"
            />
          </CardDeck>
        </article>
        
        <div class="banner --green">
          <p>this is a banner.</p>
        </div>

        <article class="--wide">
          <h3>showcase</h3>
          <div class="flex showcase">
            <div class="column --main">
              <h4>main column</h4>
              <p>Lorem ipsum dolor sit, amet consectetur elit. Velit veritatis id aspernatur omnis vel vitae reprehenderit ea eveniet et!</p>
            </div>
            <div class="column --aside">
              <h4>aside column</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </article>

        <article class="--wide">
          <div class="flex showcase">
            <div class="column --main">
              <DescriptiveList 
                title="Lorem ipsum dolor sit amet." 
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta molestias accusamus sed doloremque nobis temporibus hic illum, minima corrupti.">
                <DescriptiveItem 
                  title="define who you are." 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas ab, fugiat ut adipisci dolore sint!" 
                  badge={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path><line x1="12" y1="19" x2="12" y2="19.01"></line></svg>}
                />
                <DescriptiveItem 
                  title="define who you are." 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas ab, fugiat ut adipisci dolore sint!" 
                  badge={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path><line x1="12" y1="19" x2="12" y2="19.01"></line></svg>}
                />
                <DescriptiveItem 
                  title="define who you are." 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas ab, fugiat ut adipisci dolore sint!" 
                  badge={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path><line x1="12" y1="19" x2="12" y2="19.01"></line></svg>}
                />
              </DescriptiveList>
            </div>
            <div class="column --aside">
              <Picture source={LovingDoodle} title="all you need is love."/>
            </div>
          </div>
        </article>
        
        <article>
          <h3>picture</h3>
          <Picture source={IceCreamDoodle} title="you want ice cream?"/>
        </article>

      </main>
    </div>
  );
}