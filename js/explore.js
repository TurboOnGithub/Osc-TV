// Elements
const objectShowSections = document.getElementById('objectShowSections');
const searchInput = document.getElementById('searchInput');

// Modal elements (ensure they exist in the HTML)
const playerModal = document.getElementById('playerModal');
const playerIframe = document.getElementById('player');
const closeModalButton = document.getElementById('closeModal');

// Data for Object Shows and Episodes
const objectShows = [
    {
        name: "Animatic Battle",
        episodes: [
            { id: "CjbUT7C5VY8", title: "Animatic Battle 1: M Is For Magic" },
            { id: "S5m9vxMLaVs", title: "Animatic Battle 2: Caffeination Day" },
            { id: "cc9vaq2QXkM", title: "Animatic Battle 3: Seeds For Suckers" }
        ]
    },
    {
        name: "ONE",
        episodes: [
            { id: "cE2hd1mKDZM", title: "ONE 1: Freefall" },
            { id: "gNMzzvNbhZo", title: "ONE 2: Just Tripped" },
            { id: "KJC7BiuwSp0", title: "ONE 3: Screwball" },
            { id: "riXSyHcyq6k", title: "ONE 4: Walls" },
            { id: "h_dxq61_G9c", title: "ONE 5: Rhetorical Molds" },
            { id: "jtD-Y_lmOqw", title: "ONE 6: La Salle D'attente" },
            { id: "BjGTlxIiXjs", title: "ONE 7: Starting Over" },
            { id: "yM0is0NKYf8", title: "ONE 8: The Plug Dream" },
            { id: "TyL7np2vXhs", title: "ONE 9: Scatterbrain" },
            { id: "OWHZ2zOgr9c", title: "ONE 10: Rattlepate" },
            { id: "0jq6sMEimPY", title: "ONE 11: Bradley" },
            { id: "ZqwpZ09mbmo", title: "ONE 12: Batch Two" },
            { id: "raX54aw-bgc", title: "ONE 13: Famous Last Words: It's No Code" },
            { id: "wrkbSEBm5Fk", title: "ONE 14: Universe Modulation" },
            { id: "GhqmJ-NdPEE", title: "ONE 15: A Toast" },
            { id: "deMihzUA4hY", title: "ONE 16: Bottle Episode" },
            { id: "Ew6Ho9sStZ0", title: "ONE 17: You Move, I Send" },
            { id: "8vRcG-ojfYc", title: "ONE 18: Self-Titled" }
        ]
    },
    {
        name: "BURNER",
        episodes: [
            { id: "tw-EVHk3btQ", title: "BURNER 1 - Introductions Are Not My Forte" },
            { id: "M8iuZNQqQq4", title: "BURNER 2 - It Was All Hidden" },
            { id: "8qhFJu6gMmg", title: "BURNER 3 - Trip to Invisible Town" },
            { id: "INbL59UT6d4", title: "BURNER 4 - Reunite The Internship" },
            { id: "LSI5trkX6B4", title: "BURNER 5 - Falling Into Place" },
        ]
    },
	    {
        name: "Object Fool",
        episodes: [
            { id: "X-sVrwbqIy8", title: "Object Fool 1: Haha You Thought It Was GGG HAHAHA" },
            { id: "xyrXEe4bNgU", title: "Object Fool 2: Hongar" },
            { id: "ICQ7xd-tuxE", title: "Object Fool 3: For Creepsington : )" },
            { id: "PPiq0OTj2rs", title: "Object Fool 4: I Spy..The Book Series" },
            { id: "Eb4OTVphEC4", title: "Object Fool 5: It Was Dub Who Joined" },
            { id: "KkRaJnpuPQM", title: "Object Fool 6: It Took Four Weeks To Rename This" },
            { id: "eKUQ2Ixgs2s", title: "Object Fool 7: Sucker For Seeds" },
            { id: "cRb73LWfJi4", title: "Object Fool 8: So Offended" },
            { id: "ZUhYuzKfHj8", title: "Object Fool 9: Negative Nancy" }
        ]
    },
	{
    name: "The Nightly Manor",
    episodes: [
        { id: "T1w9gjxShbo", title: "Nightly Manor 1: The Manor's Return" },
        { id: "N8njUkit0eE", title: "Nightly Manor 2: Through The Walls" },
        { id: "jblwlgIcQes", title: "Nightly Manor 3: Mysterious Guests" },
        { id: "fTar7dVLofw", title: "Nightly Manor 4: Beneath The Surface" },
        { id: "03dIz0y1DAc", title: "Nightly Manor 5: The Secrets Within" }
    ]
}

];

// Function to fetch video thumbnail
function getThumbnailUrl(videoId) {
    return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
}

// Function to render a section for an Object Show
function renderObjectShowSection(objectShow) {
    const section = document.createElement('div');
    section.className = 'object-show-section';

    // Title
    section.innerHTML = `
        <h2 class="object-show-title">${objectShow.name}</h2>
        <div class="video-grid">
            ${objectShow.episodes.map(episode => `
                <div class="video-card">
                    <img src="${getThumbnailUrl(episode.id)}" alt="${episode.title}">
                    <h3>${episode.title}</h3>
                    <!-- Watch on Site with modal -->
                    <button class="watch-button" data-id="${episode.id}">Watch Ad-Free</button>
                    <a href="https://www.youtube.com/watch?v=${episode.id}" target="_blank">Watch on YouTube</a>
                </div>
            `).join('')}
        </div>
    `;

    objectShowSections.appendChild(section);
}

// Function to display Object Shows
function displayObjectShows(filteredShows) {
    objectShowSections.innerHTML = ''; // Clear previous results
    filteredShows.forEach(show => renderObjectShowSection(show));
}

// Function to open the modal with the YouTube player
function openPlayer(videoId) {
    if (playerIframe) {
        playerIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        if (playerModal) {
            playerModal.style.display = 'flex';
        }
    }
}

// Function to close the modal
function closePlayer() {
    if (playerIframe) {
        playerIframe.src = '';  // Stop the video when closing the modal
    }
    if (playerModal) {
        playerModal.style.display = 'none';
    }
}

// Search functionality
function handleSearch() {
    const query = searchInput.value.toLowerCase();

    // Filter shows by name
    const filteredShows = objectShows.filter(show =>
        show.name.toLowerCase().includes(query)
    );

    displayObjectShows(filteredShows);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Ensure elements exist before manipulating them
    if (objectShowSections) {
        displayObjectShows(objectShows); // Show all object shows initially
    }

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Add event listener for Watch Ad-Free buttons
    if (objectShowSections) {
        objectShowSections.addEventListener('click', (e) => {
            // Only trigger if a watch-button is clicked
            if (e.target && e.target.classList.contains('watch-button')) {
                const videoId = e.target.getAttribute('data-id');
                openPlayer(videoId);  // Open the video in the modal
            }
        });
    }

    // Close modal when clicking the close button
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closePlayer);
    }
});
