import { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import cities from "@/lib/cities"; // adjust import path if different
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { handleWhatsApp } from "@/services/chat";
import { handleCall } from "@/services/call";

export const SearchOver = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  // Memoized filtered list (case-insensitive search)
  const filteredCities = useMemo(() => {
    if (!searchTerm.trim()) return cities;
    return cities.filter((c) =>
      c.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleCardClick = (cityObj) => {
    setSelectedCity(cityObj);
  };

  const handleCloseCityDialog = () => {
    setSelectedCity(null);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="flex flex-col mt-3 p-6 pt-5 w-full max-w-full h-screen bg-black/30 backdrop-blur text-white border-none rounded-none">
          <div className="mb-6 h-[60px] pt-5">
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-black bg-orange-50 p-4 w-full text-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-6 md:px-6 scrollbar-hide overflow-y-auto">
            {filteredCities.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                {/* Not found icon (Magnifying glass with X) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-orange-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="9" x2="13" y2="13" stroke="currentColor" strokeWidth="2" />
                  <line x1="13" y1="9" x2="9" y2="13" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="text-lg font-semibold text-orange-500">No destinations found</span>
              </div>
            ) : (
              filteredCities.map((cityObj, i) => (
                <div
                  key={i}
                  className=" bg-orange-50 h-[42vh] flex flex-col  hover:bg-black hover:text-white transition text-center text-white rounded-xl cursor-pointer font-semibold"
                  onClick={() => handleCardClick(cityObj)}
                >
                  <img
                    src={cityObj.image}
                    alt={cityObj.city}
                    className=" w-full h-[250px] object-cover rounded-t-xl"
                  />
                  <div className="p-4 flex-1 text-xl bg-black hover:bg-orange-50 hover:text-black rounded-b-xl flex flex-col justify-between">
                    {cityObj.city}
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* City details modal */}
      <Dialog className="max-w-[90vw]" open={!!selectedCity} onOpenChange={handleCloseCityDialog}>
        <DialogContent className=" max-w-[22rem] md:max-w-md mx-auto p-0 bg-white text-black rounded-xl overflow-hidden border shadow-md">
          {selectedCity && (
            <div className="flex flex-col">
              {/* Left: Image */}
              <div className="w-full">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.city}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="p-6 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedCity.city}
                  </h3>

                  {selectedCity.description && (
                    <p className="text-sm text-gray-700 font-bold mt-2">
                      {selectedCity.description}
                    </p>
                  )}
                  <div className="text-sm text-gray-700 mt-2 font-bold">
                    <h2 className="text-black text-xl">Internary</h2>
                    <ul className="list-disc text-lg pl-5 mt-1">
                      <li>for customized internary!</li>
                      <div className="flex items-center gap-2">
                        <Button className="w-1/2" onClick={handleWhatsApp} >Send Enquiry</Button>
                        <Button size="icon">
                          <Phone className="w-4 h-4" onClick={handleCall} />
                        </Button>
                      </div>
                      <li>for 2-3 days intenary</li>
                      <div className="flex items-center gap-2">
                        <Button className="w-1/2 border-2" onClick={handleWhatsApp}>Send Enquiry</Button>
                        <Button size="icon">
                          <Phone className="w-4 h-4" onClick={handleCall} />
                        </Button>
                      </div>
                    </ul>
                    {/* <p>● For coustimezed internary!</p>
                      <p>● For 2-3 days intenary </p> */}
                  </div>
                </div>


                {/* <div className="flex items-center gap-2">
                  <Button className="w-full border-2">Send Enquiry</Button>
                  <Button size="icon">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div> */}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>


    </>
  );
};
