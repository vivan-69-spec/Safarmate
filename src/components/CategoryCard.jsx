// src/components/CategoryCard.jsx
import { Card, CardContent } from "@/components/ui/card";

const CategoryCard = ({ icon, title }) => (
  <Card className="w-full h-36 rounded-xl flex flex-col items-center justify-center shadow-xl/30 hover:shadow-2xl transition-all duration-200 cursor-pointer">
    <CardContent className="text-center flex flex-col items-center gap-2">
      <span className="text-3xl">{icon}</span>
      <p className="text-sm font-semibold">{title}</p>
    </CardContent>
  </Card>
);

export default CategoryCard;
