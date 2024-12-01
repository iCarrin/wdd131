import recipes from './recipes.mjs'

const insert_location = document.querySelector("main");

const recipe_to_display = recipes[Math.floor(Math.random()* recipes.length)];

function insert_recipe(recipe_to_display) {
  insert_location.innerHTML += 
	`
	<div class="recipe_entry">
		<img class="food_image" src="${recipe_to_display.image}" alt="">     
		<div class="content_div">
			<div class="tag_section">
				${recipe_to_display.tags.map(tag => `<h4 class="tag">${tag}</h4>`).join('')}
			</div>
			<h3 class="recipe_name">${recipe_to_display.name}</h3>
			<span
				class="rating"
				role="img"
				aria-label="Rating: ${recipe_to_display.rating} out of 5 stars"
			>
				${Array(5).fill('').map((_, i) => //AI wrote this for me when I asked for something else, but I mostly understand it
				i < Math.floor(recipe_to_display.rating)
				? `<span aria-hidden="true" class="icon-star">⭐</span>`
				: `<span aria-hidden="true" class="icon-star-empty">☆</span>`
				).join('')}
			</span>
			<p class="description">${recipe_to_display.description}</p>
		</div>
	</div>
   `
};

insert_recipe(recipe_to_display);
// console.log(recipes);


function filterRecipes () {
    const searched_value = document.getElementById("search").value.toLowerCase();
	// const searched_value = "entree";
	let sortedRecipes = recipes.filter(recipe => 
		recipe.name.toLowerCase().includes(searched_value) ||
		recipe.description.includes(searched_value) ||
		recipe.tags.some(tag => tag.toLowerCase().includes(searched_value)) ||
		recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(searched_value)))

		.sort((recipeA, recipeB) => recipeA.name.localeCompare(recipeB.name));
	// console.log(recipes[1]);
	// console.log(recipes[2]);
	// console.log('in the filter recipe function')
	// let sortedRecipes = [recipes[3], recipes[4]];
	// for (let i = 0; i<sortedRecipes.length; i++)
	// {
	// 	console.log(sortedRecipes[i])
	// };
	return sortedRecipes;

	
}


document.querySelector(".search_form").addEventListener('submit', function(event)
{
	// console.log('in the nameless function')
	event.preventDefault();
	document.querySelector("main").innerHTML = "";
	const toDisplay = filterRecipes();
	for (let i =0; i<toDisplay.length; i++)
	{
		insert_recipe(toDisplay[i]);
	};
});