// src/components/CityCard.jsx
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { handleCall } from "@/services/call";
import { handleWhatsApp } from "@/services/chat";

const CityCard = ({ city, image }) => {
  return (
    <div className="rounded-xl shadow-md border bg-white text-black overflow-hidden">
      <img
        src={image}
        alt={city}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
        <p className="text-sm text-muted-foreground">
          A great place to explore and relax with unique experiences.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Button className="w-full"
            onClick={handleWhatsApp}
          >Send Enquiry</Button>
          <Button
            className=""
            size="icon"
            onClick={handleCall}
            aria-label="Call"
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
