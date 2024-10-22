const selector = document.getElementById("L/D");

selector.addEventListener('change', function() {
    const selectedValue = selector.value;
    const selectorDropDown = document.querySelector('.content');

    if (selectedValue === 'Dark'){

        selectorDropDown.className = 'content dark';
    } else {
        selectorDropDown.className = 'content';
    }
});