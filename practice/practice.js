//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
  }
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join()

const letters = ['A', 'B', 'A'];
function gpaFromLetter(letter) {
    let gpa = 0;
    if (letters === 'A'){
        gpa = 4;
    } else if (letter === 'B') {
        gpa = 3;
    } else if (letter === 'C') {
        gpa = 2;
    }
    return gpa;
}
const grade = letters.map(gpaFromLetter);

const sumGrad = grade.reduce(function (total, item) {
    return total + item;
});
const aveGrad = pointsTotal / gpaPoints.length;
// so all the reduce function does is take "A" (total) and add it to "B" (item or next item in the array it was handed) over and over again.
const sumGrade = grade.reduce((total, item) => total + item);
const aveGrade = pointsTotal / gpaPoints.length;

const fruitStand = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

const bigNamedFruit = fruitStand.filter((fruit) => fruit.length > 6);
console.log(bigNamedFruit)

const numbs = [12, 34, 21, 54];
const luckyNumb = 21;
console.log(numbs.indexOf(luckyNumb))




// new practice with functions sections because I don't want to create a new file.
