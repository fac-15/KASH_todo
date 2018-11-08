const todoFunctions = require("./logic.js");
const dummyTodoList = [
  { id: 0, description: 'first todo' },
  { id: 1, description: 'second todo' },
  { id: 2, description: 'third todo' },
];

const dummyTodo = {description: 'fourth todo'};


test('test if generateId works', () => {
  expect(todoFunctions.generateId()).toBe(1);
});

test('test if cloneArrayOfObjects works', () => {
  expect(todoFunctions.cloneArrayOfObjects(dummyTodoList)).not.toBe(dummyTodoList);
  expect(todoFunctions.cloneArrayOfObjects(dummyTodoList)).toEqual([
    { id: 0, description: 'first todo' },
    { id: 1, description: 'second todo' },
    { id: 2, description: 'third todo' },
  ]);
});

test("test if updated array is returned", () => {
  expect(todoFunctions.addTodo([1, 2, 3, 4], [5])).toEqual([1, 2, 3, 4, 5]);
});


//clone todo array, find the todo with the idToMark, and toggle completed element
test('test if markTodo works', () => {
  expect(todoFunctions.markTodo(dummyTodoList, 1)).toEqual([
    { id: 0, description: 'first todo' },
    { id: 1, description: 'second todo', done: "true" },
    { id: 2, description: 'third todo' },
  ]);
});

test('test if toggle works', () => {
  const dummyTodoFalse = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo', done: "true" },
    { id: -1, description: 'third todo' },
  ];
  expect(todoFunctions.markTodo(dummyTodoFalse, -2)).toEqual([
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo', done: "false" },
    { id: -1, description: 'third todo' },
  ]);
})

test('test if toggle works in reverse', () => {
  const dummyTodoFalse = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo', done: "false" },
    { id: -1, description: 'third todo' },
  ];
  expect(todoFunctions.markTodo(dummyTodoFalse, -2)).toEqual([
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo', done: "true" },
    { id: -1, description: 'third todo' },
  ]);
})

//test which checks that markTodo leaves todo unchanged
// test('test if markTodo leaves todo unchanged', () => {
//   expect(todoFunctions.markTodo(dummyTodo)).toEqual([
//     { id: -3, description: 'first todo' },
//     { id: -2, description: 'second todo' },
//     { id: -1, description: 'third todo' },
//   ]);
// });

test('test if id is added', () => {
  expect(todoFunctions.addTodo(dummyTodoList, dummyTodo)).toEqual(
    [
      { id: 0, description: 'first todo' },
      { id: 1, description: 'second todo' },
      { id: 2, description: 'third todo' },
      { id: 3, description: 'fourth todo' }
    ])
  }
);

//take todo array, remove todo with id of second argument
//of function and return a new Array
test('test if deleteTodo removes 2nd parameter', () => {
  expect(todoFunctions.deleteTodo(dummyTodoList, 1)).toEqual([
    { id: 0, description: 'first todo' },
    { id: 2, description: 'third todo' }
    ])
  }
);


//
// //clone todo array, find the todo with the idToMark, and toggle completed element
// // test('test if markTodo works', () => {
// //   expect(todoFunctions.markTodo(todo, -2)).toEqual([
// //     { id: -3, description: 'first todo' },
// //     { id: -2, description: 'second todo', completed: true;},
// //     { id: -1, description: 'third todo' },
// //   ]);
// // });
