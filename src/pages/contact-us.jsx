// src/pages/ContactUs.jsx

import Contact2 from "@/components/contact";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const regionalOffices = [
  {
    city: "Delhi",
    address: "Ministry of Tourism, Transport Bhawan, 1, Sansad Marg, New Delhi - 110001",
    phone: "+91 11 2371 1452",
    fax: "+91 11 2371 4541",
    email: "info.delhi@tourism.gov.in",
  },
  {
    city: "Mumbai",
    address: "123 Marine Drive, Mumbai - 400020",
    phone: "+91 22 2200 1234",
    fax: "+91 22 2200 5678",
    email: "info.mumbai@tourism.gov.in",
  },
  {
    city: "Chennai",
    address: "456 Marina Road, Chennai - 600005",
    phone: "+91 44 2840 7890",
    fax: "+91 44 2840 4567",
    email: "info.chennai@tourism.gov.in",
  },
  // Add more cities as needed
];

const ContactUs = () => {
  return (
    <div className="bg-orange-50">
      {/* Banner Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] ">
        <img
          src="/contact&about.jpg"
          alt="Contact Us Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-white text-6xl font-bold px-2 py-2 rounded-md brightness-100">
            Contact Us
          </h1>
        </div>
      </div>

      <Contact2 />

    </div>
  );
};

export default ContactUs;
