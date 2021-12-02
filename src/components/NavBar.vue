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
            <!-- Checks that the SDK client is not currently loading before accessing its methods-->
            <div v-if="!$auth.loading">
              <a v-if="!$auth.isAuthenticated" @click="login" class="button is-success">Login</a>
              <a v-if="$auth.isAuthenticated" @click="logout" class="button is-success">Log Out</a>
            </div>
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