// Quest 8 – Retry Strategy
//  Difficulty: Easy (2 pts)
// Story
//  Network retries are limited. You must decide whether to continue retrying.
// Objective
//  Use a ternary expression to choose and display the retry status.
// Instructions



// Create a variable retryCount with value 2


// Create a constant maxRetries with value 5


// Create a constant status that uses retryCount < maxRetries ? Continue : Stop


// Print the exact sentence
//  Status: Continue


// Acceptance Criteria
// retryCount is defined as a variable with value 2


// maxRetries is defined as a constant with value 5


// status is defined as a constant using a ternary expression


// The console shows exactly:
//  Status: Continue




let retryCount = 2;
const maxRetries = 5;
const status = retryCount < maxRetries ? "Continue" : "Stop";

console.log(`Status: ${status}`);
