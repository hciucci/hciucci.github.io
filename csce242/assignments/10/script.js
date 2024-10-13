async function fetchIceCreams() {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const iceCreams = await response.json();
    displayIceCreams(iceCreams);
}

function displayIceCreams(iceCreams) {
    const container = document.getElementById('iceCreamContainer');

    iceCreams.forEach(iceCream => {
        const iceCreamDiv = document.createElement('div');
        iceCreamDiv.classList.add('ice-cream');

        const img = document.createElement('img');
        img.src = 'https://portiaportia.github.io/json/images/ice-creams/' + iceCream.image;
        img.alt = iceCream.name;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const name = document.createElement('h3');
        name.innerText = iceCream.name;

        overlay.appendChild(name);

        iceCreamDiv.appendChild(img);
        iceCreamDiv.appendChild(overlay);
        container.appendChild(iceCreamDiv);
    });
}

// Call the function to fetch and display ice creams
fetchIceCreams();
