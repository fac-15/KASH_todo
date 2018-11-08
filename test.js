const todoFunctions = require('./logic.js');

const dummyTodo = [
  { id: -3, description: 'first todo' },
  { id: -2, description: 'second todo' },
  { id: -1, description: 'third todo' },
];

const newTodoDummy = [{ id: 0, description: 'fourth todo'}];
const newTodoCompletedDummy = [{ id: 0, description: 'fourth todo', completed: true}];

test('test if generateId works', () => {
  expect(todoFunctions.generateId()).toBe(1);
});

// cloneArrayOfObjects should take an array and return another array of objects
test('test if cloneArrayOfObjects works', () => {
  expect(todoFunctions.cloneArrayOfObjects(dummyTodo)).not.toBe(dummyTodo);
  expect(todoFunctions.cloneArrayOfObjects(dummyTodo)).toEqual([
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]);
});

// take dummyTodo array and add newTodoDummy to the end
test('test if addTodo works', () => {
  expect(todoFunctions.addTodo(dummyTodo, newTodoDummy)).toEqual([
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 0, description: 'fourth todo' }
  ]);
});

//take todo array, remove todo with id of second argument of function and return a new Array
test('test if deleteTodo works', () => {
  expect(todoFunctions.deleteTodo(dummyTodo, -1)).toEqual([
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
  ]);
});

//clone todo array, find the todo with the idToMark, and toggle completed element
test('test if markTodo works', () => {
  expect(todoFunctions.markTodo(todo, -2)).toEqual([
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo', completed: true;},
    { id: -1, description: 'third todo' },
  ]);
});
