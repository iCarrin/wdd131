const menuButton = document.querySelector(".menu_button")

function hideMenu() {
    const navigation = document.querySelector(".menu");
    navigation.classList.toggle("hide")
}

function handleResize(){
    const navigation = document.querySelector(".menu");
    const size = window.innerWidth
    if (size > 1000) {
        navigation.classList.remove("hide")
    }
    else {
        navigation.classList.add("hide")        
    }

}

menuButton.addEventListener("click", hideMenu) 
// document.addEventListener("DOMContentLoaded", handleResize)    this was my attempt but I liked your's so much better that I changed it.
handleResize()
document.addEventListener("Resize", handleResize)