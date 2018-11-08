const todoFunctions = require("./logic.js");

test("test if generateId works", () => {
  expect(todoFunctions.generateId()).toBe(1);
});

// test("test if it is an array", () => {
//   expect(Array.isArray(todoFunctions.addTodo())).toBe(true);
// });

test("test if updated array is returned", () => {
  expect(todoFunctions.addTodo([1, 2, 3, 4])).toEqual([1, 2, 3, { id: 2 }]);
});

// test('test if cloneArrayOfObjects works', () => {
//   console.log(logic)
//   expect(logic.cloneArrayOfObjects).toBe(Function);
// });
