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
        name: "Battle for Dream Island",
        episodes: [
            { id: "H_49oVhJEpM", title: "Battle for Dream Island - Season 1 All Episodes" },
            { id: "2Jw0dhwmi3o", title: "IDFB 1 - Welcome Back" },
            { id: "PfEa1zFDeNY", title: "Battle for B.F.D.I. - Season 4a Episodes 1 - 16" },
            { id: "oav0TXI6bqc", title: "BFB 17: X Marks the Spot" },
			{ id: "8HATkU_F0iE", title: "BFB 18: Take the Tower" },
            { id: "1YwDVqaszdU", title: "BFB 19: How Loe Can You Grow?" },
			{ id: "gu8nQFHHD9w", title: "BFB 20: A Taste of Space" },
            { id: "fpnp3jRxRTs", title: "BFB 21: Let's Raid The Warehouse" },
			{ id: "wluh0U2wZuY", title: "BFB 22: Who Stole Donut's Diary?" },
            { id: "UUwZw_y6kpQ", title: "BFB 23: Fashion For Your Face!" },
            { id: "PRQP-UPy6cQ", title: "BFB 24: The Game Has Changed" },
            { id: "uVIXVFZOxKQ", title: "BFB 25: The Tweested Temple" },
            { id: "5qSmQuBma3c", title: "BFB 26: The Hidden Contestant" },
			{ id: "mHq89x2z2Lc", title: "BFB 27: Uprooting Everything" },
            { id: "bVTyUTDSF9A", title: "BFB 28: B.F.B. = Back From Beginning" },
			{ id: "nVQqDcKAmzg", title: "BFB 29: SOS (Save Our Show)" },
            { id: "KRUHJDB75IE", title: "BFB 30: Chapter Complete" }
        ]
    },
	    {
        name: "Battle for Dream Island AGAIN",
        episodes: [
            { id: "26FJTtLOu2s", title: "BFDIA 1: Yeah, Who? I Wanna Know" },
            { id: "hsprecnxSsE", title: "BFDIA 2: Get Digging" },
            { id: "dXUE7OFij_I", title: "BFDIA 3: Insectophobe's Nightmare 3" },
            { id: "E174ogB49xs", title: "BFDIA 4: Zeeky Boogy Doog" },
			{ id: "4q77g4xo9ic", title: "BFDIA 5a: Get in the Van" },
            { id: "emDpKog8v6w", title: "BFDIA 5b" },
			{ id: "YrsRLT3u0Cg", title: "BFDIA 5c: No More Snow!" },
            { id: "kaFpfSHllOw", title: "BFDIA 5d: It's a Monster" },
			{ id: "RZB7nTzSl3g", title: "BFDIA 5e: The Long-lost Yoyle City" },
            { id: "qGqde_06qj8", title: "BFDIA 6: Well Rested" },
            { id: "kTcfak9R-ok", title: "BFDIA 7: Intruder Alert" },
            { id: "kuh1rlW4OyQ", title: "BFDIA 8: Meaty" },
            { id: "S2JV2nT_5FM", title: "BFDIA 9: Catch These Hands" },
			{ id: "lcObRZOVdRM", title: "BFDIA 10: Taste the Sweetness" },
            { id: "qNKPTAEzXTw", title: "BFDIA 11: Lots of Mud" },
			{ id: "S9NCSb6wAU8", title: "BFDIA 12: Insectophobe's Nightmare 4 (ft. Kevin MacLeod)" },
            { id: "T2NuWcd0t_U", title: "BFDIA 13: Well, Look Who It Is!" },
			{ id: "RO3ujKZo96c", title: "BFDIA 14: PointyPointyPointy ♫" },
            { id: "kVCpKBP9hoo", title: "BFDIA 15: Spore Day" }
        ]
    },
	{
        name: "The Power of Two",
        episodes: [
	        { id: "_LDFLwqXJXs", title: "BFDI:TPOT 1: You Know Those Buttons Don't Do Anything, Right?" },
			{ id: "W7ojCVtiTUc", title: "BFDI:TPOT 2: The Worst Day of Black Hole's Life" },
            { id: "j5betOWzPpA", title: "BFDI:TPOT 3: Getting Puffball To Think About Rollercoasters" },
			{ id: "p60LYcUJUXU", title: "BFDI:TPOT 4: Gardening Zero" },
            { id: "Famz84APAXY", title: "BFDI:TPOT 5: Fishes and Dishes" },
			{ id: "yjuwsaz7x4o", title: "BFDI:TPOT 6: The Great Goikian Bake-Off" },
            { id: "3lLlhECn6H8", title: "BFDI:TPOT 7: The Seven Wonders of Goiky" },
            { id: "xXvSiWCCvhQ", title: "BFDI:TPOT 8: Balancing P.A.C.T." },
            { id: "Mv8EPmY3HNE", title: "BFDI:TPOT 9: Outbreak At Stake" },
            { id: "VjZXR9MM_P8", title: "BFDI:TPOT 10: Oneirophobe's Nightmare" },
			{ id: "5UqZqXhaRQw", title: "BFDI:TPOT 11: Out Of The Blue" },
            { id: "1nxS-KYiDmk", title: "BFDI:TPOT 12: What’s Up Bell’s String?" },
			{ id: "OEuYHlSMXMM", title: "BFDI:TPOT 13: Category One" },
            { id: "bpsoMEaNoVE", title: "BFDI:TPOT 14: I SAID CAREFUL!!!" }
		]
    },
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
    },
	{
        name: "IT'S TIME FOR THE",
        episodes: [
            { id: "kvHc3e87Bfw", title: "IT'S TIME FOR THE [1:00] - Who's Jason??" },
            { id: "ZkZt5cmF3V4", title: "IT’S TIME FOR THE [2:00] - Best Source For Weather Information" },
            { id: "PXC9iKRvbbQ", title: "IT’S TIME FOR THE [3:00] - Next" },
            { id: "wAL4B7EGjX8", title: "IT’S TIME FOR THE [4:00] - Do NOT Use The Popcorn Button" },
            { id: "EtecN-s2qCg", title: "IT’S TIME FOR THE [5:00] - Fifty-Seven Tears Of The Star" },
			{ id: "Vco-wRzDoH4", title: "IT’S TIME FOR THE [6:00] - Will You Ever Know?" },
            { id: "qw0Rt9R_4ak", title: "IT’S TIME FOR THE [7:00] - Stop and Look. Realize." }
        ]
    },
	{
        name: "Strive for the Hamburger",
        episodes: [
            { id: "XNszXyXxkIM", title: "Strive for the Ham Burger - Episode 1: 'Our First Epskdpeo'" },
            { id: "o3GWJaby7vY", title: "Strive for the Ham Burger - Episode 2: 'Sky High; Easy as Pie'" },
            { id: "hZAuvM5qxj0", title: "Strive for the Ham Burger - Episode 3: 'Vacuuming in the Backyard Pt. ii'" },
            { id: "ePjpU4utvUY", title: "Strive for the Ham Burger - Episode 4: 'Time for Episode Strive Hamburger'" },
            { id: "VLthLmYw6fo", title: "Strive for the Ham Burger - Episode 5: 'Watch Out Or Else Your Gonna Fall'" },
			{ id: "SVd6yG-DmAY", title: "Strive for the Ham Burger - Episode 6: 'Two Dogs Dancin' to Represent Me and My Friend'" },
            { id: "MJ3f115qIYo", title: "Strive for the Ham Burger - Episode 7: 'Shmurger 'Cross the Way'" },
			{ id: "8bfckXRV7Qs", title: "Strive for the Ham Burger - Episode 8: 'Rainy Day'" },
            { id: "xIjnCZk9Frc", title: "Strive for the Ham Burger - Episode 9: 'Finally the Finally'" }
        ]
    },
	{
        name: "CONCEPT",
        episodes: [
            { id: "A3qRZ25yVNo", title: "CONCEPT - Episode 1 - Getting Power to Explode" },
            { id: "NzvaPV9Hk9Q", title: "CONCEPT - Episode 2 - Never Buy Sponges" },
            { id: "MQNL4Z1dJ2I", title: "CONCEPT - Episode 3 - I Can Help!" },
            { id: "whQPEExAbbo", title: "CONCEPT - Episode 4 - Caramelaphobe’s Nightmare" },
            { id: "Qtn9n_cz66s", title: "CONCEPT - Episode 5 - Banana's Requiem" },
			{ id: "eP-4g8V_d0I", title: "CONCEPT - Episode 6 - One Must Imagine Candy Cane Happy." },
            { id: "61udnqMofc4", title: "CONCEPT - Episode 7 - Bed's Way" }
        ]
    },
	{
        name: "LOVE OF THE S*N",
        episodes: [
            { id: "rGk4w4EFbbw", title: "LOVE OF THE S*N 1A: YOU ONLY LIVE TWICE" },
            { id: "OoFlDmIA19Y", title: "LOVE OF THE S*N 1B: IN NATURE'S HEAD" },
            { id: "SMqBVG4bInA", title: "LOVE OF THE S*N 1C: EXTRICATE THE FEATHERED" }
	]
	},
	{
        name: "Object Ligma",
        episodes: [
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
	},
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
