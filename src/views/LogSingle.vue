<template>
  <div class="content">
    <div class="columns is-centered">
      <div class="column is-5 image-container">
        <figure class="image is-square">
          <img :src="log.image">
        </figure>
      </div>
      <div class="column is-4">
        <p class="is-size-5 log-content">
          <strong>Type: </strong>
          {{ log.type }}
        </p>
        <p class="is-size-5 log-content">
          <strong>Name: </strong>
          {{ log.name }}
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
  export default {
      name: 'LogSingle',
      data() {
        return {
          log: {},
          logs: [
            {
              id: 1,
              type: 'Bird',
              name: "Clark's Nutcracker",
              unique_features: 
                `
                  The size of a jay but the shape of a crow.
                  Short tails and rounded, crestless heads.
                  Long, straight, and sharp-tipped bill.
                `,
              notes:
                `
                  They are native to the mountains of western North America.
                  During the Lewis and Clark expedition, William Clark first observed it in 1805 along the banks of the Salmon River. 
                `,
              image: 'https://placekitten.com/500/500',
              status: 'public'
            },
            {
              id: 2,
              type: 'Bird',
              name: "Canada Jays",
              unique_features: 
                `
                  The size of a jay but the shape of a crow.
                  Short tails and rounded, crestless heads.
                  Long, straight, and sharp-tipped bill.
                `,
              notes:
                `
                  They are native to the mountains of western North America.
                  During the Lewis and Clark expedition, William Clark first observed it in 1805 along the banks of the Salmon River. 
                `,
              image: 'https://placekitten.com/500/500',
              status: 'private'
            },
            {
              id: 3,
              type: 'Bird',
              name: "Steller's Jay",
              unique_features: 
                `
                  The size of a jay but the shape of a crow.
                  Short tails and rounded, crestless heads.
                  Long, straight, and sharp-tipped bill.
                `,
              notes:
                `
                  They are native to the mountains of western North America.
                  During the Lewis and Clark expedition, William Clark first observed it in 1805 along the banks of the Salmon River. 
                `,
              image: 'https://placekitten.com/500/500',
              status: 'public'
            }
          ]
        }
      },
    created() {
      // the created lifecycle hook lets you run code right after the instance is created
      const ID = Number(this.$route.params.id);
      let log = this.logs.find((log) => log.id === ID);
      this.log = log;
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