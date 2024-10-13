// JS for toggling the hamburger menu on mobile
document.getElementById('menuToggle').addEventListener('click', function () {
    const navList = document.querySelector('.navbar ul');
    navList.classList.toggle('active');  // toggles active class
});

// Fetch and display music data
fetch('music-data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const musicList = document.getElementById('music-list');

        if (!musicList) {
            console.error('music-list element not found');
            return;
        }

        data.music.forEach(function(music) {
            const musicItem = document.createElement('li');
            musicItem.classList.add('music-item');

            let genresList = "";
            if (music.genres) {
                genresList = music.genres.map(function(genre) {
                    return "<li>" + genre + "</li>";
                }).join('');
            }

            musicItem.innerHTML = `
                <img src="${music.image}" alt="${music.title}">
                <div class="music-info">
                    <h3>Song Title: "${music.title}"</h3>
                    <p><strong>Artist:</strong> ${music.artist}</p>
                    <p><strong>Duration:</strong> ${music.duration}</p>
                    <p><strong>Description:</strong> ${music.description}</p>
                    <p><strong>Genres:</strong> <ul>${genresList}</ul></p>
                </div>
            `;
            
            musicList.appendChild(musicItem);
        });
    })
    .catch(function(error) {
        console.error('Error fetching the data:', error);
    });

// Listen now button functionality
document.querySelectorAll('.listen-now').forEach(function(button) {
    button.addEventListener('click', function() {
        const song = this.getAttribute('data-song');
        const artist = this.getAttribute('data-artist');
        
        const musicPlayer = document.getElementById('music-player');
        const nowPlayingText = document.getElementById('now-playing-text');

        if (musicPlayer) {
            musicPlayer.querySelector('source').src = song;
            musicPlayer.load();
        }

        if (nowPlayingText) {
            nowPlayingText.textContent = "Now Playing: " + artist;
        }

        // Scroll to music player section
        document.getElementById('music-player-section').scrollIntoView({ behavior: 'smooth' });
    });
});
