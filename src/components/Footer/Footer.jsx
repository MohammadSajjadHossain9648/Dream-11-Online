import React from 'react';
import logo from '../../assets/logo-footer.png';
import bgShadow from '../../assets/bg-shadow.png';

const Footer = () => {
    return (
        <div className="relative bg-blue-700 mt-40">
            {/* footer top section */}
            <div className="absolute -top-32 sm:left-20 lg:left-28 w-10/12 mx-auto rounded-xl border-2 border-white p-4">
                <div className="relative bg-white rounded-xl overflow-hidden">
                    {/* image layer over Background */}
                    <img className="absolute w-full h-full bg-cover z-0" src={bgShadow} alt="background shadow image" />

                    {/* Text content layer */}
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-12 sm:w-4/5 lg:w-1/2 mx-auto">
                        <h1 className="text-2xl font-bold text-black text-center sm:w-4/5 md:w-full">Subscribe to our Newsletter</h1>
                        <p className="font-medium text-black pb-4">Get the latest updates and news right in your inbox!</p>
                        <div className="w-full h-full flex items-center">
                            <input type="email" placeholder="Enter your email"
                            className="w-full mr-4 text-black border border-black rounded-lg py-3 pl-5 focus:outline-none placeholder:text-xs placeholder:text-shade_black_placeholder"
                            />
                            <button className="btn rounded-r-lg text-xs font-bold text-blue bg-gradient-to-r from-pink-400 via-yellow-500 to-orange-300 shadow-custom_inset">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer middle section */}
            <div className="sm:mx-auto md:mx-12 lg:mx-20 pt-44">
                <figure className="mb-12 flex justify-center">
                    <img className="h-28" src={logo} alt="brand logo image" />
                </figure>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-12 lg:gap-32 sm:w-2/5 md:w-full mx-auto sm:text-center md:text-left">
                    <div className="md:w-3/4">
                        <h1 className="text-sm font-semibold text-white pb-3">About Us</h1>
                        <p className="text-xs">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-white pb-3">Quick Links</h1>
                        <ul className="text-xs list-disc list-inside px-2 py-1 space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-white pb-3">Subscribe</h1>
                        <p className="text-xs md:w-4/5">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="relative mt-4">
                            <input type="email" placeholder="Enter your email"
                            className="w-full pr-32 text-black border border-white rounded-lg py-1.5 pl-5 focus:outline-none placeholder:text-xs placeholder:text-shade_black_placeholder"
                            />
                            <button className="absolute right-0 top-0 h-full w-2/5 rounded-r-lg text-xs font-bold text-blue bg-gradient-to-l from-pink-400 via-yellow-500 to-orange-200 shadow-custom_inset">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer bottom section */}
            <div className="border-t border-white text-center py-6 mt-14">
                <p className="text-xs">@2026 Dream 11 All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;