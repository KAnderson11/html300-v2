<script>


export
default {
 name:'ImgComp',
 props:{
// I had the wrong syntax here with the [] instead of {}.  I also validated the types as String
   imagepath: String, alttext: String
 },
 data()
 {
 return{
   ok:true,

   showBorder:false
 }
},
methods:{
   //can put toggle here

   toggleBorder(){
    this.showBorder=!this.showBorder
   }
}
}


</script>


<template>

    <div>
      <div class="alert-box"v-show="ok">
    <strong>Click the toggle button </strong>
    <button @click="toggleBorder()">toggle</button>
    <h1>Hello! Some text here</h1>


  
 <div>
   <img
 :src="imagepath"
 :alt="alttext"
 :title="alttext"
 :class="{ imageBorder:showBorder}"
 />
   <caption>This is an image</caption>
 </div>
 </div>
</div>
</template>

<style>
img{
border:2px solid transparent;

/* Prevents jump when the order is added */
}

.imageBorder{
border:2px solid red;
}

</style>