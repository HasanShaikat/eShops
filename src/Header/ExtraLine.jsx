import { ArrowPathIcon, CurrencyBangladeshiIcon, TruckIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { MdSupportAgent } from "react-icons/md";

const ExtraLine = () => {
  return (
    <div className="py-2 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white container w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-12 py-12 sm:py-8 rounded place-items-center shadow-xl animate__animated animate__fadeInLeft animate__slower" >
      <div className="border-l border-r px-4 text-center">
        <span className="flex justify-center">
          <TruckIcon className="w-12 text-gray-700 pb-2" />
        </span>
        <Typography variant="h6" className="text-gray-900 font-md">Free Shipping</Typography>
        <Typography variant="small" color="gray">Free Shipping on all order</Typography>
      </div>

      <div className="border-l border-r px-4 text-center">
        <span className="flex justify-center">
          <ArrowPathIcon className="w-12 text-gray-700 pb-2" />
        </span>
        <Typography variant="h6" className="text-gray-900 font-md">Return Policy</Typography>
        <Typography variant="small" color="gray">Free Shipping on all order</Typography>
      </div>

      <div className="border-l border-r px-4 text-center">
        <span className="flex justify-center">
          <MdSupportAgent  className="text-gray-700 w-full h-12 mb-2" />
        </span>
        <Typography variant="h6" className="text-gray-900 font-md">24/7 Support</Typography>
        <Typography variant="small" color="gray">Free Shipping on all order</Typography>
      </div>

      <div className="border-l border-r px-4 text-center">
        <span className="flex justify-center">
          <CurrencyBangladeshiIcon className="w-12 text-gray-700 pb-2" />
        </span>
        <Typography variant="h6" className="text-gray-900 font-md">Secure Payment</Typography>
        <Typography variant="small" color="gray">Free Shipping on all order</Typography>
      </div>
    </div>
    </div>
  );
};

export default ExtraLine;
