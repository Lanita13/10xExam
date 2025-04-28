// Difficulty: Medium (3 pts)
// Story
//  Multiple buttons trigger the same grid alert. You must avoid duplicate code by using a callback.
// Objective
//  Attach event listeners via a shared handler function.
// Instructions
// Name your file quest40.js


// Assume an HTML page with buttons having class alert-btn


// Declare a function handleAlert that prints exactly Alert triggered


// Select all alert-btn elements into a list


// Loop over the list and attach click listeners that call handleAlert


// Acceptance Criteria
// handleAlert logs “Alert triggered”


// All buttons with class alert-btn use the same handler


// Clicking any alert-btn prints exactly:
//  Alert triggered




function handleAlert() {
    console.log("Alert triggered");
  }
  

  const alertButtons = document.querySelectorAll('.alert-btn');
  
  
  alertButtons.forEach(button => {
    button.addEventListener('click',  ( ) => {
      console.log("Alert triggered");
    });
  });
  
