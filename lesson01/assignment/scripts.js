// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

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
  const userInput = document.querySelector('#gum-pack .input').value
  const userNumber = parseInt(userInput)
    console.log(userNumber)
  
  
  //Handle output
  const output = document.querySelector('#gum-pack .output')
  
  //Output to the webpage. The machine will calculate the total amount owed by multiplying the input information of the number of gum packs by the 3 dollar per pack price. Then the machine will display the total amount owed.
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

   
    //the machine will look inside the array1 to see if the user input is a number that exists inside of the array1
    const final = console.log(array1.includes(userNumber));
    const output = document.querySelector('#scotland-form .output')
    
        //The machine should return true or false depending if the year that was inputted by the user was found inside of the array1
        output.innerHTML = `${final}`

})


})