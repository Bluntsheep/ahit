import Image from "next/image";
import React from "react";
import routerImage from "../../public/images/router-image.png";
import DetailsComponent from "@/components/DetailsComponent";

const Networking = () => {
  const componentInfo = [
    {
      image: "ethernetSocket-image.jpeg",
      heading: "NETWORK POINT INSTALLATION",
      info: "Network point installation is a critical component of establishing a robust and efficient communication infrastructure. Whether it's for a small office or a large enterprise, ensuring seamless connectivity is paramount for productivity and operational effectiveness. Companies invest in network point installations to facilitate data transfer, enable access to shared resources, and support various communication channels. Professional installation services not only guarantee proper placement and configuration of network points but also ensure adherence to industry standards for security and performance. Companies can minimize downtime, optimize network efficiency, and lay a solid foundation for future scalability and growth.",
    },
    {
      image: "networkConfiguration-image.jpg",
      heading: "NETWORK CONFIGURATION",
      info: "Network configuration is the backbone of digital operations, enabling seamless connectivity and efficient data flow across all organizational units. Properly configuring network devices such as routers, switches, and firewalls ensures optimal performance, security, and reliability. Companies prioritize network configuration to support various business functions, including data transfer, VoIP communications, cloud services access, and more. By implementing best practices and adhering to industry standards, companies can mitigate security risks, prevent data breaches, and maintain compliance with regulatory requirements. Additionally, proactive network configuration management enables swift troubleshooting and resolution of issues, minimizing downtime and maximizing productivity. Overall, investing in robust network configuration is essential for modern businesses to thrive in today's interconnected digital landscape.",
    },
    {
      image: "wirelessNetwork-image.jpg",
      heading: "WIRELESS NETWORK",
      info: "A wireless rollout represents a strategic initiative aimed at enhancing connectivity, productivity, and flexibility within the organization. By deploying wireless infrastructure, companies can empower their workforce with mobility, allowing employees to access critical resources and collaborate seamlessly from anywhere within the premises. A well-executed wireless rollout involves meticulous planning, including site surveys, coverage analysis, and interference mitigation strategies, to ensure comprehensive coverage and reliable performance. Moreover, companies prioritize security measures such as encryption protocols and access controls to safeguard sensitive data transmitted over the wireless network. A successful wireless rollout not only improves operational efficiency but also lays the groundwork for future technologies and innovations, enabling businesses to adapt and thrive in an increasingly digital and mobile-centric landscape.",
    },
    {
      image: "structuredCabling-image.jpg",
      heading: "STRUCTURED CABLING",
      info: "Structured cabling, forms the foundation of a reliable and scalable network infrastructure. It involves the meticulous installation of standardized cabling systems, including copper and fiber optic cables, along with associated hardware such as racks, patch panels, and connectors. Companies invest in structured cabling to support various communication needs, including data, voice, and video transmission, while ensuring high performance, minimal downtime, and ease of maintenance. A well-designed structured cabling system enables efficient data flow, simplifies network management, and accommodates future technology upgrades with ease. By adhering to industry standards and best practices, companies can optimize their network connectivity, enhance productivity, and lay a resilient groundwork for their evolving business needs.",
    },
  ];

  return (
    <div className="cursor-default mt-24">
      <div className=" relative flex flex-col md:flex-row px-6 py-10 md:px-32  md:py-32  overflow-hidden bg-gradient-to-r from-[#F9B301] to-[#EB8401] ">
        <div className=" md:w-[50dvw] mb-6 md:mb-0">
          <h1 className=" font-Kanit text-white text-5xl">Network Services</h1>
          <h5 className=" mt-10 font-semibold md:w-[40dvw]">
            In today's day and age a stable network forms the backbone of a
            business. Ensuring you and your company stays online and secure will
            allow you to focus on other issues, such as which flavour of cake to
            get on the next person's birthday.
          </h5>
        </div>
        <div>
          <Image
            className=" h-auto w-[100%]"
            src={routerImage}
            alt="Router Image"
          />
        </div>
      </div>
      <div className=" px-6 md:px-32 py-12 text-center bg-gradient-to-r from-slate-200 to-slate-50">
        <h1 className=" font-Kanit text-transparent bg-clip-text bg-gradient-to-br from-[#EB8401] to-[#F9B301] text-4xl mb-6 md:mb-24">
          NETWORKING IS WHAT WE DO
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

export default Networking;

// {` font-semibold text-3xl text-[#EB8401] ${
//   hhh ? "text-green-500" : `text-blue-500`
// }`}
