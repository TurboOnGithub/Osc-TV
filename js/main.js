// Elements
const videosContainer = document.getElementById('videos');
const playerModal = document.getElementById('playerModal');
const playerIframe = document.getElementById('player');
const closeModalButton = document.getElementById('closeModal');

// List of YouTube videos with IDs and titles
const videos = [
            { id: "1kHmqa0AwE0", title: "Object Ligma - Episode 1: 'large ckae at steklwrui'" },
            { id: "JGE3jQxoaxQ", title: "Object Ligma - Episode 2: 'sans underthe table'" },
            { id: "4-YhqzFcEXg", title: "Object Ligma - Episode 3: 'improved audio'" },
			{ id: "bfMp2mMCY1A", title: "Object Ligma - Episode 4: 'old friendly'" },
            { id: "e1W17bXhbkA", title: "Object Ligma - Episode 5: 'The Returned'" },
            { id: "miUV8xv7c70", title: "Object Ligma - Episode 6: 'Hello Paul'" },
			{ id: "Qq2TLaEhBwE", title: "Object Ligma - Episode 7: 'We Got a Little Laaaaazy!'" },
            { id: "LLeORNNafNs", title: "Object Ligma - Episode 8: 'The Only Good Object Show To Come Out In September So Far Am I Right Guy'" },
            { id: "eZdEerDuzA4", title: "Object Ligma - Episode 9: 'Escape from Scary Legma'" },
			{ id: "c9GjNoTCxTA", title: "Object Ligma - Episode 10: 'Finding the Secret'" },
            { id: "MwfulnFDeh4", title: "Object Ligma - Episode 11: 'A Change in the Game...'" }
	]

/**
 * Fetch YouTube thumbnail URL based on video ID.
 * @param {string} videoId - The ID of the YouTube video.
 * @returns {string} Thumbnail URL.
 */
const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

/**
 * Create and render a single video card.
 * @param {Object} video - Video object containing ID and title.
 */
const renderVideoCard = ({ id, title }) => {
    const card = document.createElement('div');
    card.classList.add('video-card');

    card.innerHTML = `
        <img src="${getThumbnailUrl(id)}" alt="${title}" class="video-thumbnail">
        <div class="info">
            <h3 class="video-title">${title}</h3>
            <button class="watch-button" data-id="${id}">Watch On-site</button>
            <a href="https://www.youtube.com/watch?v=${id}" target="_blank" class="youtube-link">Watch on YouTube</a>
        </div>
    `;

    videosContainer.appendChild(card);
};

/**
 * Open the video player modal and load the YouTube video.
 * @param {string} videoId - The ID of the YouTube video.
 */
const openPlayer = (videoId) => {
    if (!videoId) return; // Guard clause in case of missing videoId
    playerIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    playerModal.style.display = 'flex';
};

/**
 * Close the video player modal and stop the video.
 */
const closePlayer = () => {
    playerIframe.src = ''; // Stop video playback
    playerModal.style.display = 'none';
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Render video cards on page load
    videos.forEach(renderVideoCard);

    // Delegate click events for watch buttons
    videosContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.watch-button');
        if (button) {
            const videoId = button.dataset.id;
            openPlayer(videoId);
        }
    });

    // Close modal on close button click
    closeModalButton.addEventListener('click', closePlayer);

    // Close modal when clicking outside the modal content
    playerModal.addEventListener('click', (e) => {
        if (e.target === playerModal) {
            closePlayer();
        }
    });
});
