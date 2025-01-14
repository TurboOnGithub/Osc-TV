// Elements
const objectShowSections = document.getElementById('objectShowSections');
const searchInput = document.getElementById('searchInput');
const clearSearchButton = document.getElementById('clearSearch'); // New clear button
const playerModal = document.getElementById('playerModal');
const playerIframe = document.getElementById('player');
const closeModalButton = document.getElementById('closeModal');

// Data for Object Shows and Episodes
const objectShows = [
    {
        name: "ObjectCon 2024",
        episodes: [
            { id: "V3jEkZA1h6M", title: "ObjectCon 2024 | Day 1", new: false },
            { id: "EqKkYkhWhSk", title: "ObjectCon 2024 | Day 2", new: false },
            { id: "DQI43HwEIHk", title: "ObjectCon 2024 | Day 3", new: true },
        ]
    }
];

// Function to get a YouTube thumbnail URL
const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

// Function to render an Object Show section
const renderObjectShowSection = (objectShow) => {
    const section = document.createElement('div');
    section.className = 'object-show-section';

    section.innerHTML = `
        <h2 class="object-show-title">${objectShow.name}</h2>
        <div class="video-grid">
            ${objectShow.episodes.map(episode => `
                <div class="video-card">
                    <img src="${getThumbnailUrl(episode.id)}" alt="${episode.title} Thumbnail" loading="lazy">
                    ${episode.new ? '<div class="new-badge">NEW</div>' : ''}
                    <h3>${episode.title}</h3>
                    <button class="watch-button" data-id="${episode.id}">Watch On-site</button>
                    <a href="https://www.youtube.com/watch?v=${episode.id}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                </div>
            `).join('')}
        </div>
    `;

    return section;
};

// Function to display all Object Shows
const displayObjectShows = (shows) => {
    objectShowSections.innerHTML = ''; // Clear previous content
    if (shows.length === 0) {
        objectShowSections.innerHTML = '<p>No results found.</p>'; // Display message if no results
        return;
    }
    shows.forEach(show => {
        const section = renderObjectShowSection(show);
        objectShowSections.appendChild(section);
    });
};

// Function to open the modal
const openPlayer = (videoId) => {
    if (playerIframe) {
        playerIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        if (playerModal) playerModal.style.display = 'flex';
    }
};

// Function to close the modal
const closePlayer = () => {
    if (playerIframe) playerIframe.src = ''; // Stop video
    if (playerModal) playerModal.style.display = 'none';
};

// Function to handle search input
const handleSearch = () => {
    const query = searchInput.value.toLowerCase();
    const filteredShows = objectShows
        .map(show => ({
            ...show,
            episodes: show.episodes.filter(episode =>
                show.name.toLowerCase().includes(query) ||
                episode.title.toLowerCase().includes(query)
            )
        }))
        .filter(show => show.episodes.length > 0);

    displayObjectShows(filteredShows);
};

// Function to clear search input
const clearSearch = () => {
    if (searchInput) {
        searchInput.value = '';
        displayObjectShows(objectShows);
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    if (objectShowSections) displayObjectShows(objectShows); // Display all shows on load
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (clearSearchButton) clearSearchButton.addEventListener('click', clearSearch);

    // Event delegation for video buttons
    objectShowSections.addEventListener('click', (event) => {
        if (event.target.classList.contains('watch-button')) {
            const videoId = event.target.getAttribute('data-id');
            openPlayer(videoId);
        }
    });

    // Close modal button
    if (closeModalButton) closeModalButton.addEventListener('click', closePlayer);

    // Close modal on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closePlayer();
    });
});
