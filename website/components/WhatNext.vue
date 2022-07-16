<script lang="ts" setup>
const { action, title, link } = defineProps<{
  action: string;
  title: string;
  link: string;
}>();
</script>

<template>
  <a class="what-next" :href="link">
    <span class="__action">{{ action }}</span>
    <p class="__title">{{ title }}</p>
  </a>
</template>

<style lang="scss" scoped>
.what-next {
  display: inline-block;
  margin: .5rem 0;
  margin-right: .5rem;
  padding: .7rem 1.5rem .5rem 1rem;
  border-radius: .7rem;
  border: .2rem solid $silver-l7;
  min-width: 12.5rem;
  text-align: left;
  color: $silver-l4  !important;

  &:hover,
  &:focus {
    border-color: $silver-l5  !important;
    text-decoration: underline;
  }

  .__title {
    display: block;
    font-size: 1.4rem;
    line-height: 1.5rem;
    margin: .25rem 0;
    font-weight: 700;
    color: $silver-d5  !important;
  }

  .__action {
    display: block;
    color: $silver-l1  !important;
    font-size: 1.1rem;
    font-weight: 700;
  }
}
</style>