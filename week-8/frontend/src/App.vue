<template>
  <div>
   <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
      <img src="../src/assets/project-img.jpg" alt="site-logo" style="max-height: 70px;">
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
       <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
     <router-link class="navbar-item" to="/">Home</router-link>
     <router-link class="navbar-item" :to="{ name: 'shelter' }">Shelters</router-link>
    </div>
    </div>
   </nav>
  <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
