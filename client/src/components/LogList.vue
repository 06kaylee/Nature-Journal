<template>
  <div class="logs container">
    <div class="columns is-multiline">
      <!-- 
        :key binds a unique key to each event
        :log binds the current log in the loop to the log object in data
        router-link makes each card a clickable link and gives LogSingle the correct id
       -->
      <div
        v-for="log in logs"
        :key="log.id"
        :log = "log" 
        class="column is-one-quarter"
      >
        <router-link :to="'/log/' + log._id">
          <LogCard :log="log" />
        </router-link>
        
      </div>
      
    </div>
  </div>
</template>


<script>
  import LogCard from '@/components/LogCard';
  import LogDataService from '../services/LogDataService';

  export default {
    name: 'LogList',
    components: {
      LogCard,
    },
    data() {
      return {
        logs: []
      }
    },
    methods: {
      getLogs() {
        LogDataService.getAll()
          .then(res => {
            this.logs = res.data;
          })
          .catch(err => {
            console.log(err);
          })
      }
    },
    mounted() {
      this.getLogs();
    },
  };
</script>


<style lang="scss" scoped>
  .logs {
    margin-top: 2em;
    text-align: center;
  }
</style>