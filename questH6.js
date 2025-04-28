// Quest H6 – Merge Config Objects
//  Difficulty: Hard (5 pts)

// Story
//  User settings must override defaults without mutating them.

// Objective
//  Combine two config objects into one, then report all settings.

// Instructions
// Name your file questH6.js


// Create a constant named defaultConfig and assign it an object with mode: 'auto' and speed: 100


// Create a constant named userConfig and assign it an object with speed: 80 and logging: true


// Use Object.assign to merge defaultConfig and userConfig into a new constant named finalConfig


// Use a template literal and console.log to print exactly
//  Final config: mode:auto, speed:80, logging:true



// Acceptance Criteria
// defaultConfig remains unchanged with mode 'auto' and speed 100


// userConfig remains unchanged with speed 80 and logging true


// finalConfig has mode 'auto', speed 80, logging true


// The console shows exactly:
//  Final config: mode:auto, speed:80, logging:true




const defaultConfig = { mode: 'auto', speed: 100 };
const userConfig = { speed: 80, logging: true };

const finalConfig = Object.assign({}, defaultConfig, userConfig);

console.log(`Final config: mode:${finalConfig.mode}, speed:${finalConfig.speed}, logging:${finalConfig.logging}`);