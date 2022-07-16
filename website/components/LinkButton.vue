<script lang="ts" setup>
const { type, link, label }
  = defineProps<{
    type?: string;
    link?: string;
    label: string;
  }>()

let typeSuffix = type
  ? " --" + type
  : "";

let className = "button" + typeSuffix;
</script>

<template>
  <a :class="className" :href="link">{{ label }}</a>
</template>

<style lang="scss" scoped>
</style>