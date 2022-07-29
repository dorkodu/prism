<template>
  <div>
    <header class="header">
      <div class="__container">
        <a class="__logo" href="/">
          <img src="/images/prism.svg" title="prism logo" />
        </a>
        <nav class="__nav">
          <NuxtLink to="/" rel="dofollow">foreword</NuxtLink>
          <NuxtLink to="/foundations" rel="dofollow">foundations</NuxtLink>
          <NuxtLink to="/style" rel="dofollow">style</NuxtLink>
          <NuxtLink to="/components" rel="dofollow">components</NuxtLink>
        </nav>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.header {
  padding: 0.64rem;

  .__container {
    display: flex;
    margin: 0 auto;
    padding: 1.25rem;
    max-width: $system-layout-breakpoint;
    flex-direction: column;
    gap: .75rem;
    align-items: center;
    justify-content: center;
  }

  .__logo {
    img {
      display: block;
      width: 20rem;
      height: auto;
      margin: 1rem auto;
    }
  }

  .__nav {
    display: flex;
    font-size: 1rem;
    line-height: 1.5rem;
    flex-wrap: wrap;
    gap: .75rem;
    justify-content: center;
    align-items: center;

    a {
      padding: .1rem .3rem 0;
      border-radius: 2px;
      border-bottom: .36rem solid $reference-color-gray-95;
      line-height: 1.25;
      font-size: 1.3rem;
      font-weight: 600;
      color: $reference-color-gray-10;
      text-decoration: none;

      &:hover {
        color: $reference-color-gray-50;
        border-bottom-color: $reference-color-gray-90;
        border-style: solid;
        border-width: 0 0 .36rem 0;
      }
    }
  }
}

@media (min-width: 768px) {
  .header {
    margin: 1rem auto;

    .__logo img {
      width: 25rem;
    }
  }
}

@media (min-width: $reference-viewpoint-desktop-S) {
  .header {
    .__container {
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }

    .__logo img {
      width: 28rem;
    }
  }
}
</style>