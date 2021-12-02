<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/add" class="navbar-item">Add a Log</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-success">
              Sign up
            </a>
            <a class="button is-success">
              Login
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    methods: {
      login() {
        this.$auth.loginWithRedirect();
      },
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>