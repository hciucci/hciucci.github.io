// Toggle Menu Function
function toggleMenu() {
    const menuItems = document.getElementById('menu-items');
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
        document.getElementById('menu-toggle').innerHTML = '&#9650;'; // Change arrow to up
    } else {
        menuItems.classList.add('hidden');
        document.getElementById('menu-toggle').innerHTML = '&#9660;'; // Change arrow to down
    }
}

// Show/Hide Sections
function showSlider() {
    document.getElementById('color-slider-section').classList.remove('hidden');
    document.getElementById('picture-chooser-section').classList.add('hidden');
}

function showChooser() {
    document.getElementById('color-slider-section').classList.add('hidden');
    document.getElementById('picture-chooser-section').classList.remove('hidden');
}

// Color Slider Functionality
function updateColor() {
    const sliderValue = document.getElementById('colorSlider').value;
    const color = `rgb(${sliderValue}, 0, 0)`;
    document.getElementById('color-slider-section').style.backgroundColor = color;

    let message = "";
    if (sliderValue < 85) {
        message = "Cool and calm.";
    } else if (sliderValue < 170) {
        message = "Getting warmer!";
    } else {
        message = "It's getting hot!";
    }

    document.getElementById('colorMessage').textContent = message;
}

// Picture Chooser Functionality
function choosePicture(size) {
    let imageUrl;
    switch (size) {
        case 'small':
            imageUrl = 'https://picsum.photos/100';
            break;
        case 'medium':
            imageUrl = 'https://picsum.photos/200';
            break;
        case 'large':
            imageUrl = 'https://picsum.photos/300';
            break;
    }

    const pictureDisplay = document.getElementById('pictureDisplay');
    pictureDisplay.innerHTML = `<img src="${imageUrl}" alt="Random Picture">`;
}
