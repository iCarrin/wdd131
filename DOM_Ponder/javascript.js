// events.js
let tasks = [];
function taskTemplateRipOff(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`
}

function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const html = tasks.map(taskTemplateRipOff).join("");
  listElement.innerHTML = html;
}

function newTask() {
  // get the value entered into the #todo input
  const input = document.getElementById('todo');
  // add it to our arrays tasks
  tasks.push({detail: input.value, completed: false});

  // render out the list

  renderTasks(tasks);
  console.log(tasks[0].detail);
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  // this line removes the HTML element from the DOM
  taskElement.remove();
  
  
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
document.getElementById('submitTask').addEventListener('click', newTask);
document.getElementById('submitTask').addEventListener('click', newTask);
console.log("it's getting to this point")


const a = 1
let b = 2

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

function sum(a, b) {
  return a + b
}

const sum2 = (a, b) => a + b

const sum3 = function(a,b) {
  return a + b
}

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  getName: () => {
    return "Isaiah Carrin"
  }
}

// everything is an object in javascript

const getName = () => {return "Isaiah Carrin"}

// everything is an object. You access functions in objects by the dot operator (cosole.log or document.getElementByID)
// you could say 
const d = document 
// and now you don't have to keep typing document to referance the document object 
consle.log(d.querySelector('ul'))
const listItems = d.querySelectorAll('li')


let counter = 0 
while (true) {  
  console.log('Hello World')
  count ++ 
  count +=1
  counter = counter + 1
  if (counter < 10){
    break
  }
}

while (counter < 10) {  
  console.log('Hello World')
  counter ++  
}

for ( let i = 0; 1 < 10; 1++) {
  consle.log('I\'m in a lop for '+i)

}

listItems.forEach((elementyBoi) => {
  consle.log(elementyBoi)
})

for (let i = 0; listItems.length; i++) {
  const elementyBoi = listItems.length[i]
  elementyBoi.classList.add('hello')
}

//so elementyBoi is just a brand new variable we made (hence the crazy name to point that out) listItems is a lsit of all 'li' elements that we declared up above
//.classList is a function that belongs to all list objects. then the .add function will add the parenthiceis. sooooo. we made a list of HTML elemenets
// we run the classList funtion to identify where all of their classes would be "if they had one!" then we call the .add function to add a class to that location.