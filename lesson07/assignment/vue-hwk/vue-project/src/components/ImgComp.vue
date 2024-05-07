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
   
 }
},
methods:{
   //can put toggle here
}
}


</script>


<template>
 <div>
   <img
 :src="imagepath"
 :alt="alttext"
 :title="alttext">
   <caption>This is an image</caption>
 </div>
</template>