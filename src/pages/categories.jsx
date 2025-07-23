import React from 'react'
import { useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import CityModal from "@/components/CityModal";
import categories from "@/lib/categories";
import allCities from "@/lib/cities";

const Category = () => {

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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setModalOpen(true);
  };

  const getFilteredCities = () => {
    if (!selectedCategory) return [];
    const tag = selectedCategory.toLowerCase().split(" ")[0]; // "Religious Tours" → "religious"
    return allCities.filter((city) =>
      city.tags?.includes(tag)
    );
  };


  return (
    <div className="w-full bg-orange-50 overflow-hidden">
      <div
        className="relative w-full h-[60vh] sm:h-[80vh]">
        <img
          src="/category.jpg"
          alt="Contact Us Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-white text-6xl font-bold px-2 py-2 rounded-md brightness-100">
            Category
          </h1>
        </div>
      </div>

      {/* filter section of category */}

      <section className="py-10 px-4 md:px-10 bg-orange-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(cat.title)}
            >
              <CategoryCard icon={cat.icon} title={cat.title} />
            </div>
          ))}
        </div>

        <CityModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          cities={getFilteredCities()}
          category={selectedCategory}
        />
      </section>


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

    </div>
  )
}

export default Category
