<template>
  <div class="CardDeck">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@import "scss/styles.scss";

.CardDeck {
  display: grid;
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-gap: 1rem 1rem;
  grid-auto-rows: minmax(6rem, auto);
  grid-template-columns: 1fr;
  max-width: 76rem;
  margin: 1rem auto;

  &>.Card {
    max-width: 28rem;
    margin: 0 auto;
  }
}

@media (min-width: $system-viewpoint-tablet) {
  .CardDeck {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

@media (min-width: 1200px) {
  .CardDeck {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
