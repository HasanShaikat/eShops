import { Typography } from "@material-tailwind/react";
import {
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaMailBulk,
  FaShoppingCart,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import './Foote.css';

const Footer = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <section className="relative mt-48">
      <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 py-6 text-white pt-12">
        <div className="container mx-4 mx-auto grid grid-cols-1 sm:gird-cols-2 md:grid-cols-4 gap-4">
          <div>
            <a
              href="#"
              className="flex items-center justify-center text-gray-200"
            >
              <FaShoppingCart className="w-20 sm:w-24 md:96 h-full" />
            </a>
            <Typography variant="small" className="text-center">
              Company Slogan
            </Typography>
          </div>

          <div className="mx-auto border-t md:border-none">
            <Typography variant="h6" className="py-2">
              Shop
            </Typography>
            <div className="grid grid-cols-1 gap-y-2">
              <Typography variant="small">Cream</Typography>
              <Typography variant="small">Shampoo</Typography>
              <Typography variant="small">Hair Oil</Typography>
              <Typography variant="small">Body Cream</Typography>
            </div>
          </div>

          <div className="mx-auto border-t md:border-none">
            <Typography variant="h6" className="py-2">
              Company
            </Typography>
            <div className="grid grid-cols-1 gap-y-2">
              <Typography variant="small">Our Story</Typography>
              <Typography variant="small">Products</Typography>
              <Typography variant="small">Testimonial</Typography>
              <Typography variant="small">FAQ</Typography>
              <Typography variant="small">Contact</Typography>
            </div>
          </div>

          <div className="mt-4 md:w-full w-2/4 mx-auto">
            <Typography>Payment Getway </Typography>
            <div className="py-2 flex gap-x-4">
              <FaWallet /> <FaCcVisa />
              <FaCcMastercard />
            </div>
            <div className="mt-8">
              Social Link
              <div className="flex gap-4 pt-2">
                <a href="facebook.com" target="_blank" className="text-xl">
                  <FaFacebook />
                </a>
                <a href="facebook.com" target="_blank" className="text-xl">
                  <FaWhatsapp />
                </a>
                <a href="facebook.com" target="_blank" className="text-xl">
                  <FaMailBulk />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="absolute p-6 bg-white w-2/4 rounded shadow-2xl border-t-2 border-blue-100 text-blue-700" id="subscribe"
        
      >
        <Typography variant="h6" className="pb-2 sm:w-full w-3/4 mx-auto">
          Get The Latest News & Offer
        </Typography>

        <div className="">
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={onChange}
            className="w-32 sm:w-full"
            containerProps={{
              className: "min-w-0 ",
            }}
          />
          <Button
            className="w-full mt-3 bg-blue-600"
            disabled={!email}
            size="sm"
          >
            Subscribe
          </Button>
        </div>
      </div>

      <div className="bg-white py-1 text-center">
        <Typography variant="small">
          Copyright &copy; 2023 || Designed by <i className="font-bold text-blue-700 text-md"><a href="linkedin.com">MEHEDI</a></i>
        </Typography>
      </div>
    </section>
  );
};

export default Footer;
