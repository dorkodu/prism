<script setup lang="ts">
// NOTE: badge and tag should not be together
const { badge, tag, title, message, content }
  = defineProps<{
    badge?: any;
    tag?: any;
    title?: string;
    message?: string;
    content?: any;
  }>();
</script>

<template>
  <div class="card">
    <i v-if="badge" class="badge">{{ badge }}</i>
    <p v-if="tag && !badge" class="__tag">{{ tag }}</p>
    <h4 v-if="title">{{ title }}</h4>
    <p v-if="message">{{ message }}</p>
    {{ content }}
  </div>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.card {
  background-color: #fff;
  border: .25rem solid $reference-color-gray-95;
  padding: .75rem 1rem 1rem;
  border-radius: 1rem;

  &>p {
    font-size: 1.15rem !important;
    line-height: 1.4rem !important;
    padding: 0 !important;
    margin-bottom: 0;

    &.__tag {
      display: inline-block;
      padding: .25rem .5rem .35rem !important;
      border-radius: .5rem;
      font-weight: 800;
      font-size: 1.25rem !important;
      background-color: $reference-color-gray-90;
      color: $reference-color-gray-60;
      clear: right;
      margin-bottom: .25rem;
    }
  }

  >h1,
  >h2,
  >h3,
  >h4,
  >h5 {
    font-size: 1.5rem !important;
    line-height: 1.75rem !important;
    font-weight: 700;
    padding: 0 !important;
    margin: .5rem 0 !important;
    text-align: left !important;
  }
}
</style>