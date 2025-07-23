import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import testimonials from "@/lib/reviews";

const Star = () => (
    <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACwSURBVHgBnZMBEcMgDEVzuwmYBCRMAg6KgyFhczIJOKuE1kH22cKNXgnheHcpPZL8kqQQGTDzree/GMkBy31aAASxOXCCFbbRDEj0/Mdrcb0S6qN7LegKdYc1NnxL9f5AXCs/fZ9ZROodZT2VlecNSwPJqftvwBlz55XkJ1lIORqnL7em4EknjgiU8e2wl9guewv1kEaWLrtqv0xpsxoYtC6L+Jt/F0wVcGSAmMPt/AB79P+6CF5xvgAAAABJRU5ErkJggg=="
        alt="star"
        className="w-4 h-4"
    />
);

export default function Reviews() {
    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const next = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    // Responsive: show carousel on mobile, all reviews in row on desktop/laptop
    return (
        <div id="testimonials" className="w-full px-4 py-10 bg-orange-50 text-black text-center">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

            {/* Desktop/Laptop: show all reviews in a row */}
            <div className="hidden md:flex gap-6 justify-center">
                {testimonials.map((review, i) => (
                    <div
                        key={i}
                        className="bg-orange-500 text-white max-w-md h-[250px] p-6 rounded-lg shadow-md flex-1"
                    >
                        <div className="flex justify-center mb-2">
                            {[...Array(review.rating)].map((_, idx) => (
                                <Star key={idx} />
                            ))}
                        </div>
                        <p className="text-sm mb-4 font-bold ">"{review.message}"</p>
                        <p className="text-sm font-semibold">- {review.name}</p>
                    </div>
                ))}
            </div>

            {/* Mobile: show carousel */}
            <div className="md:hidden">
                <div className="relative bg-orange-500 text-white max-w-lg mx-auto p-6 rounded-lg shadow-md">
                    <div className="flex justify-center mb-2">
                        {[...Array(testimonials[index].rating)].map((_, i) => (
                            <Star key={i} />
                        ))}
                    </div>
                    <p className="text-sm mb-4 font-bold ">"{testimonials[index].message}"</p>
                    <p className="text-sm font-semibold">- {testimonials[index].name}</p>

                    {/* Carousel controls */}
                    <div className="flex justify-between mt-6">
                        <Button variant="ghost" size="sm" onClick={prev}>
                            ◀
                        </Button>
                        <Button variant="ghost" size="sm" onClick={next}>
                            ▶
                        </Button>
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-4 flex justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "w-2 h-2 rounded-full",
                                i === index ? "bg-orange-500" : "bg-gray-300"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
