import { Carousel, Typography } from "@material-tailwind/react";
import { ComplexNavbar } from "./Navbar";
import ExtraLine from "./ExtraLine";
import TopHeader from "./TopHeader";
const Header = () => {
  return (
    <div>
      <TopHeader />
      <ComplexNavbar />

      <Carousel autoplay loop className="">
      <div className="relative h-full w-full">
          <img
            src="../../public/Images/banner3.jpg"
            alt="Banner Image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 text-xl md:text-4xl"
              >
                Ecommerce Shop
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-2 opacity-80 text-sm md:text-md"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="../../public/Images/banner4.jpg"
            alt="Banner Image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 text-xl md:text-4xl"
              >
                Ecommerce Shop
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-2 opacity-80 text-sm md:text-md"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="../../public/Images/banner5.jpg"
            alt="Banner Image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 text-xl md:text-4xl"
              >
                Ecommerce Shop
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-2 opacity-80 text-sm md:text-md"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>

      <ExtraLine/>
    </div>
  );
};

export default Header;
