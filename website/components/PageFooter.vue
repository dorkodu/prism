<template>
  <footer class="footer">
    <div class="__wrapper">

      <div class="__brand">
        <h3 class="__title">the <span class="--keyword">dorkodu</span> company</h3>
      </div>

      <div class="__nav">

        <div class="__column">
          <h4>prism</h4>
          <ul>
            <li><a href="/" rel="dofollow">foreword</a></li>
            <li><a href="#foundations" rel="dofollow">foundations</a></li>
            <li><a href="#styles" rel="dofollow">styles</a></li>
            <li><a href="#components" rel="dofollow">components</a></li>
            <li><a href="https://github.com/dorkodu/prism">github</a></li>
          </ul>
        </div>

        <div class="__column">
          <h4>company</h4>
          <ul>
            <li><a href="/">frontpage</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/manifesto">manifesto</a></li>
            <li><a href="https://dorkodu.com/work">join the folks!</a></li>
            <li><a href="/investors">be an investor!</a></li>
          </ul>
        </div>

      </div>

      <div class="__copyright">
        <p class="__statement">&copy; 2022 dorkodu</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $silver-l7;
  border-top: .67rem solid $silver-l8;

  .__wrapper {
    padding: 1rem;
  }

  .__brand {
    margin: 0 0.5rem;
    padding: 0.5rem;

    .__title {
      float: left;
      color: $silver-l3;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      font-size: 2rem;
      line-height: 1;

      .--keyword {
        color: $silver-d1;
        font: inherit;
      }
    }
  }

  .__nav {
    padding: .5rem;
    max-width: 600px;

    .__column {
      float: left;
      padding: .625rem;
      width: 80%;

      h4 {
        display: inline-block;
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: .5rem;
        border-bottom: .4rem solid $silver-l6;
      }

      ul li {
        line-height: 150%;
        padding: .2rem 0;
      }

      ul li a {
        font-size: 1.3rem;
        padding: .2rem .4rem;
        border-radius: .25rem;

        &:hover {
          background-color: $silver-l6;
        }
      }
    }
  }

  .__copyright {
    padding: 1rem 0.5rem;

    p {
      display: inline-block;
      line-height: 120%;
      margin: .3rem 0;
      font-size: 1.2rem;
      color: $silver;
      font-weight: 600;

      &.--statement {
        float: left;
      }
    }
  }

}

@media (min-width: 500px) {
  .footer .__column {
    width: 44% !important;
  }
}

@media (min-width: 600px) {
  .footer .__wrapper {
    width: 80%;
    margin: 0 auto;
    max-width: 45rem !important;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>