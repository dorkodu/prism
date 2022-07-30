<template>
  <div>
    <div class="Hero">
      <div class="__main">
        <h2 class="__title">{{ title }}</h2>
        <h1 class="__tagline">{{ tagline }}</h1>
        <p class="__statement">
          {{ statement }}
        </p>
        <div>
          <slot name="content"></slot>
        </div>
      </div>
      <div class="__side">
        <slot name="side"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { title, tagline, statement }
  = defineProps<{
    title: string,
    tagline: string,
    statement: string,
  }>();

</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.Hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: $system-layout-breakpoint;
  margin: 0 auto 2rem;
  padding: 0 .5rem;

  .__main {
    max-width: 36rem;
    margin: 0 auto;
    padding: 0;
    padding-left: .75rem !important;
    padding-right: .25rem !important;
  }

  .__side {
    width: 95%;
  }

  .__title {
    margin: 0 auto;
    padding: 0;
    font-size: 1.85rem;
    font-weight: 800;
    text-align: center;
    color: $reference-color-gray-80;
  }

  .__tagline {
    margin: .5rem auto;
    padding: 0;
    font-size: 1.95rem;
    line-height: 2rem;
    font-weight: 800;
    text-align: center;
    color: $reference-color-gray-10;
  }

  .__statement {
    padding: 0;
    font-weight: 600;
    font-size: 1.25rem;
    margin: .75rem auto;
    line-height: 125%;
    text-align: center;
    color: $reference-color-gray-60;
  }

  p {
    margin-bottom: .5rem;
  }
}

@media (min-width: $system-viewpoint-mobile-L) {
  .Hero.--middle {
    .__main {
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

@media (min-width: $system-viewpoint-tablet) {}

@media (min-width: $system-viewpoint-desktop-S) {
  .Hero {
    flex-direction: row;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    gap: 2rem;

    .__main {
      width: 55%;
      margin-bottom: 0;
      text-align: left;
      align-items: flex-start;
      padding-right: 4rem;
      flex-grow: 1;

      .__title,
      .__statement,
      .__tagline {
        text-align: left;
      }
    }

    .__side {
      width: 45%;
    }
  }
}

@media (min-width: 1200px) {
  .Hero {}
}
</style>