<script>

export default {
  name:'app',
  props:[imagepath,alttext],
  data() {
  return{
    
  }
 },
 methods:{
    // can put toggle here
 }
}


</script>

<template>
    <img :src="imagepath" :alt="alttext"> 

</template>