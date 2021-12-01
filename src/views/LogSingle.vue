<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ log.name }}</h1>
          <h2 class="subtitle ">
            <strong>Type:</strong> {{ log.type }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ log.unique_features }}</p>
        <p class="is-size-4 description">{{ log.notes }}</p>
        <p class="is-size-5"><strong>Status:</strong> {{ log.status }}</p>
        <img :src="log.image" :alt="log.name" />
      </div>
    </section>
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
  .event-single {
    margin-top: 30px;
  }
  .hero {
    margin-bottom: 70px;
  }
  .event-images {
    margin-top: 50px;
  }
  .description {
    margin-bottom: 30px;
  }
</style>