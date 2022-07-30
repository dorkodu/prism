<template>
  <dl class="descriptive-list">
    <h2 v-if="title" class="__title">{{ title }}</h2>
    <p v-if="message" class="__message">{{ message }}</p>
    {{ children }}
  </dl>
</template>

<script setup lang="ts">
const { title, message, children } = defineProps<{
  title: string;
  message: string;
  children: any;
}>();
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.descriptive-list {
  padding: 1rem;
  margin-top: 0;

  .__title {
    text-align: left !important;
    padding: 0 !important;
  }

  .__message {
    padding: 0 !important;
    margin: .5rem 0 2rem;
    font-size: 1.1rem !important;
  }

  .descriptive-item {
    margin-bottom: 2rem !important;
  }
}

@media (max-width: 500px) {
  .descriptive-list {
    .descriptive-item {
      .badge {
        display: inline-block !important;
        font-size: 1.5rem;
        float: none;
        margin-right: 0;
      }

      >div {
        width: 100% !important;
        float: none !important;
        margin-top: .5rem !important;
      }
    }
  }
}
</style>