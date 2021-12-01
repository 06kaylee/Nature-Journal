<template>
  <div class="logs container">
    <div class="columns is-multiline">
      <!-- 
        :key binds a unique key to each event
        :event binds the current event in the loop to the event object in data
        router-link makes each card a clickable link and gives LogSingle the correct id
       -->
      <div
        v-for="log in logs"
        :key="log.id"
        :log = "log" 
        class="column is-one-quarter"
      >
        <router-link :to="'/log/' + log.id">
          <LogCard :log="log" />
        </router-link>
        
      </div>
      
    </div>
  </div>
</template>


<script>
  import LogCard from '@/components/LogCard';
  export default {
    name: 'LogList',
    components: {
      LogCard,
    },
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
            image: 'https://placekitten.com/500/500'
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
            image: 'https://placekitten.com/500/500'
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
            image: 'https://placekitten.com/500/500'
          }
        ]
      }
    }
  };
</script>


<style lang="scss" scoped>
  .logs {
    margin-top: 100px;
    text-align: center;
  }
</style>