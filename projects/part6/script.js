// JS for toggling the hamburger menu on mobile
document.getElementById('menuToggle').addEventListener('click', function () {
    const navList = document.querySelector('.navbar ul');  // Select the <ul> element
    navList.classList.toggle('active');  // Toggle the 'active' class
});
// Fetch and display music data
fetch('music-data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var musicList = document.getElementById('music-list');
        
        data.music.forEach(function(music) {
            var musicItem = document.createElement('li');
            musicItem.classList.add('music-item');
            
            var genresList = "";
            if (music.genres) {
                genresList = music.genres.map(function(genre) {
                    return "<li>" + genre + "</li>";
                }).join('');
            }

            musicItem.innerHTML = 
                '<img src="' + music.image + '" alt="' + music.title + '">' +
                '<div class="music-info">' +
                '<h3>Song Title: "' + music.title + '"</h3>' +
                '<p><strong>Artist:</strong> ' + music.artist + '</p>' +
                '<p><strong>Duration:</strong> ' + music.duration + '</p>' +
                '<p><strong>Description:</strong> ' + music.description + '</p>' +
                '<p><strong>Genres:</strong> <ul>' + genresList + '</ul></p>' +
                '</div>';
                
            musicList.appendChild(musicItem);
        });
    })
    .catch(function(error) {
        console.error('Error fetching the data:', error);
    });
