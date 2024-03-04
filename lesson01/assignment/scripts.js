// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    // Creating a variable named inputField and then using querySelector to have the machine get the form that has been assigned an id of example-form and the item that is class of input from that form. That particular form has been assigned an id. The form id is example-form.
    // Creating a variable named userInput to hold the information. The machine will find the value from the variable named inputField?? We know that the inputField is the item that is class of input which is being entered by our website user into that form that has an id of example-form.
    // Creating a variable named userNumber to hold the value of the input that has been provdied by the website user. The parseInt() will return an integer. We want our input to be type of number and not have the input be a string that is type of text.
    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

// Find the gum form, and handle its submit event
  const gumForm = document.querySelector('#gum-pack')

  gumForm.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
     event.preventDefault()	
    console.log("Submitted!")
  
  //Handle input. The website user will input information about how many packs of gum they want to purchase.
  //Create a variable named userInput then use querySelector to find the form with an id of gum-pack and find the item with a class of input. We want the value of that particular item. 
  //Create a variable named userNumber to hold the website user input. The parseInt() will return an integer. We want our input from the website user to be type of number and not have the input be a string that is type of text.
  const userInput = document.querySelector('#gum-pack .input').value
  const userNumber = parseInt(userInput)
    console.log(userNumber)
  
  
  //Handle output
  //Create variable named output. Then use the querySelector fo find the form which has an id of gum-pack and find the item which has been assigned a class of output
  const output = document.querySelector('#gum-pack .output')
  
  //Output to the webpage. The machine will calculate the total amount owed by multiplying the input information of the number of gum packs by the 3 dollar per pack price. Then the machine will display the total amount owed.
  //The machine will place the information inside the item that has a class of output.
  output.innerHTML = `${userNumber * 3} Dollars US is the total amount owed`
  })
  
  })

  // Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const scotlandForm = document.querySelector('#scotland-form')

  scotlandForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()
    console.log("Submitted!")

       // An array that we we will NOT transform based on user input
   const array1 = [1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057];
   
    //website user will input a year, the user will guess to see if they know one of the years when Macbeth reigned as King
    const userInput = document.querySelector('#scotland-form .input').value
    const userNumber = parseInt(userInput)
    console.log(userNumber)

   
    //The machine will look inside the array1 to see if the user input is a number that exists inside of the array1
     //The machine should return true or false depending if the year that was inputted by the user was found inside of the array1
    let isInArray = array1.includes(userNumber);
    // This logs true if the website user has inputted a number that is found inside the array
    console.log(isInArray);

    // Template literals to have information to display for the output to the screen
    let answer = `<p>It is <b class="highlight">${isInArray}</b> </p>`;

    // Select the element you want to target. I can use querySelector to find the div element that is class of answer.
    let answerElement = document.querySelector('div.answer');

//I can place information inside of my HTML element that has been assigned a class of answer
    answerElement.innerHTML = answer;




})


})


  // Code that requires the DOM be loaded should not be run until the DOM is loaded
  document. addEventListener("DOMContentLoaded", function(){


    // Find the my-form, and handle its submit event
  
  
  const myForm = document.querySelector('#my-form')
  
  
  
  
    myForm.addEventListener('submit', function(event){
      // Prevent the form from trying to submit to a server
      event.preventDefault()
      console.log("Submitted!")
  
  
       // An array named data that we can NOT transform based on user input
  const array = [2, 7, 8, 9, 10, 12];  
    
   const inputField = document.querySelector('#my-form .input')
   const userInput = inputField.value
      
  
  //The machine will use the find() function. 
  //The machine will look inside the array to search for the first item that it can find inside the array which is greater than the input which was inputted by the website user.
  let found = array.find(function(value){
      return value > userInput;
      
      })
      console.log(found);
      const text = document.createTextNode (`${found}`)
      const p = document.createElement('p')
      p.appendChild(text)
      myForm.appendChild(p)
      myForm.classList.add('submitted')
  
  
  }) 

}) 


// Code that requires the DOM be loaded should not be run until the DOM is loaded
 document. addEventListener("DOMContentLoaded", function(){


  // Find the math-form, and handle its submit event
const mathForm = document.querySelector('#math-form')


  mathForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()
    console.log("Submitted!")


     // An array named data that we can  transform based on user input
let array = [2, 3, 5, 7];  
 
//The machine will take the input that has been inputted by thw website user and make sure that the input is a type of number instead of type of text
 const userInput = document.querySelector('#math-form .input').value
 const userNumber = parseInt(userInput)
   console.log(userNumber)
    

//The machine will use the map() function. 
//Input a number and the machine will add that number to each of these prime numbers inside the array.
   let array2 = array.map(function(value) {
    return value + userNumber
  });

//The machine will display the answers on the website so the answers are visible to the website user
    console.log(array2);
    const text = document.createTextNode (`${array2}`)
    const p = document.createElement('p')
    p.appendChild(text)
    mathForm.appendChild(p)
    mathForm.classList.add('submitted')


}) 


}) 
