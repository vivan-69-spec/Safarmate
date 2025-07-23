import React from 'react'
import { Card, CardContent } from "../components/ui/card";
import { Button } from "@/components/ui/button";

const Hero2 = () => {

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
    <section className=" bg-orange-50 w-full overflow-hidden  ">

      <div className="  py-12">
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

      {/* Top Center Tagline */}
      {/* <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center z-10 w-[90vw] max-w-xl px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2">Welcome to New Delhi</h1>
        <Button className="bg-orange-500 hover:bg-orange-600 text-sm sm:text-base">Explore More</Button>
      </div> */}

      {/* Left Card */}
      {/* <div className="w-full flex justify-center">
        <Card className="shadow-lg w-full max-w-sm">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-orange-600">Experience the Heritage of India</h2>
            <p className="text-gray-600 text-sm">
              Discover the cultural richness and historic beauty of Delhi.
            </p>
          </CardContent>
        </Card>
      </div> */}

      {/* Center Qutub Minar Image */}
      {/* <div className="flex justify-center items-end h-full w-full order-3 md:order-none mb-0 my-4 md:my-0">
        <img
          src="/qutub.png"
          alt="Qutub Minar"
          className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] object-contain drop-shadow-xl"
          style={{ objectPosition: 'bottom' }}
        />
      </div> */}

      {/* <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
        Top Right Card
        <Card className="shadow-lg w-full">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-orange-600">Delhi: A Shopper’s Paradise</h2>
            <p className="text-gray-600 text-sm">
              Explore vibrant markets from Chandni Chowk to Connaught Place.
            </p>
          </CardContent>
        </Card>

        Bottom Right Card
        <Card className="shadow-lg w-full">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-orange-600 mb-2">Culinary Heritage</h2>
            <div className="flex gap-2 flex-wrap text-xs text-white">
              <span className="bg-orange-400 px-2 py-1 rounded-full">Chaat</span>
              <span className="bg-orange-400 px-2 py-1 rounded-full">Paratha</span>
              <span className="bg-orange-400 px-2 py-1 rounded-full">Butter Chicken</span>
            </div>
          </CardContent>
        </Card>
      </div> */}


    </section>
  );
}

export default Hero2