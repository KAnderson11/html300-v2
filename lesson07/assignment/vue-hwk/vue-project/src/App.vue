<script>
import BaseLayout from './components/BaseLayout.vue'
import Img1 from './assets/images/small-logo.png'
import Img2 from './assets/images/heron.png'
export default {
  components: {BaseLayout},
  name:'app',
  data() {
  return{
    images: [Img1,Img2],
    message:'Tahoma Bird Alliance',
    text: 'Bird walk registration is open',
    manyBirds: [
        'some filler text',
        'more filler text',
      ]
  }
 }
}


</script>

<template>
  <div>

  <BaseLayout>
    <template #header>
      <h1>Text Needed for header</h1>
    </template>
  </BaseLayout>
  </div>

        <div class="image-container">
          <div class="image" v-for = "(image,index) in images" :key="index">
            <img :src="image">
          </div>
        </div>
      
  <h1>{{ message }}</h1>
  <h4>{{ text }}</h4>
  <div id="app"> 
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/birders">Education</RouterLink>
        <RouterLink to="/birdwalk">Participate</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
      </nav>
      <RouterView />  
    

    <!-- <button type="button" name="button" v-on:click="increase">Button One Click Me</button>
    </div>
    <div>
    <p>FILLER TEXT lorem ipsum</p> 
     <div>
      <button type="button" name="button" v-on:click="show = !show">ButtonTwo Submit</button> -->
</div>
<div>
    <p v-if="text.includes('open')">Register now</p> 
    <!--The text includes the word 'open' then we know that bird walk registration is open-->
    <p v-else> Registration is closed</p>
     <!--The word 'open' is not found in the text then we know that bird walk registration is NOT open thus the registration is closed-->
    </div>

<ol>
    <li v-for="x in manyBirds">{{ x }}</li>
</ol>





  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
-->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
