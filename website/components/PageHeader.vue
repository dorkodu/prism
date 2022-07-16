<template>
  <header class="header">
    <div class="__content">
      <div class="__logo">
        <Image source="/images/prism.svg" title="prism logo" />
      </div>
      <nav class="__nav">
        <ul>
          <li><a href="/" rel="dofollow">foreword</a></li>
          <li><a href="#foundations" rel="dofollow">foundations</a></li>
          <li><a href="#styles" rel="dofollow">styles</a></li>
          <li><a href="#components" rel="dofollow">components</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0.64rem;
  text-align: center;

  .__content {
    display: inline-block;
  }

  .__nav {
    display: block;
    text-align: center;
    margin: 1rem auto;

    ul {
      overflow: hidden;
      text-align: center;
      display: block;

      li {
        display: inline-block;
        margin: .25rem .4rem;
      }

      a {
        display: inline-block;
        padding: .1rem .3rem 0;
        border-radius: 2px;
        border-bottom: .36rem solid $silver-l8;
        line-height: 1.25;
        font-size: 1.3rem;
        font-weight: 600;
        color: $color_Text;
        margin-bottom: .1rem;

        &:hover {
          color: $silver;
          border-bottom-color: $silver-l6;
          border-style: solid;
          border-width: 0 0 .36rem 0;
        }
      }
    }

  }

  .__logo {
    display: block;
    margin: 0;
    float: none;

    img {
      display: block;
      width: 18rem;
      height: auto;
      margin: 1rem auto;
    }
  }
}

@media (min-width: 400px) {
  .header .__logo img {
    width: 21rem;
  }
}

@media (min-width: 600px) {
  .header .__nav ul {
    margin-right: auto;
    margin-left: auto;
  }
}


@media (min-width: 760px) {
  .header {
    width: 90%;
    margin: 1rem auto;

    .__content {
      width: calc(100% - 1rem);
      padding: 0 .5rem;
    }

    .__logo img {
      width: 22rem;
    }
  }
}

@media (min-width: 1000px) {
  .header .__logo img {
    width: 24rem;
  }

  .header .__logo a {
    display: inline !important;
    overflow: hidden !important;
    float: right !important;
  }
}

@media (min-width: 1200px) {
  .header {
    margin-bottom: 1rem !important;

    .__nav ul {
      overflow: hidden;
      text-align: center;
      display: block;
    }

    .__logo a {
      overflow: hidden;
      float: right !important;

      img {
        float: right !important;
        width: 28rem;
      }
    }
  }
}

@media (min-width: 1400px) {

  .header {
    .__logo {
      margin-right: 0;
      padding-right: 0;

      img {
        width: 30rem;
      }
    }
  }
}
</style>