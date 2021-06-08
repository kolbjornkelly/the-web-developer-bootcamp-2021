let userInput = prompt("What would you like to do?");
const todos = ["Collect Eggs", "Go Shopping"];

while (userInput !== "quit" && userInput !== "q") {
  if (userInput == "list") {
    console.log("************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("************");
  } else if (userInput == "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`"${newTodo}" added to the list`);
  } else if (userInput == "delete") {
    const index = parseInt(prompt("Ok, enter the index to delete:"));
    if (!Number.isNaN(index)) {
      let deleted = todos.splice(index, 1);
      console.log(`Deleted  "${deleted[0]}" from index ${index}`);
    } else {
      console.log("Invalid index");
    }
  }
  userInput = prompt("What would you like to do?");
}
console.log("Quit The App");
