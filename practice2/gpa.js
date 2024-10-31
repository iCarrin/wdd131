//this commented part is my attempt before stealing the solumtion


// function getUserInput(input) {

// }
// function cleanData(stringOfGrades) {
//     const array = stringOfGrades.split(', ').toUpperCase();

// }

// function gpaFromLetter() {
//     let gpa = 0;
//     if (letter === 'A'){
//         gpa = 4.0;
//     } else if (letter === 'B') {
//         gpa = 3.0;
//     } else if (letter === 'C') {
//         gpa = 2.0;
//     }
//     return gpa;
// }
// function doEverything(input){
//     const data = getUserInput(input.map)
//     const clean = data.map(cleadData)
//     const sumGrade = clean.reduce(function (total, items) {
//         return total + items;
//     });
//     const averageGrade = sumGrade/len(clean)
//     console.log(averageGrade)
// }

// const input = document.querySelector("grades")
// const button = document.querySelector("submitButton")

// button.addEventListener("click", doEverything(input))




function getGrades(inputSelector) {
    // get grades from the input box
    const input = document.querySelector("grades").value
    
    // split them into an array (String.split(','))
    let array = stringOfGrades.split(',');

    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    array = array.trim().toUpperCase();    
    // return grades
    return array
}

function lookupGrade(grade) {
// converts the letter grade to it's GPA point value and returns it
if (grade === 'A'){
    const gpa = 4.0;
} else if (grade === 'B') {
    const gpa = 3.0;
} else if (grade === 'C') {
    const gpa = 2.0;
}
return gpa;
}

function calculateGpa(grades) {
// gets a list of grades passed in
const grades = getGrades()
// convert the letter grades to gpa points
const gpa = grades.map(lookupGrade)
// calculates the GPA
const sumGpa = gpa.reduce(function (total, nexItem) {
    return total + nextItem
})
const averageGpa = (sumGpa / gpa.length).toFixed(2)

// return the GPA
return averageGpa
}

function outputGpa(gpa, selector) {
// takes a gpa value and displays it in the HTML in the element identified by the selector
const gpaDisplay = document.createElement("p");
gpaDisplay.textContent = gpa;
selector.appendChild(gpaDisplay);
}

function clickHandler() {
// when the button in our html is clicked:
// button.addEventListener('click',)
// get the grades entered into the input
const input = getGrdaes(document.querySelector("grades"))
// calculate the gpa from the grades entered
const numberGrades = input.map(calculateGpa())
// display the gpa
numberGrades.map(outputGpa)
}


//   my attempt again
//   const button = document.querySelector("submitButton")

//   button.addEventListener("click", doEverything(input))

document
  .querySelector("#submitButton")
  .addEventListener("click", clickHandler);