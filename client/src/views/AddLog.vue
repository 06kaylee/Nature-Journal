<template>
  <form action="" method="post">
    <div class="field">
      <label for="type" class="label input-label">Type</label>
      <div class="control input-container">
        <input type="text" class="input" id="type" placeholder="Type of item">
      </div>
    </div>
  
    <div class="field">
      <label for="name" class="label input-label">Name</label>
      <div class="control input-container">
        <input type="text" class="input" id="name" placeholder="Name of item">
      </div>
    </div>

    <div class="field">
      <label for="unique-features" class="label input-label">Unique Features</label>
      <div class="control textarea-container">
        <textarea class="textarea" id="unique-features" placeholder="Enter the unique features of the item"></textarea>
      </div>
    </div>

    <div class="field">
      <label for="notes" class="label input-label">Notes</label>
      <div class="control textarea-container">
        <textarea class="textarea" id="notes" placeholder="Enter any notes about the item"></textarea>
      </div>
    </div>

    <div class="field input-container">
      <label for="image-item" class="label input-label">Upload an Image</label>
      <input type="file" class="input" id="image-item">
    </div>

    <div class="field">
      <label for="status-select" class="label input-label">Status</label>
      <div class="control">
        <div class="select">
          <select name="status" id="status-select">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
    </div>


    <div class="field is-grouped btn-container">
      <div class="control">
        <input type="submit" class="button is-success" value="Submit">
      </div>
      <div class="control">
        <button @click="$router.back()" class="button">Cancel</button>
      </div>
    </div>
  </form>
  
</template>

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
