<template>
  <div class="card-deck">
    <slot></slot>
  </div>
</template>
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
}

@media (min-width: $system-viewpoint-desktop-S) {
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
