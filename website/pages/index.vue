<script setup>
import IntroSection1 from '~~/components/IntroSection.vue';

const intro = {
  title: "prism",
  tagline: "our artwork styleguide",
  statement: "we believe in this as a part of our mission, use technology to create wonderful, artistically subtle and liberating experiences for everyone.",
  picture: {
    source: "/images/thewall.jpg",
    title: "some psychedelics make it work 😉"
  },
  links: [

  ]
};

</script>

<template>
  <div>
    <IntroSection :title="intro.title" :tagline="intro.tagline" :statement="intro.statement" :picture="intro.picture"
      :links="intro.links" />
    <article>
      <h1>hi, there 👋</h1>
      <h3>Lorem ipsum dolor sit amet consectetur?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        corporis fuga reiciendis ut maxime expedita dignissimos necessitatibus
        quibusdam eaque! Dolorum deserunt excepturi numquam. Sequi, atque?
      </p>
    </article>
  </div>
  <p>hello</p>
</template>

<style lang="scss">
</style>