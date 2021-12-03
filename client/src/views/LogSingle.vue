<template>
  <div class="content">
    <div class="columns is-centered">
      <div class="column is-5 image-container">
        {{ log }}
        <figure class="image is-square">
          <img :src="log.item_image">
        </figure>
      </div>
      <div class="column is-4">
        <p class="is-size-5 log-content">
          <strong>Type: </strong>
          {{ log.item_type }}
        </p>
        <p class="is-size-5 log-content">
          <strong>Name: </strong>
          {{ log.item_name }}
        </p>
        <p class="is-size-5 log-content">
          <strong>Unique Features: </strong>
          {{ log.unique_features }}
        </p>
        <p class="is-size-5 log-content">
          <strong>Notes: </strong>
          {{ log.notes }}
        </p>
        <p class="is-size-5 log-content">
          <strong>Status: </strong>
          {{ log.status }}
        </p>
      </div>
    </div>

  </div>
</template>


<script>
import axios from 'axios';

  export default {
    name: 'LogSingle',
    data() {
      return {
        logs: []
      }
    },
    async created() {
      const res = await axios.get('http://localhost:3000/logs');
      const data = res.data;
      this.logs = data;
    }
  };
</script>


<style lang="scss" scoped>
  .image-container {
    max-width: 500px;
  }

  .content {
    margin-top: 2em;
  }

  .log-content {
    text-align: left;
  }
</style>