<template>
  <div class="field">
    <label for="type" class="label">Type</label>
    <div class="control">
      <input type="text" class="input" id="type" placeholder="Type of item">
    </div>
  </div>
  
  <div class="field">
    <label for="name" class="label">Name</label>
    <div class="control">
      <input type="text" class="input" id="name" placeholder="Name of item">
    </div>
  </div>

  <div class="field">
    <label for="unique-features" class="label">Unique Features</label>
    <div class="control">
      <textarea class="textarea" id="unique-features" placeholder="Enter the unique features of the item"></textarea>
    </div>
  </div>

  <div class="field">
    <label for="notes" class="label">Notes</label>
    <div class="control">
      <textarea class="textarea" id="notes" placeholder="Enter any notes about the item"></textarea>
    </div>
  </div>

  <div class="field">
    <label for="status" class="label">Status</label>
    <div class="control">
      <div class="select">
        <select>
          <option>Public</option>
          <option>Private</option>
        </select>
      </div>
    </div>
  </div>


  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
</style>
