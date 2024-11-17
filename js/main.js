// Elements
const videosContainer = document.getElementById('videos');
const playerModal = document.getElementById('playerModal');
const playerIframe = document.getElementById('player');
const closeModalButton = document.getElementById('closeModal');

// Your curated list of YouTube video IDs and titles
const videos = [
    { id: "CjbUT7C5VY8", title: "Animatic Battle 1: M Is For Magic" },
    { id: "S5m9vxMLaVs", title: "Animatic Battle 2: Caffeination Day" },
    { id: "cc9vaq2QXkM", title: "Animatic Battle 3: Seeds For Suckers" }
];

// Function to fetch video thumbnail from YouTube
function getThumbnailUrl(videoId) {
    return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
}

// Function to render video cards
function renderVideoCard({ id, title }) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <img src="${getThumbnailUrl(id)}" alt="${title}">
        <div class="info">
            <h3>${title}</h3>
            <button class="watch-button" data-id="${id}">Watch Ad-Free</button>
            <a href="https://www.youtube.com/watch?v=${id}" target="_blank">Watch on YouTube</a>
        </div>
    `;
    videosContainer.appendChild(card);
}

// Open modal and load YouTube player
function openPlayer(videoId) {
    playerIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    playerModal.style.display = 'flex';
}

// Close modal
function closePlayer() {
    playerIframe.src = '';
    playerModal.style.display = 'none';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    videos.forEach(video => renderVideoCard(video));

    videosContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('watch-button')) {
            const videoId = e.target.getAttribute('data-id');
            openPlayer(videoId);
        }
    });

    closeModalButton.addEventListener('click', closePlayer);
});
