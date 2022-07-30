<template>
  <div class="descriptive-item">
    <i v-if="badge" class="badge">{{ badge }}</i>
    <div>
      <dt>{{ title }}</dt>
      <dd>{{ description }}</dd>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Component } from 'vue';

const { title, description, badge } = defineProps<{
  title: string;
  description: string;
  badge: Component;
}>();
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.descriptive-item {
  >div {
    width: calc(100% - 6rem);
  }

  .badge {
    display: block !important;
    float: left;
    margin-right: 1rem;
  }

  dt {
    font-weight: 700;
    font-size: 1.25rem !important;
    padding-top: .25rem;
    color: $system-color-text;

    .--bulletpoint {
      color: $neutral-l3;
    }
  }

  dd {
    color: $silver;
    font-weight: 600;
    padding-top: .25rem;
    line-height: 140%;
    font-size: 1.1rem;
  }
}
</style>