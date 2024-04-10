import React from "react";

const NotFound = () => {
  return (
    <div className="cursor-default mt-24">
      <div className=" flex flex-col lg:flex-row px-6 lg:mb-12 lg:px-32 lg:h-[80dvh]">
        <div className=" mb-12 lg:mb-0 mx-6 lg:mx-0 lg:ml-16 lg:w-[45] flex-col md:flex py-6 h-[100%] content-center justify-around ">
          <div>
            <h1 className=" mb-8  text-5xl xl:text-6xl font-bold text-[#EB8401] xl:leading-tight duration-1000 animate-in slide-in-from-top-96 ease-in">
              404 Page not found.
            </h1>
          </div>

          <div className=" duration-1000 animate-in slide-in-from-right-96 ease-in">
            <h1 className="mb-6 lg:text-2xl font-bold ">
              Ahoy there, lost wanderer of the digital seas!
            </h1>
            <h1 className="mb-16 lg:text-1xl font-semibold text-slate-500">
              It seems you've stumbled upon the infamous Error 404 island, where
              lost web pages find refuge in the vast ocean of cyberspace. Fear
              not, for you are not alone in this quirky adventure! Take a moment
              to catch your breath and ponder the whimsical mysteries of the
              interwebs. Maybe you took a wrong turn at the cyber-crossroads, or
              perhaps a mischievous pixel gnome has hidden your treasure map.
              Whatever the case, rest assured that our digital dolphins are on
              their way to guide you back to the sunny shores of the World Wide
              Web. So, sit back, relax, and enjoy this unexpected detour through
              the land of 404, where even the missing pages have a tale to tell.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
