// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "first todo" },
    { id: -2, description: "second todo" },
    { id: -1, description: "third todo" }
  ]; // this is our initial todoList

  // This function takes a todo,
  //it returns the DOM node representing that todo
  var button = document.getElementById("submit");

  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    todoNode.textContent = todo.description;
    //container.appendChild(todoNode);
    //return container;
    var checkMark = document.createElement("button");
    if(todo.done){
        checkMark.classList.add('checkboxTrue');
        // todoNode.classList.add('checked-off');
      } else {
        checkMark.classList.add('checkboxFalse');
      }
    checkMark.addEventListener("click", function(event){
      var newState = todoFunctions.markTodo(state, todo.id);
      // checkMark.classList.toggle("checkbox");
      // checkMark.setAttribute("id", "markk");
      // var element = document.getElementById('markk');
      // element.style.color = 'red';
      update(newState);
    });
    todoNode.appendChild(checkMark);
    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var inputValue = document.getElementById("inputValue");
      //createTodoNode(event);
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      //var description = ; // event.target ....
      //console.log(inputValue.value);
      var obj = { description: inputValue.value };
      // hint: todoFunctions.addTodo

      var newState = todoFunctions.addTodo(state, obj); // ?? change this!
      return update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
    var inputValue = document.getElementById("inputValue");
    inputValue.value = " ";
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
