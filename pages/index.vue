<template>
  <div class = "wrapper">
    <div class="center-content">
      <h1>About</h1>
      <p>Hello, here is an example of simple to-do list app made to practice Vue framework + Nuxt. </p>
      <p>What is inside? </p>
      <div>
      <a href="https://github.com/BananaAndBread/nuxt-to-do-list">See GitHub page</a>
      </div>
      <div class="PS">
        <div class="typewriter">
      <p> P.S Not a UI/UX designer, but that is on my TODO LIST</p>
        </div>
        <p> P.P.S It is kinda responsive</p>
        <p> P.P.P.S You are welcome to write issues to make the code better</p>
        <p> P.P.P.P.S No DDoS please. </p>
      </div>
    </div>
  </div>
</template>s

<script>
  export default {
    name: 'About'
  }
</script>
<style scoped>
  .wrapper {
    margin-top: 3em;
    margin-left: 3em;
  }
  h1 {
    font-family: Happy Monkey, fantasy;
    font-weight: normal;
  }
  p {
    margin-top: 1em;
    font-family: Abel,serif;
  }

  div div{
    margin-top: 1em;
  }

  .PS{
    margin-top: 6em;
  }

</style>
