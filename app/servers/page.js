import Image from "next/image";
import React from "react";
import serverImage from "../../public/images/servers-image.png";
import DetailsComponent from "@/components/DetailsComponent";

const Servers = () => {
  const componentInfo = [
    {
      image: "serverinstallation-image.jpg",
      heading: "SERVER INSTALLATIONS",
      info: "In ensuring optimal compatibility between our solutions and your business operations, we adopt a collaborative approach. Our methodology involves a thorough assessment of your requirements and the identification of areas for enhancement. Subsequently, we tailor our recommendations to seamlessly integrate the most suitable hardware solutions into your infrastructure. By prioritizing precision and alignment, we strive to ensure that the proverbial glove of our services fits your business impeccably, facilitating enhanced efficiency and productivity.",
    },
    {
      image: "serveMaintenance-image.jpg",
      heading: "SERVER MAINTENANCE",
      info: "As technology advances, it becomes imperative to regularly assess its functionality and efficiency. Implementing attentive maintenance practices is essential to uphold the seamless operation of your business, ensuring that systems continue to function smoothly, reliably emitting the necessary signals and notifications. By prioritizing such maintenance routines, businesses can safeguard against potential disruptions and maintain optimal performance levels.",
    },
    {
      image: "serverFirewall-image.jpg",
      heading: "FIREWALL IMPLEMENTATION",
      info: "A team of scientists diligently investigated the mathematical principles governing the correlation between malicious entities and effective firewall systems. Their findings underscored that a highly proficient firewall possesses the capability to safeguard a business's sensitive data from even the most formidable adversaries.",
    },
  ];

  return (
    <div className="cursor-default mt-24">
      <div className=" relative flex flex-col md:flex-row py-6 px-6 md:px-32  md:py-32  overflow-hidden bg-gradient-to-r from-[#F9B301] to-[#EB8401] ">
        <div className=" md:w-[50dvw] mb-6 md:mb-0">
          <h1 className=" font-Kanit text-white text-5xl ">Server Services</h1>
          <h5 className=" mt-10 font-semibold md:w-[40dvw]">
            A catchy name is one thing, being able to back that name up is a
            whole other game. Blasting your business into the 21st century is
            what we aim for when implementing powerful on-site servers.
          </h5>
        </div>
        <div>
          <Image
            className=" h-[100%] w-[auto]"
            src={serverImage}
            alt="Router Image"
          />
        </div>
      </div>
      <div className=" px-6 md:px-32 py-12 text-center bg-gradient-to-r from-slate-200 to-slate-50">
        <h1 className=" font-Kanit text-transparent bg-clip-text bg-gradient-to-br from-[#EB8401] to-[#F9B301] text-4xl mb-6 md:mb-24">
          SERVERS IS WHAT WE DO
        </h1>
        {componentInfo.map((info) => (
          <DetailsComponent
            key={info.heading}
            imgae={info.image}
            heading={info.heading}
            info={info.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Servers;
