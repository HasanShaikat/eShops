import { Card, CardBody, CardFooter, Rating, Typography } from "@material-tailwind/react";

const Testimonial = () => {
    return (
        <section className="container px-8 mx-auto" >
            <div className="mb-8 text-center">
                <Typography variant="h4">Our Happy Clients Say!</Typography>
                <Typography variant="small">
                    Lorem ipsum dolor sit amet consectetur.
                </Typography>
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
                <Card  className="shadow-xl ">
                                      
                    <CardBody >
                        <Rating  value={5} readonly/>
                        <Typography variant="small" className="mt-4 font-justify">
                        “You made it so simple. My new site is so much faster
                        and easier to work with than my old site. I just choose
                        the page, make the change.”
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">
                        Leslie Alexander
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                        Freelance React Developer
                      </p>
                    </div>
                    </CardFooter>
                </Card>

                <Card  className="shadow-xl ">
                                      
                    <CardBody>
                        <Rating value={5} readonly/>
                        <Typography variant="small" className="mt-4 font-justify">
                        “You made it so simple. My new site is so much faster
                        and easier to work with than my old site. I just choose
                        the page, make the change.”
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">
                        Leslie Alexander
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                        Freelance React Developer
                      </p>
                    </div>
                    </CardFooter>
                </Card>

                <Card  className="shadow-xl ">
                                      
                    <CardBody>
                        <Rating value={5} readonly/>
                        <Typography variant="small" className="mt-4 font-justify">
                        “You made it so simple. My new site is so much faster
                        and easier to work with than my old site. I just choose
                        the page, make the change.”
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">
                        Leslie Alexander
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                        Freelance React Developer
                      </p>
                    </div>
                    </CardFooter>
                </Card>
            </div>
            
        </section>
    );
};

export default Testimonial;