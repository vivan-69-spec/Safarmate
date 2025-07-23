const recommendations = [
  {
    title: "The Trek List",
    cards: [
      {
        image: "/trekList/valleyOfFlowers.jpg",
        title: "Valley of Flowers",
        rating: "4.9",
        price: "₹ 14,999 ",
        org_Price: "₹ 49,999",
        rating: "4.4",
        mgs: "9-20",
        spots: ["Baan Ganga", "Mansa Devi Temple", "River Rafting"],
        description:
          "Valley of Flowers, a breathtaking UNESCO World Heritage Site nestled in Uttarakhand, offers vibrant alpine blooms, peaceful meadows, and serene treks for nature and adventure lovers."
      },
      {
        image: "/trekList/kedarkantha.jpg",
        title: "Kedarkantha Trek",
        rating: "4.7",
        price: "₹ 9,499 ",
        org_Price: "₹ 30,000",
        mgs: "9-20",
        spots: ["Laxman Jhula", "Triveni Ghat", "Bungee Jumping"],
        description:
          "Kedarkantha Trek, a stunning winter trail in Uttarakhand, offers snow-covered peaks, dense pine forests, and a peaceful summit experience for trekking and nature enthusiasts."
      },
      {
        image: "/trekList/chardham.jpg",
        title: "Chardham Yatra",
        rating: "4.9",
        price: "₹ 28,999 ",
        org_Price: "₹ 1,10,000",
        mgs: "9-20",
        spots: ["Kempty Falls", "Mall Road", "Gun Hill"],
        description:
          "Char Dham Yatra is a sacred pilgrimage through the majestic Himalayas, covering Yamunotri, Gangotri, Kedarnath, and Badrinath—offering spiritual awakening, scenic beauty, and divine peace."
      },
      {
        image: "/trekList/vrindavan.jpg",
        title: "Mathura / Vrindavan / TajMahal",
        rating: "4.5",
        price: "₹ 4,999 ",
        org_Price: "₹ 20,000",
        mgs: "9-20",
        spots: ["Kempty Falls", "Mall Road", "Gun Hill"],
        description:
          "Mathura, the birthplace of Lord Krishna, is a sacred city filled with vibrant temples, holy ghats, and rich cultural festivities that offer a deep spiritual and historical experience."
      },
      {
        image: "/trekList/Ayodhya.jpg",
        title: "Ayodhya",
        rating: "4.2",
        price: "₹ 14,999 ",
        org_Price: "₹ 34,999",
        mgs: "9-20",
        spots: ["Kempty Falls", "Mall Road", "Gun Hill"],
        description:
          "Ayodhya, the revered birthplace of Lord Rama, is a city of immense spiritual significance, adorned with sacred temples, serene ghats, and a timeless connection to India’s epic heritage."
      },
    ],
  },
  {
    title: "What to do",
    cards: [
      {
        image: "/adventure/rafting.jpg",
        title: "Rishikesh River Rafting",
        rating: "4.8",
        mgs: "7 Person",
        moneyOfTimePerPerson: {
          "₹ 899  ": "2-3 hours",
          "₹ 1,200 ": "3-4 hours",
          "₹ 1,999 ": "4-5 hours",
        },
        // spots: ["Hawa Mahal", "Amber Fort", "City Palace"],
        description:
          "Rishikesh, the adventure capital of India, offers thrilling river rafting on the Ganges, surrounded by scenic hills, spiritual vibes, and an adrenaline rush like no other."
      },
      {
        image: "/adventure/desertSafari.jpg",
        title: "Desert Safari jodhpur",
        rating: "4.6",
        mgs: "1 Person",
        moneyOfTimePerPerson: {
          "₹ 899  ": "2-3 hours",
          "₹ 1,200 ": "3-4 hours",
          "₹ 2,999 ": "4-16 hours",
        },
        // spots: ["Mehrangarh Fort", "Clock Tower", "Blue City"],
        description:
          "Experience the golden sands of Jodhpur with a thrilling desert safari — from dune bashing and camel rides to cultural folk performances under the starry Rajasthan sky."
      },
      {
        image: "/adventure/bungeeJump.jpg",
        title: "Bungee Jumping Rishikesh",
        rating: "4.2",
        mgs: "1 Person",
        moneyOfTimePerPerson: {
          "₹ 5,699 ": "jump",
        },
        // spots: ["City Palace", "Pichola Lake", "Jag Mandir"],
        description:
          "Feel the ultimate adrenaline rush as you dive from India's highest bungee platform in Rishikesh, surrounded by stunning Himalayan views and the roar of the Ganges below."
      },
      {
        image: "/adventure/paragliding.jpg",
        title: "Paragliding In Kulu Manali",
        rating: "4.7",
        mgs: "2 Person",
        moneyOfTimePerPerson: {
          "₹ 3499  ": "15-20 mints",
        },
        // spots: ["City Palace", "Pichola Lake", "Jag Mandir"],
        description:
          "Soar like a bird above the breathtaking valleys of Kullu-Manali, as you experience the thrill of paragliding amidst snow-capped peaks and lush pine forests."
      },
      {
        image: "/adventure/boatRide.jpg",
        title: "Boat Ride Varanashi / Kashi / Banaras",
        rating: "4.6",
        mgs: "2 Person",
        moneyOfTimePerPerson: {
          "₹ 2,499  ": "2 hours",
          "₹ 4,999 ": "4 hours",
          "₹ 8,999 ": "12 hours",
        },
        // spots: ["City Palace", "Pichola Lake", "Jag Mandir"],
        description:
          "Glide through the sacred Ganges at sunrise in Varanasi, witnessing centuries-old rituals, glowing ghats, and the spiritual heartbeat of India unfold before your eyes."
      },
    ],
  },
  {
    title: "Most Visting Cities",
    cards: [
      {
        image: "/cities/manali.jpg",
        title: "Manali",
        rating: "4.7",
        mgs: "9 to 20",
        spots: ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge"],
        description:
          "Manali, nestled in the Himalayas, is a year-round paradise offering snow-capped peaks, lush valleys, vibrant markets, and thrilling adventures like skiing and paragliding."
      },
      {
        image: "/cities/banaras.jpg",
        title: "Varanashi / Banaras",
        rating: "4.8",
        mgs: "9 to 20",
        spots: ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge"],
        description:
          "Varanasi, the spiritual heart of India, is a timeless city where sacred rituals unfold on ancient ghats, and the Ganga Aarti illuminates the soul. Explore temples, boat rides, and the rich cultural heritage of this holy land."
      },
      {
        image: "/cities/rishikesh.jpg",
        title: "Rishikesh",
        rating: "4.6",
        mgs: "9 to 20",
        spots: ["Tirumala Temple", "Kapila Theertham", "Chandragiri Fort"],
        description:
          "Rishikesh, the Yoga Capital of the World, blends spiritual serenity with adventure. From peaceful ashrams and Ganga Aarti to thrilling river rafting and cliff jumping, it’s the perfect escape for seekers and explorers alike."
      },
      {
        image: "/cities/mathura.jpg",
        title: "Vrindavan / Mathura",
        rating: "4.2",
        mgs: "9 to 20",
        spots: ["Meenakshi Temple", "Gandhi Museum", "Vandiyur Lake"],
        description:
          "Vrindavan and Mathura, the twin cities of Lord Krishna’s divine pastimes, radiate spiritual energy through their vibrant temples, sacred ghats, and joyful celebrations like Holi. A timeless destination for devotion and cultural immersion."
      },
      {
        image: "/cities/ayodhya.jpg",
        title: "Ayodhya",
        rating: "4.1",
        mgs: "9 to 20",
        spots: ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge"],
        description:
          "Ayodhya, the sacred birthplace of Lord Ram, is a city steeped in devotion, history, and grandeur. With magnificent temples, serene ghats, and vibrant spiritual traditions, it offers a deeply enriching experience for every pilgrim and traveler."
      },
    ],
  },
  // {
  //   title: "Nature in Northeast",
  //   cards: [
  //     {
  //       image: "https://images.pexels.com/photos/32594725/pexels-photo-32594725/free-photo-of-beautifully-decorated-temple-dome-with-flags.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //       title: "Sikkim",
  //       spots: ["Nathula Pass", "Rumtek Monastery", "Tsomgo Lake"],
  //       description:
  //         "Sikkim offers peaceful monasteries, snow-capped Himalayan views, and tranquil lakes nestled in the lap of nature."
  //     },
  //     {
  //       image: "https://images.pexels.com/photos/28347139/pexels-photo-28347139/free-photo-of-majestic-waterfall-in-lush-meghalaya-jungle.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //       title: "Meghalaya",
  //       spots: ["Living Root Bridge", "Nohkalikai Falls", "Cherrapunji"],
  //       description:
  //         "Meghalaya is a paradise of waterfalls, caves, and living root bridges, offering unmatched monsoon beauty."
  //     },
  //     {
  //       image: "https://images.pexels.com/photos/3171574/pexels-photo-3171574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //       title: "Assam",
  //       spots: ["Kaziranga Park", "Kamakhya Temple", "Majuli Island"],
  //       description:
  //         "Assam is home to one-horned rhinos, lush tea gardens, and vibrant Assamese festivals on river islands like Majuli."
  //     },
  //   ],
  // },
];

export default recommendations;
