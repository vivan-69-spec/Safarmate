// src/components/CityModal.jsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CityCard from "./CityCard";

const CityModal = ({ open, onClose, cities, category }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-orange-50 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Cities for: <span className="text-orange-600">{category}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {cities.map((city, index) => (
            <CityCard
              key={index}
              city={city.city}
              image={city.image}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CityModal;
