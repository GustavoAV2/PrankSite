<template>
  <div class="container">
    <Box :msg="msg"/>
  </div>
</template>

<script>
import Box from '@/components/Box.vue'

export default {
  name: 'HomeView',
  props:{
    msg: String
  },
  components: { 
    Box 
  }
}
</script>

<style>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
</style>