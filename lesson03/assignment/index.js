const peopleJSON = '[{"name":"Paolo Maldini","jobTitle":"Front End Developer","company":"Web Weavers","experience":"3 years","school":"University of Washington","major":"Marketing","email":"paolo@example.com","linkedInUrl":"paolo.linkedinprofile.com"},{"name":"Barbara Bonansea","jobTitle":"Software Engineer","company":"Excellence in the Cloud","experience":"12 years","school":"University of Southern California","major":"Computer Science","email":"barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com"},{"name": "Javier Hernandez","jobTitle": "User Experience Engineer","company":"Web Sites and More","experience":"5 years","school":"Seattle University","major":"Performing Arts","email":"javier@example.com","linkedInUrl":"javier.linkedinprofile.com"},{"name": "Maribel Dominguez","jobTitle":"Front End Engineer","company":"Bits and Bytes","experience":"6 years","school":"University of Washington","major":"Mechanical Engineering","email":"maribel@example.com","linkedInUrl":"maribel.linkedinprofile.com"}]'

const people = JSON.parse(peopleJSON)

// Loop through all elements of the list. Use a .forEach( ) function
people.forEach(function(el){
    let list = document.createElement('div')
      // Build HTML and use template literals ${ }
    list.innerHTML =`  
    <div class=flex-box1>
    <div class ="flex-box2"> 
        <div class="static-block">
            <img class="round" src="img/headshot.jpg" alt=" "  height="200em">
            <h1 class="static-block__title">${el.name}</h1>
            <h2 class="slant-text">${el.jobTitle}</h2>
   
        </div>
        </div>
        <div class ="flex-box3">
          
        <div class ="mini-container">
            <div class="static-block__content">
            <div class ="flex-box-title">
           
                <h4 >Company:
                </h4>
                <p class="static-block__copy"> ${el.company}</p>
                
             </div>     
             <div class=flex-box-title>
                
                <h4 >Experience:
                </h4>
                <p class="static-block__copy">${el.experience}</p>
               </div> 
               <div class=flex-box-title>
                <h4 >School:
                </h4>
                <p class="static-block__copy"> ${el.school}</p>
               </div>
             
               
               <div class=flex-box-title>  
                <h4>Major:</h4>
                <p class="static-block__copy">  ${el.major}</p>
               </div>
               <div class=flex-box-title>  
                <h4>Email:</h4>
                <p class="static-block__copy">${el.email}</p>
               </div>
               <div class=flex-box-title>  
                <img src="img/linkedin.svg " alt="" class="static-block__img" height="30px">
                <h4 class="social-media">${el.linkedInUrl}</h4>
 `

 const container = document.querySelector('#list-container')
 container.append(list)
})
 // Insert HTML into page



   


