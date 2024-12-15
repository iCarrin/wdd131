import projects from './projects.mjs'

const main_image = document.querySelector('.hero');
if (main_image) {
    const list_images = ["bldg1.jpg", "project-management.jpg", "BLOCK-6 Rendering.jpg", "NTT.png"];
    document.addEventListener('DOMContentLoaded', function () {
        const randomIndex = Math.floor(Math.random() * list_images.length);
        const randomImage = list_images[randomIndex];
        main_image.src = `images/${randomImage}`;
    });
} else {
    console.log('how\'s your day going?');
}



const project_section = document.querySelector('.all_project_holder')

function populate_project (given_project) {
    project_section.innerHTML += 
    `
    <div class="project_holder">
        <div class="button_header">
            <p>${given_project.header}</p>
        </div>
        <button class="image_clicker" id="${given_project.image}">
            <img src="images/${given_project.image}.jpg" alt="${given_project.image}">
        </button>
    </div>
    
    <div class="text_display" id="${given_project.image}_text">
        <h3>${given_project.specific_name}</h3>
        <div class="line"></div>
        <h4>${given_project.where}</h4>
        <p>Owner: ${given_project.owner}</p>
        <p>Engineer: ${given_project.engineer}</p>
        <p>Contractor: ${given_project.contractor}</p>
        <p>Steel tonnage: ${given_project.steel_tonnage}</p>
    </div>
    `
}



document.querySelector('.all_project_holder').addEventListener('click', function(event) {
    // Check if the clicked element is an image_clicker button
    if (event.target.closest('.image_clicker')) {
        const buttonId = event.target.closest('.image_clicker').id;
        const textId = buttonId + '_text';
        const textBlock = document.getElementById(textId);

        // Toggle the display of the associated text
        textBlock.classList.toggle('show_text');
        
        // Log for debugging
        console.log(`Button clicked: ${buttonId}`);
    }
});



for (let i = 0; i < projects.length; i++){
    populate_project(projects[i]);
}

