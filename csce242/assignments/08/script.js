window.onload = () => {
    // associative array w image paths, titles, and descriptions
    const imagesArray = [
        {
            src: 'images/birthday.jpg',
            title: 'Birthday Hat',
            description: 'This character is celebrating with a birthday hat!'
        },
        {
            src: 'images/clown.jpg',
            title: 'Happy Clown',
            description: 'A happy clown waving at you.'
        },
        {
            src: 'images/rain.jpg',
            title: 'Rainy Day',
            description: 'There\'s a big storm coming!'
        },
        {
            src: 'images/read.jpg',
            title: 'Reading Character',
            description: 'This character is reading a book!'
        },
        {
            src: 'images/shovel.jpg',
            title: 'Sir Digs a Lot',
            description: 'Time to plant something awesome!'
        },
        {
            src: 'images/work.jpg',
            title: 'Hard Worker',
            description: 'This character is working hard on a laptop!'
        }
    ];

    const gallery = document.getElementById('gallery');
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    // loops through the array and create images
    imagesArray.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;

        imgElement.addEventListener('click', () => {
            title.textContent = image.title;
            description.textContent = image.description;
        });

        imgContainer.appendChild(imgElement);
        gallery.appendChild(imgContainer);
    });
};
