import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SearchOver } from "../pages/search"; // Importing the Search component

const Header = () => {
  const [open, setOpen] = useState(false); // mobile menu open/close
  const [scrolled, setScrolled] = useState(false); // scroll position
  const navigate = useNavigate();

  // Toggle blur + bg on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = '+919058014582';
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleClose = () => setOpen(false); // close menu when link clicked
  const [showSearch, setShowSearch] = useState(false);


  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-md shadow-md" : "bg-transparent"}`}>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo/cover1.png"
            alt="Safarmate Logo"
            className="h-[40px] sm:h-[60px] w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-[72px] text-white font-medium">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
          <li><Link to="/category" className="hover:text-orange-500">Category</Link></li>
          <li><Link to="/contact-us" className="hover:text-orange-500">Contact Us</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Right Section: Search Icon + Book Button */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="mr-1 text-white bordeer-3 hover:text-orange-500 transition-all duration-300"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Book Button */}
            <Link to="/book" onClick={handleWhatsApp} className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-200">
              Book My Travel
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden pt-[2px]">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button>
                  <Menu className="w-6 h-6 text-white" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-white text-black w-64">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <div className="flex flex-col gap-4 mt-8 font-semibold">
                  <Link to="/" onClick={handleClose}>Home</Link>
                  <Link to="/about" onClick={handleClose}>About</Link>
                  <Link to="/category" onClick={handleClose}>Category</Link>
                  <Link to="/contact-us" onClick={handleClose}>Contact Us</Link>
                  <hr className="border-gray-600" />
                  <Link to="/" onClick={handleWhatsApp} className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg">Book My Travel</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      {/* Search Overlay Layer */}
      <SearchOver open={showSearch} onClose={setShowSearch} />
    </>

  );
};

export default Header;
