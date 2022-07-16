<script setup lang="ts">

</script>

<template>
  <button></button>
</template>

<style lang="scss">
.button {
  display: inline-block;
  padding: .5rem 1.35rem;
  border: 0 !important;
  border-radius: 1.25rem;
  line-height: 130%;
  font-size: 1.36rem;
  font-weight: 700;
  background-color: $silver-l8;
  color: $silver;
  cursor: pointer;
  text-decoration: none !important;

  transition: .2s;

  &:hover,
  &:focus {
    background-color: $silver-l7;
    color: $silver-d1  !important;
  }

  //? Primary Button
  &.--primary {
    background-color: $primary  !important;
    color: #fff !important;

    &:hover,
    &:focus {
      background-color: darken($primary, 7%) !important;
    }
  }

  //? Secondary Button
  &.--secondary {
    background-color: $primary-l5  !important;
    color: $primary-d2  !important;

    &:hover,
    &:focus {
      background-color: $primary-l3  !important;
      color: $primary-d3  !important;
    }
  }

  //? Outlined Button
  &.--outlined {
    background-color: unset;
    padding: .3rem 1.4rem;
    border: .2rem solid $primary-l4  !important;
    color: $primary-d1;

    &:hover,
    &:focus {
      color: $primary-d2  !important;
      border-color: $primary-l1  !important;
      background-color: $primary-l5  !important;
    }
  }

  //? Text-only Button
  &.--text {
    background-color: unset;
    color: $primary-d1  !important;

    &:hover,
    &:focus {
      color: $primary-d2  !important;
      background-color: $primary-l6  !important;
    }
  }
}

.button-container {
  padding: .5rem 0;
  text-align: left;

  &.--center {
    text-align: center !important;
  }

  .button {
    margin: .25rem 0 !important;
    margin-right: .5rem !important;
  }
}
</style>