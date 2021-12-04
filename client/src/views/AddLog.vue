<template>
<!-- v-on:submit.prevent="onSubmit" -->
  <form method="post">
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
        <input type="submit" @click="handleSubmit" class="button is-success" value="Submit">
      </div>
    </div>
  </form>
  
</template>

<script>
import LogDataService from '../services/LogDataService';

export default {
  name: 'AddLog',
  data() {
    return {
      log: {
        id: null,
        item_type: "",
        item_name: "",
        unique_features: "",
        notes: "",
        status: ""
      }
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const data = {
        item_type: this.log.item_type,
        item_name: this.log.item_name,
        unique_features: this.log.unique_features,
        notes: this.log.notes,
        status: this.log.status
      };
      console.log(data);

      LogDataService.create(data)
        .then((res) => {
          this.log.id = res.data._id;
          // clear fields

        })
        .catch((err) => {
          console.log(err);
        })
        this.clearFields();
    },
    onFileChange(e) {
      this.log.item_image = e.target.files[0];
    },
    clearFields() {
      this.log.item_type = "";
      this.log.item_name = "";
      this.log.unique_features = "";
      this.log.notes = "";
      this.log.status = '';
    }
  }
}
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
</style>
