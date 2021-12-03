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
  import axios from 'axios';

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
    async created() {
      try {
        const res = await axios.get('http://localhost:3000/logs');
        const data = res.data;
        console.log(data);
        this.logs = data;
      }
      catch(err) {
        console.log(`Error getting /logs: ${err}`);
      }
    }
  };
</script>


<style lang="scss" scoped>
  .logs {
    margin-top: 2em;
    text-align: center;
  }
</style>