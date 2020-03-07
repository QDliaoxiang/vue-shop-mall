<template>
  <div id="app">
    <router-view/>
    <tablebar></tablebar>
  </div>
</template>

<script>
import Tablebar from "./views/pages/tablebar/Tablebar";
export default {
  name: 'App',
  components: {
    Tablebar,
  }
}
</script>

<style>
 #app{
   width: 100%;
 }
</style>
