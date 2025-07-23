import React from "react";

const About = () => {

  const imageList = [
    "https://images.pexels.com/photos/32594725/pexels-photo-32594725/free-photo-of-beautifully-decorated-temple-dome-with-flags.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/235731/pexels-photo-235731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/27403382/pexels-photo-27403382/free-photo-of-ganga-aarti.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/28347139/pexels-photo-28347139/free-photo-of-majestic-waterfall-in-lush-meghalaya-jungle.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3163677/pexels-photo-3163677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];


  return (
    <div className="w-full bg-orange-50 overflow-hidden">
      {/* Hero background with text overlay */}
      <div className="relative w-full h-[60vh] sm:h-[80vh]">
        <img
          src="contact&about.jpg"
          alt="Indian Mosque Holi"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-6xl sm:text-6xl font-bold mb-4 drop-shadow-lg">About Us</h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="relative w-full py-16 px-4 sm:px-6 md:px-12 text-center bg-cover bg-center" >
        {/* <div cl assName="absolute inset-0 bg-orange-50 bg-opacity-60 z-0"></div> */}
        <div className="relative text-white z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-semibold  p-4 text-black mb-4">
            <span className="bg-orange-500 px-4">Meet Safarmate</span> : Your Local Travel Companion
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 text-base sm:text-xl leading-relaxed">
            Safarmate helps you explore India like a local with trusted tips, authentic stays, and offbeat experiences that go beyond the usual.
            From bustling cities to quiet villages, discover handpicked recommendations for food, stays, guides, transport, and cultural gems.
            Compare travel options, book curated tours, and uncover stories hidden in every corner.
            Built on trust and Indian hospitality, Safarmate makes your journey smoother, richer, and truly unforgettable.
            <br /><br />
            <strong className="text-black">Explore deeper. Travel smarter. With Safarmate.</strong>
          </p>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="py-12">

        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6">
          Experience the Spirit of India
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...imageList, ...imageList].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`slide-${i}`}
                className="h-48 w-auto object-cover rounded-xl shadow-lg mx-4"
              />
            ))}
          </div>
        </div>
      </div>


      {/* Tag Line Section at end */}
      <div className="w-full py-20 px-4 sm:px-6 md:px-12 text-white text-center bg-gradient-to-r from-orange-600 via-orange-500 via-orange-400 to-orange-300">
        <h2 className="text-3xl sm:text-6xl font-bold mb-6 drop-shadow-md">
          Meet Safarmate: Your Local Travel Companion
        </h2>
        {/* <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          Safarmate helps you explore India like a local with trusted tips, authentic stays, and
          offbeat experiences that go beyond the usual. From bustling cities to quiet villages,
          discover handpicked recommendations for food, stays, guides, transport, and cultural
          gems. Compare travel options, book curated tours, and uncover stories hidden in every
          corner. Built on trust and Indian hospitality, Safarmate makes your journey smoother,
          richer, and truly unforgettable.
          <br />
          <br />
          <strong className="text-white">Explore deeper. Travel smarter. With Safarmate.</strong>
        </p> */}
      </div>


    </div>

  );
};

export default About;
