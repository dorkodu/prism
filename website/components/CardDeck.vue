<template>
  <div :class="'card-deck' + classSuffix">
    {{ children }}
  </div>
</template>

<script setup lang="ts">
let { showcase, children } = defineProps<{
  showcase?: boolean;
  children?: any;
}>();

let classSuffix = showcase
  ? " --showcase"
  : "";
</script>

<style lang="scss">
@import "scss/styles.scss";

.card-deck {
  display: grid;
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-gap: 1rem 1rem;
  grid-auto-rows: minmax(6rem, auto);
  grid-template-columns: 1fr;
  max-width: 70rem;
  margin: 1rem auto;

  &>.card {
    max-width: 22rem;
    margin: 0 auto;
  }

  &.--showcase>.card {
    position: relative;
    padding-bottom: 4rem !important;

    >p {
      position: relative;
    }

    >.__links {
      display: block;
      position: absolute;
      bottom: 0;
      left: 1rem;
      right: 1rem;
      height: 3rem;

      margin-top: .75rem;
      padding-top: .35rem;
      border-top: .2rem solid $neutral-l8;
      text-align: right;

      >a {
        display: inline-block;
        margin-left: .5rem;

        >svg {
          width: 2rem;
          height: 2rem;
          stroke: $neutral-l3;
        }

        &:hover>svg {
          stroke: $neutral-d1;
        }
      }
    }
  }
}

@media (min-width: 1000px) {
  .card-deck {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

@media (min-width: 1200px) {
  .card-deck {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>