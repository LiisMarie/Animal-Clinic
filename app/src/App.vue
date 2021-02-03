<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-default sticky-top" id="nav">
      <a class="navbar-brand" href="">
        <img src="./assets/img/logo.png" alt="Logo" class="navbar-brand__logo">
        Tondi Loomakliinik
      </a>
      <!-- button on mobile devices -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"><img src="./assets/img/menu-button.svg" alt="Logo" height="25" width="25"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/teenusedjahinnad" class="nav-link">Teenused ja hinnad</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/broneeriaeg" class="nav-link">Broneeri aeg</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/galerii" class="nav-link">Galerii</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/kontakt" class="nav-link">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view/>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import store from './store/store'

export default {
  store,
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    color: #008080;

    &.router-link-exact-active {
      color: #008080;
      font-weight: bold;
    }
  }
}
</style>
