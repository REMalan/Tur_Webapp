const npcs = {
  families: {
    "Harven's Line (Fisherfolk)": [
      { name: "Jorin, son of Harven", role: "Master fisherman — weathered hands and a knack for reading the river like an open book", age: 46, voice: "Low, steady", location: "Riverfront" },
      { name: "Marra, daughter of Selin", role: "Net weaver — always humming as she repairs nets, quick with a joke", age: 44, voice: "Clipped", location: "Riverfront" },
      { name: "Tallen, son of Jorin", role: "Apprentice fisherman — eager eyes, often seen chasing gulls along the shore", age: 17, voice: "Eager", location: "Riverfront" },
      { name: "Sella, daughter of Jorin", role: "Fish cleaner / gossip — sharp-tongued, knows every secret the river carries", age: 14, voice: "Sharp", location: "Riverfront" },
      { name: "Bren, son of Jorin", role: "Child — shy, with a habit of hiding behind barrels watching the boats", age: 9, voice: "Shy", location: "Riverfront" }
    ],
    "Darrin's Line (Grain Farmers)": [
      { name: "Darrin, son of Welf", role: "Farmer — hands calloused from plowing, hums old tunes while tending the fields", age: 49, voice: "Rough", location: "Fields" },
      { name: "Elra, daughter of Mera", role: "Grain storage — organizes the granary meticulously, her laughter rare but warm", age: 45, voice: "Warm but firm", location: "Granary" },
      { name: "Pella, daughter of Darrin", role: "Field hand — gentle, often found talking to the wheat as she works", age: 20, voice: "Soft", location: "Fields" },
      { name: "Jon, son of Darrin", role: "Field worker — loud and boisterous, enjoys racing the oxen", age: 16, voice: "Loud", location: "Fields" },
      { name: "Tilli, daughter of Darrin", role: "Child — raspy voice from running barefoot through the furrows", age: 12, voice: "Raspy", location: "Fields" }
    ],
    "Fenrick's Line (Millers)": [
      { name: "Olda, daughter of Fren", role: "Miller — deep, steady, and always covered in flour dust", age: 58, voice: "Deep, steady", location: "Watermill" },
      { name: "Rusk, son of Olda", role: "Mill mechanic — distracted yet inventive, tinkers with gears for fun", age: 26, voice: "Distracted", location: "Watermill" },
      { name: "Maren, daughter of Olda", role: "Ledger keeper — quiet, sharp-eyed, keeps track of every sack of grain", age: 24, voice: "Quiet", location: "Watermill" }
    ],
    "Brannok's Line (Boatwrights)": [
      { name: "Harl, son of Brannok", role: "Boatbuilder — gruff but fair, knows wood as if it were family", age: 43, voice: "Gruff", location: "Boatyard" },
      { name: "Veena, daughter of Orra", role: "Carver — loud, hearty laughter echoes across the yard as she shapes figureheads", age: 41, voice: "Loud & hearty", location: "Boatyard" },
      { name: "Edo, son of Harl", role: "Apprentice carpenter — calm, always measuring twice, cutting once", age: 18, voice: "Calm", location: "Boatyard" },
      { name: "Lysa, daughter of Harl", role: "Woodshaper — soft-spoken, sketches boats in the sand when bored", age: 15, voice: "Soft", location: "Boatyard" },
      { name: "Noll, son of Veena", role: "Child — chirpy, constantly climbing the stacks of timber", age: 6, voice: "Chirpy", location: "Boatyard" }
    ],
    "Sennen's Line (Livestock & Dairy)": [
      { name: "Sennen, son of Talb", role: "Herdsman — slow and patient, whistles to the cows as he walks", age: 52, voice: "Slow", location: "Pastures" },
      { name: "Bira, daughter of Sora", role: "Dairy — warm and nurturing, always tasting the cheeses with a discerning smile", age: 49, voice: "Warm", location: "Dairy" },
      { name: "Orin, son of Sennen", role: "Assistant herder — quiet, watches the animals more than people", age: 13, voice: "Quiet", location: "Pastures" }
    ],
    "Levard's Line (Vegetable Farmers)": [
      { name: "Levard, son of Pell", role: "Vegetable farmer — jokey and playful, hides surprises in the soil for children", age: 34, voice: "Jokey", location: "Gardens" },
      { name: "Rissa, daughter of Henn", role: "Herbalist — calm, often speaking to herbs as if they listen", age: 33, voice: "Calm", location: "Herb plot" },
      { name: "Fenn, son of Levard", role: "Child — tiny and curious, sneaks tastes of ripe vegetables", age: 5, voice: "Tiny", location: "Gardens" }
    ],
    "Bakk's Line (Ferry & Guides)": [
      { name: "Bakk, son of Yorn", role: "Ferryman — dry humor, guides boats with a steady hand", age: 39, voice: "Dry", location: "Ferry" },
      { name: "Dena, daughter of Kave", role: "Smoked fish cook — crisp and precise, smoke curls from her hut constantly", age: 36, voice: "Crisp", location: "Smoker Hut" },
      { name: "Garrin, son of Bakk", role: "Ferry helper — smooth and confident, loves the river currents", age: 19, voice: "Smooth", location: "Ferry" },
      { name: "Yula, daughter of Bakk", role: "Child — loud, always chasing the birds along the ferry docks", age: 8, voice: "Loud", location: "Ferry" }
    ],
    "Tara's Line (Weavers & Ropes)": [
      { name: "Tara, daughter of Hannet", role: "Weaver — gentle, creates colorful patterns inspired by village life", age: 38, voice: "Gentle", location: "Weaver's Hut" },
      { name: "Hend, son of Ruld", role: "Net repair — impatient, mutters under his breath as he knots nets", age: 40, voice: "Impatient", location: "Weaver's Hut" },
      { name: "Ili, daughter of Tara", role: "Child — sing-song voice, often weaving tiny scraps into dolls", age: 5, voice: "Sing-song", location: "Weaver's Hut" }
    ],
    "Redd's Line (Hunters & Trappers)": [
      { name: "Redd, son of Malor", role: "Hunter — blunt, rarely smiles, tracks creatures like a shadow", age: 47, voice: "Blunt", location: "Outskirts" },
      { name: "Fara, daughter of Redd", role: "Tanner — practical, hands always stained with leather and bark", age: 22, voice: "Practical", location: "Tannery" },
      { name: "Kall, son of Redd", role: "Trapper — curious, always testing traps in the woods", age: 11, voice: "Curious", location: "Outskirts" }
    ],
    "Hessan's Line (Tavern Keepers)": [
      { name: "Hessan, son of Kole", role: "Tavern owner — boisterous, stories grow taller with each telling", age: 55, voice: "Boisterous", location: "The Tur Bend" },
      { name: "Mira, daughter of Brenna", role: "Innkeeper & brewer — businesslike, aroma of fresh bread follows her", age: 48, voice: "Businesslike", location: "The Tur Bend" },
      { name: "Dorr, son of Hessan", role: "Server & musician — musical, strums lute as he takes orders", age: 17, voice: "Musical", location: "The Tur Bend" },
      { name: "Rill, daughter of Hessan", role: "Child — chatty, hides behind barrels and peeks at strangers", age: 7, voice: "Chatty", location: "The Tur Bend" }
    ],
    "Roth's Line (Merchant & Trade)": [
      { name: "Roth, son of Dellen", role: "Merchant — sly, eyes every coin and counts twice", age: 50, voice: "Sly", location: "Market Stall" },
      { name: "Helna, daughter of Ruel", role: "Accountant — quiet, keeps books meticulously, rarely seen without ledger", age: 46, voice: "Quiet", location: "Market Stall" }
    ],
    "Eldren's Line (Elders & Healers)": [
      { name: "Eldren, son of Vora", role: "Village Elder / Healer — wise, often seen guiding lost travelers or children", age: 70, voice: "Wise", location: "Town Center" }
    ],
    "Wardens & Watch (Militia)": [
      { name: "Kron, captain", role: "Watch Captain — gravely, commands respect and sharp eyes", age: 51, voice: "Gravely", location: "Watch Post" },
      { name: "Sira, lieutenant", role: "Guard — sharp, quick, always patrolling with keen gaze", age: 34, voice: "Sharp", location: "Watch Post" }
    ],
    "Stonemasons & Potters": [
      { name: "Toren, mason", role: "Stoneworker — gruff, chisels stone with pride and strength", age: 47, voice: "Gruff", location: "Stone Yard" },
      { name: "Mina, potter", role: "Pottery — soft, shapes clay like it were breathing", age: 42, voice: "Soft", location: "Pottery Hut" }
    ]
  }
};
