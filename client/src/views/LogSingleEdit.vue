<template>
  <form>
    <div class="field">
      <label for="type" class="label input-label">Type</label>
      <div class="control input-container">
        <input type="text" class="input" id="type" name="itemType" v-model="log.item_type" placeholder="Type of item" required>
      </div>
    </div>

    <div class="field">
      <label for="name" class="label input-label">Name</label>
      <div class="control input-container">
        <input type="text" class="input" id="name" name="itemName" v-model="log.item_name" placeholder="Name of item" required>
      </div>
    </div>

    <div class="field">
      <label for="unique-features" class="label input-label">Unique Features</label>
      <div class="control textarea-container">
        <textarea class="textarea" id="unique-features" name="uniqueFeatures" v-model="log.unique_features" placeholder="Enter the unique features of the item"></textarea>
      </div>
    </div>

    <div class="field">
      <label for="notes" class="label input-label">Notes</label>
      <div class="control textarea-container">
        <textarea class="textarea" id="notes" name="notes" v-model="log.notes" placeholder="Enter any notes about the item"></textarea>
      </div>
    </div>

    <!-- <div class="field input-container">
      <label for="item-image" class="label input-label">Upload an Image</label>
      <input type="file" name="itemImage" @change="onFileChange" class="input" id="item-image">
    </div> -->

    <div class="field">
      <label for="status-select" class="label input-label">Status</label>
      <div class="control">
        <div class="select">
          <select name="status" v-model="log.status" id="status-select">
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
      </div>
    </div>


    <div class="field is-grouped btn-container">
      <div class="control">
        <input type="submit" @click="updateLog" class="button is-success update-btn" value="Update">
        <input type="submit" @click="deleteLog" class="button is-danger" value="Delete">
      </div>
    </div>
  </form>
</template>


<script>
import LogDataService from '../services/LogDataService';

  export default {
    name: 'LogSingle',
    data() {
      return {
        log: {}
      }
    },
    methods: {
      getLog(id) {
        LogDataService.get(id)
          .then(res => {
            this.log = res.data;
            console.log(this.log);
          })
          .catch(err => {
            console.log(err);
          })
      },
      updateLog(e) {
        e.preventDefault();
        LogDataService.update(this.log._id, this.log)
          .then(res => {
            console.log(res.data);
            console.log("Updated Successfully!");
            this.$router.push({ name: 'home' }); // sends user back to home page
          })
          .catch(err => {
            console.log(`Error updating log: ${err}`);
          })
      },
      deleteLog(e) {
        e.preventDefault();
        console.log(this.log)
        LogDataService.delete(this.log._id)
          .then(res => {
            console.log(`After delete: ${res.data}`);
            this.$router.push({ name: 'home' }); // sends user back to home page
          })
          .catch(err => {
            console.log(`Error deleting log: ${err}`);
          })
      }
    },
    mounted() {
      this.getLog(this.$route.params.id);
    },
  };
</script>


<style lang="scss" scoped>
  .btn-container {
    justify-content: center;
    margin-top: 2em;
  }

  .textarea-container {
    max-width: 400px;
    margin: auto;
  }

  .input-container {
    max-width: 300px;
    margin: auto;
  }

  .input-label {
    margin-top: 2em;
  }

  .file {
    justify-content: center;
  }

  .update-btn {
    margin-right: 1em;
  }
</style>