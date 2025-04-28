// Quest H10 – Threshold Logger
//  Difficulty: Hard (5 pts)
// Story
//  A nested logger warns only when values exceed a threshold.
// Objective
//  Use nested functions, default parameters, and a loop to log warnings.
// Instructions
// Name your file questH10.js


// Create a constant values = [10, 20, 5, 30]


// Declare createLogger(threshold = 15) that:


// Declares logValues() which loops over values and for each number > threshold, prints Warning: <number>


// Returns logValues


// Call createLogger() to get logger, then call logger()


// Acceptance Criteria
// logger() prints exactly:
// Warning: 20
// Warning: 30



const values = [10, 20, 5, 30];

function createLogger(threshold = 15) {
    function logValues() {
        for (let num of values) {
            if (num > threshold) {
                console.log(`Warning: ${num}`);
            }
        }
    }
    return logValues;
}

const logger = createLogger();
logger();