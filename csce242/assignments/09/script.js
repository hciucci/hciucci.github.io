class Bird {
    constructor(name, size, lifespan, food, habitat, fact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }

    getSection() {
        return `
            <div class="bird-card" onclick="showBirdDetails('${this.name}')">
                <img src="images/${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <strong>Size:</strong> ${this.size} inches<br>
            <strong>Lifespan:</strong> ${this.lifespan} years<br>
            <strong>Food:</strong> ${this.food}<br>
            <strong>Habitat:</strong> ${this.habitat}<br>
            <strong>Interesting Fact:</strong> ${this.fact}
        `;
    }
}

// creates bird object array
const birds = [
    new Bird('Hummingbird', 2.5, '3-5', 'Nectar', 'Trees', 'They\'re nicknamed "Hummers"', 'hummingbird.jpg'),
    new Bird('Blue Jay', 11, '7-9', 'Nuts and seeds', 'Forests', 'They can mimic the calls of hawks.', 'bluejay.jpg'),
    new Bird('Cardinal', 8, '15', 'Fruits and seeds', 'Woodlands', 'They sing year-round.', 'cardinal.jpg'),
    new Bird('Robin', 10, '2', 'Worms', 'Gardens', 'They are early risers.', 'robin.jpg')
];

// loads birds into dom
function loadBirds() {
    const birdList = document.getElementById('bird-list');
    birds.forEach(bird => {
        birdList.innerHTML += bird.getSection();
    });
}

// shows bird details
function showBirdDetails(birdName) {
    const selectedBird = birds.find(bird => bird.name === birdName);
    document.getElementById('birdTitle').innerText = selectedBird.name;
    document.getElementById('birdImage').src = `images/${selectedBird.image}`;
    document.getElementById('birdDetails').innerHTML = selectedBird.getExpandedSection();
    document.getElementById('birdModal').style.display = 'block';
}

window.onload = loadBirds;
