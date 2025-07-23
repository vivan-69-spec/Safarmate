import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PhoneCall, ChevronRight } from "lucide-react";
import { useRef } from "react";
import recommendations from "../lib/recommendations";
import { handleCall } from "@/services/call";
import { handleWhatsApp } from "@/services/chat";

const Recommendation = () => {
  const scrollRefs = useRef([]);

  // const handleWhatsApp = () => {
  //   const phoneNumber = "+919058014582";
  //   const message = encodeURIComponent("Hi! I'm interested in your services.");
  //   window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  // };

  // const handleCall = () => {
  //   window.location.href = "tel:+919058014582";
  // };

  const handleScroll = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const card = container.querySelector("div > div"); // First card
      if (card) {
        const containerWidth = container.offsetWidth;
        const scrollAmount = containerWidth - 40; // Adjust for padding/margin
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-orange-50">
      {recommendations.map((section, index) => (
        <div key={index} className="mb-16">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-6 px-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              {section.title}
            </h2>
          </div>

          {/* Scrollable Cards + Arrows */}
          <div className="relative">
            {/* Cards Container */}
            <div
              ref={(el) => (scrollRefs.current[index] = el)}
              className="flex overflow-x-auto gap-10 scrollbar-hide px-6 pb-2 scroll-smooth snap-x snap-mandatory"
            >
              {section.cards.map((card, i) => (
                <Card
                  key={i}
                  className="snap-center  min-w-[300px] sm:min-w-[350px] max-w-xs rounded-xl overflow-hidden shadow-xl shadow-black/10 hover:shadow-lg transition duration-300 bg-white flex-shrink-0"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4 flex flex-col gap-2">
                    <CardTitle className="text-lg font-semibold">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-bold text-sm mb-4 text-muted-foreground">
                      {card.description}
                    </CardDescription>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="mt-2 border-gray-300 w-fit"
                        >
                          Explore
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-[90vw] sm:max-w-[600px] rounded-lg p-0">
                        <div className="max-h-[90vh] overflow-y-auto scroll-smooth scrollbar-hide">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6 pt-3 relative">
                            <DialogTitle className="flex justify-between text-xl font-extrabold mb-1">
                              {card.title}
                              <span className="flex items-center text-base gap-1 text-green-600 font-medium md:font-normal">
                                <svg
                                  className="w-4 h-4 fill-current bg-gray"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                {card.rating}
                              </span>
                            </DialogTitle>

                            {/* Pricing */}
                            {(card.price || card.moneyOfTimePerPerson) && (
                              <div className="mb-2">
                                {card.price ? (
                                  <>
                                    <div className="text-xl font-bold text-black">
                                      {card.price}{" "}
                                      <span className="text-sm text-gray-500">
                                        Per Person
                                      </span>
                                    </div>
                                    {card.org_Price && (
                                      <div className="text-sm text-gray-500">
                                        <span className="line-through">
                                          {card.org_Price}
                                        </span>{" "}
                                        - Per Person
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <div className="text-base text-gray-700 space-y-1">
                                    {Object.entries(
                                      card.moneyOfTimePerPerson
                                    ).map(([amount, duration], i) => (
                                      <div key={i} className="flex gap-2">
                                        <span className=" text-xl font-bold text-black">
                                          {amount}/
                                        </span>
                                        <span className="font-bold text-gray-500 textsm ">
                                          {duration}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Inclusions */}
                            <ul className="space-y-2 text-gray-700 text-sm mb-4">
                              <li className="flex items-center gap-2">
                                👥 <span>Group Size : </span>
                                <span className="font-semibold">
                                  {card.mgs}
                                </span>
                              </li>
                              <li className="">
                                🏨 Types Of Tours
                                <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                  <li className="ml-4">
                                    Corporate Tours / Treks
                                  </li>
                                  <li className="ml-4">
                                    University Tours / Treks
                                  </li>
                                  <li className="ml-4">
                                    School Tours / Treks
                                  </li>
                                  <li className="ml-4">
                                    Group Tours / Treks
                                  </li>
                                </ul>
                              </li>
                              <li className="flex items-center gap-2">
                                📆 <span>Frequency Of Trip : Every week</span>
                              </li>
                              <li className="flex items-center gap-2">
                                🏙️ <span> City Base : Delhi</span>
                              </li>
                            </ul>

                            {/* Description */}
                            <CardDescription className="text-gray-600 font-bold text-sm mb-4">
                              {card.description}
                            </CardDescription>

                            {/* CTA Button */}
                            <Button
                              onClick={handleWhatsApp}
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-base font-semibold py-3"
                            >
                              Send Enquiry
                            </Button>

                            {/* Floating Call Button */}
                            <button
                              onClick={handleCall}
                              aria-label="Call"
                              className="absolute bottom-20 right-6 bg-orange-500 hover:bg-orange-600 p-3 rounded-full shadow-lg"
                            >
                              <PhoneCall className="text-white w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => handleScroll(index, "right")}
              className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-2 shadow-lg z-10"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Recommendation;
