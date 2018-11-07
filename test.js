const todoFunctions = require('./logic.js');

test('test if generateId works', () => {
  expect(todoFunctions.generateId()).toBe(1);
});

// test('test if cloneArrayOfObjects works', () => {
//   console.log(logic)
//   expect(logic.cloneArrayOfObjects).toBe(Function);
// });
