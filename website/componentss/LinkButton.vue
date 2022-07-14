<script lang="ts" setup>
const { type, link, label } = defineProps(['type', 'link', 'label'])

let typeSuffix = type
  ? " --" + type
  : "";

let className = "button" + typeSuffix;

</script>

<template>
  <a :class="'button' + (type ? ' --' + type : "" )" :href="link">{{ label }}</a>
</template>

<style lang="scss" scoped>
</style>