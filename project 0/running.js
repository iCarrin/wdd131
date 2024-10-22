const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const imagePlacement = document.createElement('img');
imagePlacement.setAttribute('src', "https://picsum.photos/200");
imagePlacement.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(imagePlacement);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const jerry = document.createElement("section");
jerry.innerHTML = "<h2>DOM Basics</h2>"
document.body.appendChild(jerry)