import { Soda } from "@dorkodu/soda";

export function IntroSection({title, tagline, statement, picture, links, middle, wide}) {
  
  //? check additional styles
  let classNameSuffix =  
    (middle) ? " --middle" : "" +
    (wide) ? " --wide" : "";

  //? call to action
  let cta = (links) ? <div class="button-container __cta">{links}</div> : "";

  return (
  <div class={"intro-section" + classNameSuffix}>
    <div class="__contents">
      <h2 class="__title">{title}</h2>
      <h1 class="__tagline">{tagline}</h1>
      <p class="__statement">
        {statement}
      </p>
      {cta}
    </div>
    {picture}
  </div>
  )
}