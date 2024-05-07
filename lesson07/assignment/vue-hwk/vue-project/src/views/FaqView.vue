<script>
export default {
  name:'app',
  data() {
  return{
    items:[
      {
        question:"Q: How do I identify a bird I saw?",
        answer:"Whatever text would be here"
      },
      {
        question:"Q: Where to Bird in Washington?",
        answer:"Whatever text would be here"
      },
      {
        question:" Q: Where can I buy binoculars/optics for birding or wildlife viewing?",
        answer:"Whatever text would be here"
      },
    ]
  }
 }
}


</script>

<template>
 <main class="main">



                          <!-- Bootstrap accordion 2 --> 
            <div class="accordion" id="accordionExample2">
                <div class="accordion-item" v-for="(item,index) in items" :key="index">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="true" :aria-controls="'collapse'+index">
                      {{ item.question }}
                        <!-- The question information will be visible when the accordion is collapsed or expanded --> 
                    </button>
                  </h2>
                  <div :id="'collapse'+index" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                    <div class="accordion-body">
                      {{ item.answer }}
                    <!-- The answer information will only become visible when the accordion expanded --> 
                    </div>
                  </div>
                </div>

                
              </div>
       
              
          
        </main>
</template>
