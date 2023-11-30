import { Card, Typography } from "@material-tailwind/react";

const DisplayProduct = () => {
  return (
    <div className="container p-8 mx-auto ">
      <div className="mb-6 text-center">
        <Typography variant="h4">Feater Product</Typography>
        <Typography variant="small">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Voluptates aspernatur labore asperiores laborum eius nemo ipsam aut saepe ut eaque.</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="md:col-span-2 col-span-1">
          <img className="h-full" src="/Images/card4.jpg" alt="" />
        </Card>
        <div className="md:grid-rows-2 grid-span-1">
          <Card className="">
            <img src="/Images/card1.jpg" alt="" />
          </Card>
          <Card className="">
            <img src="/Images/card2.jpg" alt="" />
          </Card>
        </div>
        <div className="md:grid-rows-2 grid-span-1">
          <Card className="">
            <img src="/Images/card3.jpg" alt="" />
          </Card>
          <Card className="">
            <img src="/Images/card1.jpg" alt="" />
          </Card>
        </div>
      </div>
      <div className="grid grid-rows-2"></div>
    </div>
  );
};

export default DisplayProduct;
