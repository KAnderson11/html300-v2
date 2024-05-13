<script>


export
default {
 name:'ImgComp',
 props:{
// I had the wrong syntax here with the [] instead of {}.  I also validated the types as String
   imagepath:
String,
   alttext:
String
 },
 data()
 {
 return{
   ok:true
 }
},
methods:{
   //can put toggle here
}
}


</script>


<template>

    <div>
      <div class="alert-box"v-show="ok">
    <strong>Click the toggle button </strong>
	
  <button @click="ok = !ok">toggle</button>

	<h1 v-show="ok">Hello!</h1>
	

    <br/>
   
  
 <div>
   <img
 :src="imagepath"
 :alt="alttext"
 :title="alttext">
   <caption>This is an image</caption>
 </div>
 </div>
</div>
</template>

<style scoped>



.alert-box {
  color: #666;
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f8f8;
}
</style>