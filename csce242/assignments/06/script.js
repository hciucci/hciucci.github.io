
// toggle menu and sections

const toggleMenu = () => {
    const menuItems = document.getElementById('menu-items');
    const colorSliderSection = document.getElementById('color-slider-section');
    const pictureChooserSection = document.getElementById('picture-chooser-section');
    
    // toggle menu and arrow

    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
        document.getElementById('menu-toggle').innerHTML = '&#9650;';
    } else {
        menuItems.classList.add('hidden');
        document.getElementById('menu-toggle').innerHTML = '&#9660;';
    // hide active section
        colorSliderSection.classList.add('hidden');
        pictureChooserSection.classList.add('hidden');
    }
}

//show color slider, hide other

const showSlider = () => {
    document.getElementById('color-slider-section').classList.remove('hidden');
    document.getElementById('picture-chooser-section').classList.add('hidden');
}

// show picture chooser, hide other

const showChooser = () => {
    document.getElementById('color-slider-section').classList.add('hidden');
    document.getElementById('picture-chooser-section').classList.remove('hidden');
}

// updates background color based on slider

const updateColor = () => {
    const sliderValue = document.getElementById('colorSlider').value;
    const color = `rgb(${sliderValue}, 0, 0)`;
    document.getElementById('color-slider-section').style.backgroundColor = color;

    let message = "";
    if (sliderValue < 85) {
        message = "Very dark.";
    } else if (sliderValue < 170) {
        message = "It's getting brighter!";
    } else {
        message = "Bright Red!";
    }

    document.getElementById('colorMessage').textContent = message;
}

// loads picture based on button clicked

const choosePicture = (size) => {
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

// event listeners for buttons and sliders

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
document.getElementById('showSlider').addEventListener('click', showSlider);
document.getElementById('showChooser').addEventListener('click', showChooser);
document.getElementById('colorSlider').addEventListener('input', updateColor);
document.getElementById('smallButton').addEventListener('click', () => choosePicture('small'));
document.getElementById('mediumButton').addEventListener('click', () => choosePicture('medium'));
document.getElementById('largeButton').addEventListener('click', () => choosePicture('large'));
