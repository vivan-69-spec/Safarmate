import { Card } from "@/components/ui/card";

// Updated icons to better match each stat
const stats = [
    { icon: "/customers.png", title: "1,000+", subtitle: "Happy Customers" }, // Smiling face
    { icon: "/money.png", title: "Best Price", subtitle: "In Industry" }, // Money with wings
    { icon: "/call.png", title: "24×7", subtitle: "Customer Service" }, // Telephone receiver
];

export function State() {
    return (
        <div className="bg-orange-500 py-8  md:px-14">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                {stats.map((item, idx) => (
                    <Card
                        key={idx}
                        className="flex flex-col items-center p-6 bg-orange-500 text-white transition-colors text-center space-y-2 border-none"
                    >
                        <img src={item.icon} alt={item.subtitle} className="w-14 h-14" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm">{item.subtitle}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
