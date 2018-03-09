<template>
  <div id="app">
    <!-- Navigation -->
    <div class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">Miningbutikken.no</router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <cart-summary></cart-summary>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="post@miningbutikken.no">Kontakt oss</a>
        </div>
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
