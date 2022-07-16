<template>
  <div :class="'intro-section ' + classNameSuffix">
    <div class="__contents">
      <h2 class="__title">{{ title }}</h2>
      <h1 class="__tagline">{{ tagline }}</h1>
      <p class="__statement">
        {{ statement }}
      </p>
      <div v-if="links" class="button-container __cta"> {{ links }} </div>
    </div>
    {{ picture }}
  </div>
</template>

<script setup lang="ts">
import { Component } from 'vue';

const { title, tagline, statement, picture, links, middle, wide }
  = defineProps<{
    title: string,
    tagline: string,
    statement: string,
    picture: Component,
    links?: Component[],
    middle?: boolean,
    wide?: boolean,
  }>();

//? check additional styles
let classNameSuffix =
  (middle) ? " --middle" : "" +
    (wide) ? " --wide" : "";

</script>

<style lang="scss" scoped>
.intro-section {
  max-width: 60rem;
  margin: 0 auto 2rem;
  padding: 0 .5rem;
  text-align: left !important;

  .__title {
    margin: 0 auto;
    padding: 0;
    font-size: 1.85rem;
    font-weight: 800;
    text-align: center;
    color: $silver-l4;
  }

  .__tagline {
    margin: .5rem auto;
    padding: 0;
    font-size: 1.95rem;
    line-height: 2rem;
    font-weight: 800;
    text-align: center;
    color: $silver-d5;
  }

  .__statement {
    padding: 0;
    font-weight: 700;
    font-size: 1.25rem;
    margin: .75rem auto;
    line-height: 125%;
    text-align: center;
    color: $silver-l1;
  }

  .__cta {
    margin: .75rem 0;
    text-align: center !important;
    margin: 0 0 1rem;
    padding-top: 0;
  }

  .__contents {
    padding: 0;
    max-width: 36rem;
    margin: 0 auto;
    padding-left: .75rem !important;
    padding-right: .25rem !important;

    .button {
      margin: 0 auto;
      margin-left: 0;
      margin-right: 1rem;
    }
  }

  .picture {
    max-width: 25rem !important;
    margin: 0 auto !important;
    float: none !important;
  }

  p {
    margin-bottom: .5rem;
  }

  //? Type: Middle Note
  &.--middle {
    .__contents {
      display: block;
      width: 100% !important;
      max-width: 40rem !important;
      margin: 0 auto;
      padding: 0;
      float: none;
      text-align: left !important;
    }

    &.--wide>.__contents {
      width: 100%;
    }

    .__title,
    .__tagline,
    .__cta,
    .__statement {
      text-align: left !important;
    }

    .__statement {
      margin: 0;
    }

    .__cta>.button {
      float: none;
    }
  }
}

@media (min-width: 500px) {
  .intro-section {
    &.--middle {
      .__contents {
        text-align: center !important;
      }

      .__title,
      .__tagline,
      .__cta,
      .__statement {
        text-align: center !important;
      }
    }
  }
}

@media (min-width: 1000px) {
  .intro-section {
    .__contents {
      float: right;
      width: 55% !important;
      padding-right: 2rem;

      .__title,
      .__statement,
      .__tagline {
        text-align: left;
      }

      .button {
        float: left;
      }
    }

    .picture {
      width: 45% !important;
      float: left !important;
      margin-top: 0;
      padding-top: 0;
      padding-left: 2rem;
      max-width: 24rem;
    }
  }
}

@media (min-width: 1200px) {
  .intro-section {
    .picture {
      max-width: 26rem !important;
      width: 45% !important;
      margin-top: 0;
      padding-top: 0;
      padding-left: 2rem;
    }

    .__contents {
      float: right;
      width: 55% !important;
      padding-right: 2rem;
    }
  }
}
</style>