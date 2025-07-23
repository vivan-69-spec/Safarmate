import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {

    const handleWhatsApp = () => {
        const phoneNumber = '+917906076344';
        const message = encodeURIComponent("Hi! I'm interested in your services.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };
    return (
        <div className='w-auto bg-transparent mt-10 p-7 z-50 text-white'>
            <div className=' flex justify-between text-white bg-transparent p-2 top-0 left-0 right-0 z-50 md:flex-row flex-col items-center gap-10 '>
                <div className='flex flex-col items-center gap-2 md:flex sm:w-[100vh] '>
                    <div className="text-2xl h-auto font-bold text-orange-600 flex items-center gap-2 ">
                        <img
                            src="/logo/cover1.png"
                            alt="Safarmate Logo"
                            className="h-[50px] ml-[-20px] mb-[-20px] w-auto object-contain"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center mt-3 md:w-full">
                        <h1 className=' font-extrabold text-3xl '>Follow us</h1>
                        <p className='text-sm'>Stay connected with us on social media</p>
                        <div className='social-icons  flex gap-4 mt-2'>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-8 h-8" />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-8 h-8" />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-8 h-8" />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <Youtube className="w-10 h-8 " />
                            </a>
                        </div>
                    </div>
                </div>

                {/* news and link */}
                <div className="flex flex-col sm:flex-row items-start gap-10  w-full md:w-[100vh] sm:w-[100vh] px-4 py-6">
                    {/* Quick Links */}
                    <div className="flex flex-col w-full sm:w-1/2 sm:ml-6">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/about" className="hover:underline">About</Link></li>
                            <li><Link to="/category" className="hover:underline">Category</Link></li>
                            <li><Link to="/contact-us" className="hover:underline">Contact</Link></li>
                            {/* <li><Link to="/" className="hover:underline"></Link></li> */}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col w-full sm:w-[38%] sm:ml-[-45px]">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Newsletter</h3>
                        <p className="text-sm mb-4">
                            Stay informed about upcoming events, exciting travel ideas, and exclusive offers. Contact us directly via email.
                        </p>
                        <button
                            type="button"
                            onClick={() =>
                                window.location.href = "mailto:vivanbhadana07@gmail.com?subject=Ask%20About%20Trips&body=Hello!!%20I'm%20interested%20in%20your%20services.%20So%20please%20contact%20me%20as%20soon%20as%20possible!!!"
                            }
                            className="w-[200px] text-white font-extrabold bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:bg-red-700 rounded-full text-sm px-1 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>

            </div>


            {/* add line between the divs */}
            <hr className='my-8 border-gray-600' />

            <div className=' text-center text-white mt-10 flex items-center justify-center'>
                Made with ❤️ by <Button className="bg-transparent px-[4px] hover:bg-transparent hover:font-bold " onClick={handleWhatsApp} > Anshul</Button>
            </div>
        </div>
    )
}

export default Footer