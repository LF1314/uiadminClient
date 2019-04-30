<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
$(document).ready(()=>{
  let clientWidth = window.innerWidth,
    clientHeight = window.innerHeight
  $('#app').css({
    width:clientWidth,
    height:clientHeight
  })
})
window.onresize=()=>{
  clientWidth = window.innerWidth 
  clientHeight = window.innerHeight
  $('#app').css({
    width:clientWidth,
    height:clientHeight
  })

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #fefefe;
}
</style>
