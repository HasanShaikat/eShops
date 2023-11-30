import { Typography } from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const TopHeader = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2">
            <div className="container mx-auto px-12 flex items-center justify-between">
                <div className="flex flex-col sm:flex-row text-white gap-x-4">
                    <Typography variant="small">info@eshops.com</Typography> ||
                    <Typography variant="small">+880 11009 9877</Typography>
                </div>
                <div className="flex gap-4 text-white">
                    <FaFacebook />
                    <MdMail />
                </div>
            </div>
        </div>
    );
};

export default TopHeader;