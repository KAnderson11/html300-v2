const peopleJSON = '[{"name":"Paolo Maldini","jobTitle":"Front End Developer","company":"Web Weavers","experience":"3 years","school":"University of Washington","major":"Marketing","email":"paolo@example.com","linkedInUrl":"paolo.linkedinprofile.com"},{"name":"Barbara Bonansea","jobTitle":"Software Engineer","company":"Excellence in the Cloud","experience":"12 years","school":"University of Southern California","major":"Computer Science","email":"barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com"},{"name": "Javier Hernandez","jobTitle": "User Experience Engineer","company":"Web Sites and More","experience":"5 years","school":"Seattle University","major":"Performing Arts","email":"javier@example.com","linkedInUrl":"javier.linkedinprofile.com"},{"name": "Maribel Dominguez","jobTitle":"Front End Engineer","company":"Bits and Bytes","experience":"6 years","school":"University of Washington","major":"Mechanical Engineering","email":"maribel@example.com","linkedInUrl":"maribel.linkedinprofile.com"}]'

const people = JSON.parse(peopleJSON)

people.forEach(function(el){
    let list = document.createElement('p')
    list.innerHTML =`
    <div>${el.name}</div>
    <div>${el.jobTitle}</div>
    <div> Company: ${el.company}</div>
    <div> Experience: ${el.experience}</div>
    <div> School: ${el.school}</div>
    <div> Major: ${el.major}</div>
    <div> Email: ${el.email}</div>
    <div>${el.linkedInUrl}</div>
 `
 const container = document.querySelector('#list-container')
 container.append(list)
})




   


