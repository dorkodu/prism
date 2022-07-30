<script setup>

definePageMeta({
  title: "sage",
  tagline: "the marvelous data exchange protocol for APIs",
  description: `Sage aims to simplify the communication for data interactions between different layers of software, and designed especially for APIs.`,
})

const hero = {
  title: "introducing sage",
  tagline: "the marvelous data exchange protocol for APIs",
  statement: `Sage aims to simplify the communication for data interactions between different layers of software, and designed especially for APIs.`,
  picture: {
    source: "/images/thewall.jpg",
    title: "some psychedelics make it work 😉"
  },
};

const postCard = {
  token: "july",
  value: "09",
  tag: "post",
  title: "lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae perspiciatis soluta a id quae ea ullam suscipit, sapiente temporibus molestias?",
  person: {
    name: "doruk eray",
    avatar: "/images/doruk--green.png",
    role: "ceo"
  }
};

</script>

<template>
  <main>
    <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement">
      <template #side>
        <Picture :source="hero.picture.source" :title="hero.picture.title" />
      </template>
      <template #content>
        <div class="button-container">
          <Button type="tonal" link="/about">about us</Button>
        </div>
      </template>
    </Hero>
    <article>
      <h2>What is Sage?</h2>
      <p>
        Sage is an open protocol for designing and building better APIs, simply a specification about how
        to query/response for data and a runtime capable of executing those queries with your existing business logic
        and data.
      </p>
      <Picture :source="hero.picture.source" :title="hero.picture.title" />
      <p>
        Sage provides a <b>simple</b> & <b>lightweight</b> but also <b>efficient, expressive, productive</b> and
        <b>intuitive</b>
        way for describing the data in your API, giving clients the
        power to interact with your API exactly how they need to—performing data retrieval or actions—makes
        evolving and documenting your APIs easier.
      </p>
      <Quote message="here's to the crazy ones..." owner="steve jobs" />
      <div class="button-container">
        <LinkButton action="read more" title="about us" link="/about" />
        <LinkButton action="read more" title="work @ dorkodu" link="/work" />
        <LinkButton action="read more" title="our manifesto" link="/manifesto" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestiae dicta explicabo eos distinctio
        animi veniam quidem saepe quo pariatur? Ipsa id modi at odit laborum vero, natus voluptatem facere?
      </p>
      <p>We created Sage for catalyzing the <strong>Web 3.0</strong> revolution.</p>
      <div class="button-container" style="text-align: center;">
        <Button type="fill">follow us</Button>
        <Button type="tonal">follow us</Button>
        <Button type="outline">follow us</Button>
        <Button type="text">follow us</Button>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!</p>
      <Testimonial name="steve jobs" title="founder of apple computer"
        quote="Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They’re not fond of rules, and they have no respect for the status quo. You can quote them; disagree with them; glorify or vilify them. About the only thing you can’t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world are the ones who do." />
    </article>
    <CardDeck>
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
    </CardDeck>
    <CardDeck>
      <PostCard :data="postCard" />
      <PostCard :data="postCard" />
      <PostCard :data="postCard" />
    </CardDeck>
  </main>
</template>

<style lang="scss">
</style>