import React from "react";
import certOne from "../../public/images/certs/certOne.png";
import certTwo from "../../public/images/certs/certTwo.png";
import certThree from "../../public/images/certs/certThree.png";
import certFour from "../../public/images/certs/certFour.png";
import certFive from "../../public/images/certs/certFive.png";
import certSix from "../../public/images/certs/certSix.png";
import certSeven from "../../public/images/certs/certSeven.png";
import Image from "next/image";

const About = () => {
  const images = [
    certOne,
    certTwo,
    certThree,
    certFour,
    certFive,
    certSix,
    certSeven,
  ];

  return (
    <div className="cursor-default mt-24">
      <div className=" items-center flex flex-col-reverse gap-12 lg:flex-row px-6 lg:px-32 py-12 lg:py-12  lg:max-h-[90dvh]  bg-gradient-to-r from-[#F9B301] to-[#EB8401] ">
        <div className=" lg:w-[50%]">
          <h1 className=" font-Kanit text-white text-5xl mb-3 ">
            Marnus van Vuuren
          </h1>
          <h2 className=" font-Kanit text-white text-xl">
            Director & Western Cape Branch Manager
          </h2>
          <h5 className=" mt-10 text-white  ">
            Network engineer is the name, networks are my game! My knowledge,
            passion and charms guarantee that not only will your problems be
            solved, but you can enjoy my company as well.
          </h5>
        </div>
        <div
          className=" justify-self-center self-center w-[100%] lg:w-[50%] min-h-64 bg-cover bg-center overflow-hidden lg:h-[70dvh]  "
          style={{
            backgroundImage: `url(/images/aboutus-image.jpg)`,
          }}
        />
      </div>
      <div>
        <div className=" flex flex-wrap gap-3 md:gap-5 py-16 px-3 justify-center">
          {images.map((image, index) => (
            <Image key={index} width={140} src={image} alt="Certificate One" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
