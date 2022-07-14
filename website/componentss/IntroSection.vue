<script setup lang="ts">
const { title, tagline, statement, picture, links, middle, wide } = defineProps<{
  title: string,
  tagline: string,
  statement: string,
  picture: Picture,
  links: LinkButton[],
  middle?: string,
  wide?: string,
}>();

//? check additional styles
let classNameSuffix =
  (middle) ? " --middle" : "" +
    (wide) ? " --wide" : "";

//? call to action
let cta = links ? <div class="button-container __cta" > {{ links }} </div> : "";
</script>

<template>
  <div :class="'intro-section ' + classNameSuffix">
    <div class="__contents">
      <h2 class="__title">{{ title }}</h2>
      <h1 class="__tagline">{{ tagline }}</h1>
      <p class="__statement">
        {{ statement }}
      </p>
      <div v-if="links" class="button-container __cta"> {{ links }} </div> : "";
    </div>
    {picture ?? ""}
  </div>
</template>

<style scoped>
</style>