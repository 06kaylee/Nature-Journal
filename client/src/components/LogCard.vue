<template>
  <div class="card">

    <div class="card-image">
      <figure class="image is-square">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
        </div>
      </div>

      <div class="content">
        <p class="subtitle">{{ log.item_name }}</p>
      </div>
    </div>

    <footer class="card-footer">
      <router-link class="card-footer-item" :to="'/log/edit/' + log._id">
        <a class="card-footer-item">Edit</a>
      </router-link>
    </footer>
    

  </div>
</template>


<script>

export default {
    name: 'LogCard',
    props: {
      log: Object
    }
};
</script>


<style lang="scss" scoped>
</style>