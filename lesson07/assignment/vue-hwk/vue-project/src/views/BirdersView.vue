<script>
import Tallbird from '../assets/images/tall-bird.png';
import Wetland from '../assets/images/wetland-center.png';
import Heron from'../assets/images/heron.png';
import ImgComp from '../components/ImgComp.vue';
export
default {
 name:'app',
 components:{ImgComp},
// This needs {} not []
 data()
 {
 return{
   images:
 [Tallbird,Wetland],
   photos:[
     {
       src:Wetland,
       alt:"grassy area of wetlands",
     },
     {
       src:Tallbird,
       alt:"a large blue heron bird with white head feathers, dark blueish grey feathers near its eyes and lighter grey feathers along its chest",
     },
     {
       src:Heron,
       alt:"a blue heron bird is hunched over with its body tucked in underneath its wings, the bird is standing in front of tall green foliage",
     },
   ],
   testimage:
Tallbird,
   message:'Tahoma Bird Alliance',
   text:
'Bird walk registration is open',
   manyBirds:
 [
       'some filler text',
       'more filler text',
     ]
 }
}
}




</script>
<template>
 <main>
   
   <h1>This is a beginning birders webpage</h1>
   <!--<img :src="testimage" alt="Big tall bird blue and grey"> -->
   <h2>Image
 Gallery</h2>
   <div
class="image-container">
     <div
class="image"
v-for = "(image,index) in images" :key="index">
       <ImgComp
alttext="screenreader"
 :imagepath="image"></ImgComp>
     </div>
   </div>




   <h2>Photo
 Gallery</h2>
   <div
class="image-container">
     <div
class="image" v-for = "(photo,index) in photos" :key="index">
       <ImgComp
 :alttext="photo.alt"
 :imagepath="photo.src"></ImgComp>
     </div>
   </div>
 




 </main>
</template>


<style>
</style>
