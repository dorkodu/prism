<script setup lang="ts">

const { message, owner } = defineProps<{
  message: string;
  owner?: string;
}>();

</script>

<template>
  <div>
    <blockquote class="quote">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 15h15" />
        <path d="M21 19h-15" />
        <path d="M15 11h6" />
        <path d="M21 7h-6" />
        <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
        <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
      </svg>
      <p>{{ message }}</p>
      <p class="owner">{{ "— " + owner }}</p>
    </blockquote>
  </div>
</template>

<style lang="scss" scoped>
.quote {
  display: block;
  border-left: .5rem solid $silver-l7;
  border-radius: 2px;
  margin: 2rem auto;
  max-width: 32rem;
  background-color: unset;
  padding: 0;
  overflow: hidden !important;

  >h1,
  >h2,
  >h3,
  >h4,
  >h5 {
    text-align: left !important;
    margin: .5rem !important;
    color: $silver-d1  !important;
  }

  >p {
    display: block;
    padding: .5rem 1rem !important;
    margin-bottom: 0;
    font-size: 1.15rem !important;
    line-height: 1.5rem !important;
    font-weight: 600;
    background: none;
    color: $silver-l1;

    a {
      color: $silver-d2;
      text-decoration: underline;

      &:hover {
        color: $silver-d6;
        text-decoration: underline;
      }
    }
  }

  >svg {
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0 .5rem;
    stroke: $silver-l4;
  }

  .owner {
    font-weight: 800;
    font-size: 1.15rem !important;
    color: $silver-d1;
  }
}
</style>