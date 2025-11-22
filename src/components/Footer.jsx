import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaTwitterSquare,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 ">
      <div
        className="bg-black w-11/12 mx-auto text-white grid lg:grid-cols-5 grid-cols-1
          gap-8  text-center "
      >
        <div className="">
          <div className="flex gap-3 items-center text-center">
            <img src={logo} className="w-6 h-6" />
            <Link to="/" className="font-bold text-purple-600 text-xl">
              HERO.IO
            </Link>
          </div>
          <div className="w-full h-px bg-gray-400 my-2"></div>
          <p className="text-sm ">
            Hero IO is not just an application; it is a powerful tool designed
            to consolidate your daily tasks, goals, and communication into a
            single, . With our fast, you effortlessly save time and boost
            productivity. Download today and simplify your life!"
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-semibold mb-2">Social links</h1>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center justify-center gap-2 text-white">
              <FaTwitterSquare /> @CS — Twitter
            </li>
            <li className="flex items-center justify-center gap-2 text-white">
              <FaLinkedin />
              @CS — LinkedIn
            </li>
            <li className="flex items-center justify-center gap-2 text-white">
              <FaFacebook /> @CS — Facebook.com
            </li>
            <li className="flex items-center justify-center gap-2 text-white">
              <FaMailBulk />
              support@cst.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center  text-white text-sm mt-8">
        © 2025 Ripa Sarkar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
