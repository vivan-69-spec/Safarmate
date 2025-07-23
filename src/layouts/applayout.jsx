import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-1 w-full ">
        <Header />
        <ScrollToTop />
        <Outlet />
      </main>

      {/* Footer Section */}
      <div
        className="w-full bg-slate-300 text-black"
        style={{
          backgroundImage: "url('/footer-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Footer />
      </div>
    </div>

  );
};

export default AppLayout;
