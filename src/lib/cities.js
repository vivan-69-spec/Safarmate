const cities = [
  {
    city: "Agra",
    image: "/search_cities/agra.png",
    tags: ["cultural"],
    description: "Home to the iconic Taj Mahal and a treasure trove of Mughal-era architecture, Agra is a must-visit for history lovers and culture enthusiasts exploring India's glorious past."
  },
  {
    city: "Almora",
    image: "/search_cities/almora.png",
    tags: ["hill"],
    description: "A serene hill town in Uttarakhand offering panoramic Himalayan views, rich traditions, scenic nature walks, and a peaceful spiritual ambiance ideal for meditation and nature lovers."
  },
  {
    city: "Amritsar",
    image: "/search_cities/amritsar.png",
    tags: ["religious", "cultural"],
    description: "Spiritual center of Sikhism and home to the Golden Temple, Amritsar blends deep religious devotion with historical significance, bustling bazaars, and warm Punjabi hospitality."
  },
  {
    city: "Aurangabad",
    image: "/search_cities/aurangabad.png",
    tags: ["cultural"],
    description: "Known for the Ajanta and Ellora Caves, Mughal architecture, and ancient Buddhist art, Aurangabad serves as a gateway to Maharashtra's most impressive cultural heritage."
  },
  {
    city: "Ayodhya",
    image: "/search_cities/ayodhya.png",
    tags: ["religious"],
    description: "An ancient sacred city believed to be Lord Rama’s birthplace, Ayodhya is a major pilgrimage destination dotted with ghats, temples, and stories from the Ramayana."
  },
  {
    city: "Barot Valley",
    image: "/search_cities/barot_valley.png",
    tags: ["hill", "wildlife"],
    description: "A hidden gem in Himachal Pradesh offering trout fishing, nature trails, and peaceful village life amid thick deodar forests and wildlife sanctuaries."
  },
  {
    city: "Chakrata",
    image: "/search_cities/chakrata.png",
    tags: ["hill", "adventure"],
    description: "A quiet hill station perfect for trekking, bird watching, and nature retreats, Chakrata remains one of Uttarakhand’s least commercialized scenic escapes."
  },
  {
    city: "Dehradun",
    image: "/search_cities/dehradun.png",
    tags: ["hill", "cultural"],
    description: "Capital of Uttarakhand known for its colonial charm, educational institutions, spiritual sites, and proximity to popular hill stations like Mussoorie and Rishikesh."
  },
  {
    city: "Delhi",
    image: "/search_cities/delhi.png",
    tags: ["cultural"],
    description: "India’s vibrant capital rich in history, with iconic monuments like India Gate and Qutub Minar, diverse cuisines, bustling markets, and cultural landmarks."
  },
  {
    city: "Dhanaulti",
    image: "/search_cities/dhanaulti.png",
    tags: ["hill", "wildlife"],
    description: "An offbeat hill retreat near Mussoorie known for its eco-parks, tranquil forests, and panoramic views of the Himalayas, perfect for a peaceful nature escape."
  },
  {
    city: "Gulmarg",
    image: "/search_cities/gulmarg.png",
    tags: ["hill", "adventure"],
    description: "A premier skiing and snowboarding destination in Kashmir with meadows, gondola rides, and snow-covered landscapes that turn into adventure zones in winter."
  },
  {
    city: "Gwalior",
    image: "/search_cities/gwalior.png",
    tags: ["cultural"],
    description: "A historical city known for its imposing hilltop fort, classical music heritage, ancient temples, and royal palaces reflecting a regal past."
  },
  {
    city: "Haridwar",
    image: "/search_cities/haridwar.png",
    tags: ["religious"],
    description: "One of the holiest Hindu cities, Haridwar is famous for the Ganga Aarti at Har Ki Pauri and hosts millions of pilgrims during Kumbh Mela."
  },
  {
    city: "Jaipur",
    image: "/search_cities/jaipur.png",
    tags: ["cultural", "deserts"],
    description: "The Pink City of Rajasthan is adorned with majestic forts, royal palaces, colorful bazaars, and rich traditions that make it a cultural gem of India."
  },
  {
    city: "Jaisalmer",
    image: "/search_cities/jaisalmer.png",
    tags: ["deserts", "cultural"],
    description: "Nicknamed the Golden City, Jaisalmer is known for its yellow sandstone architecture, desert safaris, and vibrant folk music and dance in the heart of the Thar Desert."
  },
  {
    city: "Jodhpur",
    image: "/search_cities/jodhpur.png",
    tags: ["cultural", "deserts"],
    description: "Famous for its blue-painted houses and the towering Mehrangarh Fort, Jodhpur is a cultural city that blends royalty, history, and desert charm."
  },
  {
    city: "Kasol",
    image: "/search_cities/kasol.png",
    tags: ["trekking", "hill", "adventure"],
    description: "A peaceful hamlet in Himachal’s Parvati Valley known for its hippie vibes, riverside cafés, and as a base for treks like Kheerganga and Tosh."
  },
  {
    city: "Katra",
    image: "/search_cities/katra.png",
    tags: ["religious"],
    description: "The base town for the revered Vaishno Devi Temple trek, welcoming lakhs of pilgrims with scenic views and spiritual tranquility."
  },
  {
    city: "Ladakh",
    image: "/search_cities/ladakh.png",
    tags: ["adventure", "trekking"],
    description: "A mystical land of high-altitude passes, barren beauty, Buddhist monasteries, and thrilling routes like Nubra Valley and Pangong Lake."
  },
  {
    city: "Lansdowne",
    image: "/search_cities/lansdowne.png",
    tags: ["hill"],
    description: "A quaint cantonment town surrounded by pine forests and colonial buildings, ideal for quiet weekends and nature walks."
  },
  {
    city: "Leh",
    image: "/search_cities/leh.png",
    tags: ["adventure", "hill", "trekking"],
    description: "Gateway to Ladakh’s adventures, Leh offers high-altitude thrills, monasteries, lakes, and unforgettable landscapes that challenge and inspire."
  },
  {
    city: "Manali",
    image: "/search_cities/manali.png",
    tags: ["hill", "adventure", "trekking"],
    description: "A favorite among adventure seekers and honeymooners, Manali offers snow sports, scenic mountains, and lively culture throughout the year."
  },
  {
    city: "Mathura / Vrindavan",
    image: "/search_cities/mathura.png",
    tags: ["religious", "cultural"],
    description: "Sacred towns associated with Lord Krishna, known for colorful Holi celebrations, intricate temples, and devotional chants echoing in the streets."
  },
  {
    city: "McLeod Ganj",
    image: "/search_cities/mcleod.png",
    tags: ["hill", "cultural"],
    description: "A peaceful town near Dharamshala, home to the Dalai Lama and Tibetan monasteries, blending spirituality, nature, and cultural exploration."
  },
  {
    city: "Mumbai",
    image: "/search_cities/mumbai.png",
    tags: ["beaches", "cultural"],
    description: "India’s financial hub and entertainment capital, Mumbai offers beaches, colonial heritage, vibrant nightlife, and a fast-paced urban charm."
  },
  {
    city: "Munsiyari",
    image: "/search_cities/munsiyari.png",
    tags: ["hill", "trekking"],
    description: "A hidden gem in Uttarakhand, Munsiyari offers snow-capped views, peaceful villages, and serves as a gateway to glacier treks."
  },
  {
    city: "Mussoorie",
    image: "/search_cities/mussoorie.png",
    tags: ["hill"],
    description: "Popular as the Queen of Hills, Mussoorie offers colonial charm, scenic trails, waterfalls, and views of the Garhwal Himalayas."
  },
  {
    city: "Nainital",
    image: "/search_cities/nainital.png",
    tags: ["hill"],
    description: "A popular lake town surrounded by hills, famous for boating, shopping, and a refreshing mountain climate ideal for families."
  },
  {
    city: "Nashik",
    image: "/search_cities/nashik.png",
    tags: ["religious"],
    description: "A major pilgrimage destination on the banks of the Godavari River, known for temples, Kumbh Mela, and emerging wine tourism."
  },
  {
    city: "Pahalgam",
    image: "/search_cities/pahalgam.png",
    tags: ["hill", "adventure"],
    description: "A lush valley in Kashmir, base for Amarnath Yatra, trout fishing, and scenic meadows ideal for trekkers and nature lovers."
  },
  {
    city: "Patiala",
    image: "/search_cities/patiala.png",
    tags: ["cultural"],
    description: "A royal city in Punjab known for its majestic palaces, traditional attire, and classical music, reflecting grandeur and history."
  },
  {
    city: "Prayagraj",
    image: "/search_cities/prayagraj.png",
    tags: ["religious", "cultural"],
    description: "Famous for the Triveni Sangam where three rivers meet, and the Kumbh Mela that draws millions of devotees from across India."
  },
  {
    city: "Pune",
    image: "/search_cities/pune.png",
    tags: ["cultural"],
    description: "A thriving educational and cultural hub known for its pleasant climate, Maratha history, and rapidly growing urban lifestyle."
  },
  {
    city: "Pushkar",
    image: "/search_cities/pushkar.png",
    tags: ["religious", "deserts"],
    description: "A sacred town with India’s only Brahma temple, famous for its camel fair, desert charm, and tranquil lake surrounded by ghats."
  },
  {
    city: "Ranikhet",
    image: "/search_cities/ranikhet.png",
    tags: ["hill"],
    description: "A peaceful military town in Uttarakhand offering Himalayan views, pine forests, and calm surroundings ideal for relaxation."
  },
  {
    city: "Rishikesh",
    image: "/search_cities/rishikesh.png",
    tags: ["religious", "adventure", "hill"],
    description: "The yoga capital of the world, Rishikesh combines spirituality with adventure through rafting, trekking, and meditation retreats."
  },
  {
    city: "Shimla",
    image: "/search_cities/shimla.png",
    tags: ["hill"],
    description: "Once the summer capital of British India, Shimla features colonial architecture, scenic views, and a lively Mall Road experience."
  },
  {
    city: "Sissu",
    image: "/search_cities/sissu.png",
    tags: ["adventure", "hill", "wildlife"],
    description: "A tranquil village in Lahaul Valley with waterfalls, mountain views, and serene landscapes ideal for exploring untouched Himachal."
  },
  {
    city: "Sonmarg",
    image: "/search_cities/sonmarg.png",
    tags: ["hill", "trekking"],
    description: "The Meadow of Gold, Sonmarg is a gateway to Himalayan treks and glacial adventures amidst breathtaking landscapes."
  },
  {
    city: "Spiti Valley",
    image: "/search_cities/spiti_valley.png",
    tags: ["adventure", "trekking"],
    description: "A remote desert mountain valley with ancient monasteries, rugged roads, and surreal landscapes perfect for offbeat explorers."
  },
  {
    city: "Tehri Garhwal",
    image: "/search_cities/tehri_garhwal.png",
    tags: ["hill", "adventure"],
    description: "Known for Asia’s highest dam and emerging adventure tourism, Tehri offers water sports and serene Himalayan landscapes."
  },
  {
    city: "Tirthan Valley",
    image: "/search_cities/tirthan_valley.png",
    tags: ["hill", "adventure", "trekking"],
    description: "A peaceful valley near Great Himalayan National Park, perfect for trout fishing, hiking, and eco-friendly stays."
  },
  {
    city: "Tosh",
    image: "/search_cities/tosh.png",
    tags: ["trekking", "hill", "wildlife"],
    description: "A tranquil Himalayan village popular among backpackers and trekkers, with stunning views and a laid-back vibe."
  },
  {
    city: "Udaipur",
    image: "/search_cities/udaipur.png",
    tags: ["cultural"],
    description: "Often called the Venice of the East, Udaipur enchants with its lakes, palaces, and romantic boat rides in Rajasthan's royal heritage."
  },
  {
    city: "Varanasi",
    image: "/search_cities/varanasi.png",
    tags: ["religious", "cultural"],
    description: "One of the world’s oldest living cities, Varanasi is a spiritual capital with sacred ghats, Ganga Aarti, and deep-rooted traditions."
  }
];

export default cities;
