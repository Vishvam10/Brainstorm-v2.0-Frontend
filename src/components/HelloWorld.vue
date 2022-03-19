<template>
  <div class="hello">
    <router-link to="/about" class="btn btn-primary">About</router-link>
    <router-link to="/home" class="btn btn-danger">Home</router-link>
     <ion-icon name="create-outline" aria-label="Edit"></ion-icon>
      <ion-icon name="create-outline" aria-label="Edit"></ion-icon>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
