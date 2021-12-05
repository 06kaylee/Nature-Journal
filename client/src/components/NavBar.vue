<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <svg height="80" width="80">
          <defs>
            <filter id="f1" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
              <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
            </filter>
          </defs>
          <rect width="50" height="50" stroke="#5f946d" stroke-width="3"
          fill="#6cad7d" filter="url(#f1)" />
          <text x="12" y="32" font-weight="bold" font-family="monospace" font-size="1.5em" fill="#e8b66f">LB</text>
        </svg>
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