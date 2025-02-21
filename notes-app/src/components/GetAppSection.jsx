import React from "react";

const GetAppSection = () => {
  return (
    <section
      id="getappContainer"
      className="relative pb-44 pt-16 bg-cover bg-center text-center text-white bg-fixed"
      style={{ backgroundImage: "url('/src/assets/bg-texture2.jpg')" }}
    >
      <h2 className="text-4xl font-bold">Get App</h2>
      <div className="w-16 h-1 bg-white mx-auto my-4"></div>
      <h3 className="text-lg text-gray-200">
        Download My Diary from Google Play and get started!
      </h3>

      <div className="mt-8 flex justify-center">
        <a
          rel="nofollow"
          href="https://play.google.com/store/apps/details?id=com.adpog.diary"
          className="flex items-center gap-3 border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#8b0067] transition"
        >
          <i className="fab fa-android text-2xl"></i>
          <span className="text-lg font-semibold leading-5">
            Download for <br />
            <span className="text-sm font-normal">Android</span>
          </span>
        </a>
      </div>

      <div className="floatingPhone"></div>
    </section>
  );
};

export default GetAppSection;
