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
        { id: "YQa2-DY7Y_Q", title: "BFDI 1a: Take the Plunge", og: true },
	{ id: "8LY0o_CgPR8", title: "BFDI 1b: Take the Plunge", og: true },
	{ id: "JfzEO9-Zlhw", title: "BFDI 2: Barriers and Pitfalls", og: true },
	{ id: "rhkgOXksmaY", title: "BFDI 3: Are You Smarter Than a Snowball?", og: true },
	{ id: "cdmVPHdpECM", title: "BFDI 4: Sweet Tooth", og: true },
	{ id: "xHI-iKm31us", title: "BFDI 5: Bridge Crossing", og: true },
	{ id: "6vGgsXO57bs", title: "BFDI 6: Power of Three", og: true },
	{ id: "Ze1p7bYXw0g", title: "BFDI 7: Puzzling Mysteries", og: true },
	{ id: "g0wCF04ddnw", title: "BFDI 8: Cycle of Life", og: true },
	{ id: "ylVsfdU5pxo", title: "BFDI 9: Insectophobe's Nightmare", og: true },
	{ id: "Eg5Ja23HfhY", title: "BFDI 10: Crybaby!", og: true },
	{ id: "yhkDgX2b7po", title: "BFDI 11: Lofty", og: true },
	{ id: "U4sp10HUI6Y", title: "BFDI 12: A Leg Up in the Race", og: true },
	{ id: "BQBmKvRd0B0", title: "BFDI 13: Don't Lose Your Marbles", og: true },
	{ id: "yZqh3l3-pTM", title: "BFDI 14: Half a Loaf Is Better Than None", og: true },
	{ id: "pf9FHBM0SLQ", title: "BFDI 15: Vomitaco", og: true },
	{ id: "nAKk0gm73K0", title: "BFDI 16: Bowling, Now with Explosions!", og: true },
	{ id: "Xmh7M7TXDRE", title: "BFDI 17: The Reveal", og: true },
	{ id: "x4K1xKHwp0E", title: "BFDI 18: Reveal Novum", og: true },
	{ id: "4pR6Y3_ahS8", title: "BFDI 19: Rescission", og: true },
	{ id: "J9udiROQchg", title: "BFDI 20: Gardening Hero", og: true },
	{ id: "6OfKK5Rt3fY", title: "BFDI 21: The Glistening", og: true },
	{ id: "GfFkiGgY6Pk", title: "BFDI 22: Don't Pierce My Flesh", og: true },
	{ id: "KLwgTM7HBhw", title: "BFDI 23: Hurtful!", og: true },
	{ id: "PigChYq_FrM", title: "BFDI 24: Insectophobe's Nightmare 2", og: true },
	{ id: "ye_HKD_C5o0", title: "BFDI 25: Return of the Hang Glider", og: true },
        { id: "2Jw0dhwmi3o", title: "IDFB 1 - Welcome Back", og: true },
        { id: "PfEa1zFDeNY", title: "Battle for B.F.D.I. - Season 4a Episodes 1 - 16", og: true },
        { id: "oav0TXI6bqc", title: "BFB 17: X Marks the Spot", og: true },
        { id: "8HATkU_F0iE", title: "BFB 18: Take the Tower", og: true },
        { id: "1YwDVqaszdU", title: "BFB 19: How Loe Can You Grow?", og: true },
        { id: "gu8nQFHHD9w", title: "BFB 20: A Taste of Space", og: true },
        { id: "fpnp3jRxRTs", title: "BFB 21: Let's Raid The Warehouse", og: true },
        { id: "wluh0U2wZuY", title: "BFB 22: Who Stole Donut's Diary?", og: true },
        { id: "UUwZw_y6kpQ", title: "BFB 23: Fashion For Your Face!", og: true },
        { id: "PRQP-UPy6cQ", title: "BFB 24: The Game Has Changed", og: true },
        { id: "uVIXVFZOxKQ", title: "BFB 25: The Tweested Temple", og: true },
        { id: "5qSmQuBma3c", title: "BFB 26: The Hidden Contestant", og: true },
        { id: "mHq89x2z2Lc", title: "BFB 27: Uprooting Everything", og: true },
        { id: "bVTyUTDSF9A", title: "BFB 28: B.F.B. = Back From Beginning", og: true },
        { id: "nVQqDcKAmzg", title: "BFB 29: SOS (Save Our Show)", og: true },
        { id: "KRUHJDB75IE", title: "BFB 30: Chapter Complete", og: true }
    ]
},
{
  "name": "Battle for Dream Island AGAIN",
  "episodes": [
    { id: "26FJTtLOu2s", title: "BFDIA 1: Yeah, Who? I Wanna Know", og: true},
    { id: "hsprecnxSsE", title: "BFDIA 2: Get Digging", og: true},
    { id: "dXUE7OFij_I", title: "BFDIA 3: Insectophobe's Nightmare 3", og: true},
    { id: "E174ogB49xs", title: "BFDIA 4: Zeeky Boogy Doog", og: true},
    { id: "4q77g4xo9ic", title: "BFDIA 5a: Get in the Van", og: true},
    { id: "emDpKog8v6w", title: "BFDIA 5b", og: true},
    { id: "YrsRLT3u0Cg", title: "BFDIA 5c: No More Snow!", og: true},
    { id: "kaFpfSHllOw", title: "BFDIA 5d: It's a Monster", og: true},
    { id: "RZB7nTzSl3g", title: "BFDIA 5e: The Long-lost Yoyle City", og: true},
    { id: "qGqde_06qj8", title: "BFDIA 6: Well Rested", og: true},
    { id: "kTcfak9R-ok", title: "BFDIA 7: Intruder Alert", og: true},
    { id: "kuh1rlW4OyQ", title: "BFDIA 8: Meaty", og: true},
    { id: "S2JV2nT_5FM", title: "BFDIA 9: Catch These Hands"},
    { id: "lcObRZOVdRM", title: "BFDIA 10: Taste the Sweetness"},
    { id: "qNKPTAEzXTw", title: "BFDIA 11: Lots of Mud"},
    { id: "S9NCSb6wAU8", title: "BFDIA 12: Insectophobe's Nightmare 4 (ft. Kevin MacLeod)"},
    { id: "T2NuWcd0t_U", title: "BFDIA 13: Well, Look Who It Is!"},
    { id: "RO3ujKZo96c", title: "BFDIA 14: PointyPointyPointy ♫"},
    { id: "kVCpKBP9hoo", title: "BFDIA 15: Spore Day"},
    { id: "8xdb6iS_uRY", title: "BFDIA 16: Respect to the Wicked"},
    { id: "WGgLMJsimE8", title: "BFDIA 17: Start the Shift"}
  ]
},
{
  "name": "The Power of Two",
  "episodes": [
    { id: "_LDFLwqXJXs", title: "BFDI:TPOT 1: You Know Those Buttons Don't Do Anything, Right?" },
    { id: "W7ojCVtiTUc", title: "BFDI:TPOT 2: The Worst Day of Black Hole's Life"},
    { id: "j5betOWzPpA", title: "BFDI:TPOT 3: Getting Puffball To Think About Rollercoasters"},
    { id: "p60LYcUJUXU", title: "BFDI:TPOT 4: Gardening Zero"},
    { id: "Famz84APAXY", title: "BFDI:TPOT 5: Fishes and Dishes"},
    { id: "yjuwsaz7x4o", title: "BFDI:TPOT 6: The Great Goikian Bake-Off"},
    { id: "3lLlhECn6H8", title: "BFDI:TPOT 7: The Seven Wonders of Goiky"},
    { id: "xXvSiWCCvhQ", title: "BFDI:TPOT 8: Balancing P.A.C.T."},
    { id: "Mv8EPmY3HNE", title: "BFDI:TPOT 9: Outbreak At Stake"},
    { id: "VjZXR9MM_P8", title: "BFDI:TPOT 10: Oneirophobe's Nightmare"},
    { id: "5UqZqXhaRQw", title: "BFDI:TPOT 11: Out Of The Blue"},
    { id: "1nxS-KYiDmk", title: "BFDI:TPOT 12: What’s Up Bell’s String?"},
    { id: "OEuYHlSMXMM", title: "BFDI:TPOT 13: Category One"},
    { id: "bpsoMEaNoVE", title: "BFDI:TPOT 14: I SAID CAREFUL!!!"},
    { id: "CHKP0oghspg", title: "BFDI:TPOT 15: Seasonal Shift"}
  ]
},
{
  "name": "Inanimate Insanity",
  "episodes": [
    { id: "lcGtU2eYeyU", title: "“The Crappy Cliff” | Inanimate Insanity S1E1", og: true },
    { id: "iHQWL7CV4Sk", title: "“A Lemony Lesson” | Inanimate Insanity S1E2", og: true },
    { id: "8RmAALsq48k", title: "“The Arena of Death” | Inanimate Insanity S1E3", og: true },
    { id: "8k7V0Z9DQbs", title: "“One-Shot Wonder” | Inanimate Insanity S1E4", og: true },
    { id: "IrG-bBk2WGc", title: "“The Stacker” | Inanimate Insanity S1E5", og: true },
    { id: "Sz9wBEjMCT0", title: "“War De Guacamole” | Inanimate Insanity S1E6", og: true },
    { id: "dZ9N0UGHheM", title: "“Sugar Rush” | Inanimate Insanity S1E7", og: true },
    { id: "e9fBRfm9Z0w", title: "“4Seeing the Future” | Inanimate Insanity S1E8", og: true },
    { id: "1qjl2sKUIpM", title: "“The Snowdown” | Inanimate Insanity S1E9", og: true },
    { id: "H_KyjJaEz3s", title: "“Double Digit Desert” | Inanimate Insanity S1E10", og: true },
    { id: "eo6UA1XST70", title: "“Aquatic Conflict” | Inanimate Insanity S1E11", og: true },
    { id: "x1OL_VQr874", title: "“Crappy Anniversary” | Inanimate Insanity S1E12", og: true },
    { id: "vVVbF1Hzx3k", title: "“Inanimate Smackdown” | Inanimate Insanity S1E13", og: true },
    { id: "_XCB0m0RzUc", title: "“The Great Escape” | Inanimate Insanity S1E14", og: true },
    { id: "U0Tz8-C5xyE", title: "“The Tile Divide” | Inanimate Insanity S1E15", og: true },
    { id: "IHi-li1Vr-g", title: "“The Penultimate Poll” | Inanimate Insanity S1E16", og: true },
    { id: "vFHoGWZPa3U", title: "“Journey Through Memory Lane” (Pt. 1) | Inanimate Insanity S1E17", og: true },
    { id: "vEOd2TNtO3A", title: "“Journey Through Memory Lane” (Pt. 2) | Inanimate Insanity S1E18", og: true },
    { id: "xEOUmwUB_cE", title: "“Breaking the Ice” | Inanimate Insanity S2E1", og: true },
    { id: "iHQWL7CV4Sk", title: "“Marsh on Mars” | Inanimate Insanity S2E2", og: true },
    { id: "nrzRpAZibVc", title: "“Tri Your Best” | Inanimate Insanity S2E3", og: true },
    { id: "l1-EsJtvm5w", title: "“Cooking for the Grater Good” | Inanimate Insanity S2E4", og: true },
    { id: "5loEcrE1IvQ", title: "“A Kick in the Right Direction” | Inanimate Insanity S2E5", og: true },
    { id: "dZft9ZHXWcE", title: "“Let Er’ R.I.P.” | Inanimate Insanity S2E6", og: true },
    { id: "scwqoN66DU0", title: "“Everything’s A-OJ” | Inanimate Insanity S2E7", og: true },
    { id: "omKX_3r4lxQ", title: "“Theft and Battery” | Inanimate Insanity S2E8", og: true },
    { id: "1qjl2sKUIpM", title: "“Rain On Your Charade” | Inanimate Insanity S2E9", og: true },
    { id: "H_KyjJaEz3s", title: "“Mazed and Confused” | Inanimate Insanity S2E10", og: true },
    { id: "IDlULbpnKA0", title: "“Kick the Bucket” | Inanimate Insanity S2E11" },
    { id: "0vh5szkAdkY", title: "“Alternate Reality Show” | Inanimate Insanity S2E12" },
    { id: "ayHy91TVX1c", title: "“Mine Your Own Business” | Inanimate Insanity S2E13" },
    { id: "-Nom7K4Rqi0", title: "“Hatching the Plan” | Inanimate Insanity S2E14" },
    { id: "hK4Va5Tgrjs", title: "“Truth or Flare” | Inanimate Insanity S2E15" },
    { id: "WKvS5_h3dQs", title: "“The Reality of the Situation” | Inanimate Insanity S2E16" },
    { id: "7etjFwAeKcA", title: "“Through No Choice of Your Own” | Inanimate Insanity S2E17" },
    { id: "xSeVhTmLHHM", title: "“Objects in Mirror” | Inanimate Insanity S2E18" }
]
},
	{	
        "name": "Animatic Battle",
        "episodes": [
            { id: "CjbUT7C5VY8", title: "Animatic Battle 1: M Is For Magic" },
            { id: "S5m9vxMLaVs", title: "Animatic Battle 2: Caffeination Day" },
            { id: "cc9vaq2QXkM", title: "Animatic Battle 3: Seeds For Suckers" }
        ]
    },
    {
        "name": "ONE",
        "episodes": [
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
        "name": "BURNER",
        "episodes": [
            { id: "tw-EVHk3btQ", title: "BURNER 1 - Introductions Are Not My Forte" },
            { id: "M8iuZNQqQq4", title: "BURNER 2 - It Was All Hidden" },
            { id: "8qhFJu6gMmg", title: "BURNER 3 - Trip to Invisible Town" },
            { id: "INbL59UT6d4", title: "BURNER 4 - Reunite The Internship" },
            { id: "LSI5trkX6B4", title: "BURNER 5 - Falling Into Place" },
        ]
    },
    {
        "name": "Object Fool",
        "episodes": [
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
        "name": "The Nightly Manor",
        "episodes": [
            { id: "T1w9gjxShbo", title: "Nightly Manor 1: The Manor's Return" },
            { id: "N8njUkit0eE", title: "Nightly Manor 2: Through The Walls" },
            { id: "jblwlgIcQes", title: "Nightly Manor 3: Mysterious Guests" },
            { id: "fTar7dVLofw", title: "Nightly Manor 4: Beneath The Surface" },
            { id: "03dIz0y1DAc", title: "Nightly Manor 5: The Secrets Within" }
        ]
    },
	{
        "name": "IT'S TIME FOR THE",
        "episodes": [
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
        "name": "Strive for the Hamburger",
        "episodes": [
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
        "name": "CONCEPT",
        "episodes": [
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
        "name": "LOVE OF THE S*N",
        "episodes": [
            { id: "rGk4w4EFbbw", title: "LOVE OF THE S*N 1A: YOU ONLY LIVE TWICE" },
            { id: "OoFlDmIA19Y", title: "LOVE OF THE S*N 1B: IN NATURE'S HEAD" },
            { id: "SMqBVG4bInA", title: "LOVE OF THE S*N 1C: EXTRICATE THE FEATHERED" }
	]
	},
	{
        "name": "Object Ligma",
       	"episodes": [
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
	{
        "name": "Object Towel (+Object Towel Again)",
        "episodes": [
		    { id: "zkL3zSZOCrg", title: "[canceled]Object towel episode 1 'A trip to space'." },
            { id: "_TMirgtybcI", title: "[canceled]Object towel episode 2 'I wonder what's for dinner'" },
            { id: "zkL3zSZOCrg", title: "OTA 1: here we go again!" },
            { id: "ocWMBNdI0PQ", title: "OTA 2: high like a diamond" },
            { id: "EjR95BujGE8", title: "OTA 3: a fishy situation" },
			{ id: "lPlxsAJBqyg", title: "OTA 4: a very EGGciting episode!" },
            { id: "RVh-5V_5MW0", title: "OTA 5: get popping!" },
            { id: "o2rKmuUoMT0", title: "OTA 6: Game on!" },
			{ id: "0uN4UCvwqkE", title: "OTA 7: Jump baby jump, yet again!" },
            { id: "c3sk3Mn8r0k", title: "OTA 8: Block and roll" },
            { id: "EPyg3Gc_P_w", title: "OTA 9: The great escape!!" },
			{ id: "haLZP4UcZMs", title: "OTA 10: The Missing F̵̨͔̬̗̝̣̼͖͎͗̈́̒̆̆̿͊̿̈́̐̋͑̅̆͂ͅŗ̷̛͕̫͉̐̇̆̑̂͘͠ȉ̵̕e̶̛̘̿̔̂̾̇͗̀̈̋̈́̊́̅͝nd̷̛̜͉͈͈͐̋̄̍̑̔̅s." },
            { id: "NJrr_4ib6x0", title: "OTA 11: Feel the Steel" },
			{ id: "wfZqzy16KlI", title: "OTA 12: bombs away!" },
			{ id: "hgdX3tU9dzA", title: "OTA 13A: A Blast From The Past!!!" },
            { id: "KbeuD9kjQGc", title: "OTA 13B: infiltrating the fortress" },
            { id: "knQ1TeV_ztE", title: "OTA 14: The floor is a little too hot for my liking!" },
			{ id: "GrmBD9bSL4M", title: "OTA 15: Honey, We Have Guests!" },
            { id: "MkxqoM_9t24", title: "OTA 16: The Finale?" },
			{ id: "Y3-Ogmn3Ipk", title: "OTA 17: The true finale." }
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
		    ${episode.og ? '<div class="og-badge">OG</div>' : ''}
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

// white padded room is funny
