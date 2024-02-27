<template>
  <div>
   <nav class="navbar has-shadow m-4" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
      <img src="../src/assets/project-img.jpg" alt="site-logo" style="max-height: 70px;">
      </a>
      <a role="button" class="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
       <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
     <router-link class="navbar-item" to="/">Home</router-link>
     <router-link class="navbar-item" :to="{ name: 'shelter' }">Shelters</router-link>
     <router-link class="navbar-item" :to="{name:'registered-pets'}">Registered Pets</router-link>
    </div>
    </div>
   </nav>
  <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  mounted() {
    // for mobile devices, toggle 'is-active' class on navbar items
    const burgerIcon = document.querySelector('#burger')
    const navbarMenu = document.querySelector('#navbarBasicExample')
    burgerIcon.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active')
    })
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-item {
  font-weight: 500;
  color: #2c3e50;
  text-transform: uppercase;
}

</style>
