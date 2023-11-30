import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const OfferLine = () => {
    return (
        <div className="py-12 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center px-4 gap-4 text-center">
                <div>
                    <Typography variant="h4" color="white">
                        Get 25% Off On Your First Purchase!
                    </Typography>
                </div>
                <div>
                    <button className="flex border items-center gap-x-4 px-8 py-2 rounded bg-white"> <ShoppingCartIcon className="w-4" /> Shop Now</button>
                </div>
            </div>            
        </div>
    );
};

export default OfferLine;