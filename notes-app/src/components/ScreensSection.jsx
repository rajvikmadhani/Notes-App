import React, { useState } from "react";

const screensData = [
  {
    id: 1,
    img: "/src/assets/screen1.png",
    bigImg: "/src/assets/screen1big.png",
    title: "Password protection",
    category: "basic",
  },
  {
    id: 2,
    img: "/src/assets/screen2.png",
    bigImg: "/src/assets/screen2big.jpg",
    title: "Emojis",
    category: "basic",
  },
  {
    id: 3,
    img: "/src/assets/screen6.png",
    bigImg: "/src/assets/screen6big.png",
    title: "Search",
    category: "basic",
  },
  {
    id: 4,
    img: "/src/assets/screen3.png",
    bigImg: "/src/assets/screen3big.png",
    title: "Adjust font and colors",
    category: "personalize",
  },
  {
    id: 5,
    img: "/src/assets/screen5.png",
    bigImg: "/src/assets/screen5big.png",
    title: "Daily reminder",
    category: "personalize",
  },
  {
    id: 6,
    img: "/src/assets/screen4.png",
    bigImg: "/src/assets/screen4big.png",
    title: "Easy to use",
    category: "basic",
  },
  {
    id: 7,
    img: "/src/assets/screen7.png",
    bigImg: "/src/assets/screen7big.png",
    title: "Menu and functions",
    category: "personalize",
  },
  {
    id: 8,
    img: "/src/assets/screen8.png",
    bigImg: "/src/assets/screen8big.png",
    title: "Login, sync, and import notes",
    category: "personalize",
  },
];

const ScreensSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter data based on selected category
  const filteredScreens =
    activeCategory === "all"
      ? screensData
      : screensData.filter((screen) => screen.category === activeCategory);

  // Pagination logic (only for "all" category)
  const totalPages =
    activeCategory === "all" ? Math.ceil(screensData.length / itemsPerPage) : 1;
  const paginatedScreens =
    activeCategory === "all"
      ? filteredScreens.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : filteredScreens;

  return (
    <section
      id="screenContainer"
      className="relative py-16 bg-white text-center"
    >
      {/* Top Triangle */}
      <img
        className="mx-auto triangleTop"
        src="/src/assets/tri-white-top.png"
        alt="Diary"
      />

      <h2 className="text-4xl font-bold  text-[#666]">Screens</h2>
      <div className="w-16 h-1 bg-[#8b0067] mx-auto my-4"></div>
      <h3 className="text-lg  text-[#666]">See what's included in the App</h3>

      {/* Filter Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        {["all", "basic", "personalize"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeCategory === category
                ? "bg-[#8b0067] text-white border-[#8b0067]"
                : "border-gray-400 text-[#666] hover:bg-purple-100"
            }`}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1); // Reset pagination on category change
            }}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Screens Gallery */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {paginatedScreens.map((screen) => (
          <div key={screen.id} className="flex justify-center items-center">
            <div className="relative group text-center">
              <a href={screen.bigImg} data-lightbox={`screens${screen.id}`}>
                <img
                  src={screen.img}
                  alt={screen.title}
                  className="rounded-lg shadow-lg hover:shadow-xl transition"
                />
              </a>
              <span className="block mt-2  text-[#666] font-semibold">
                {screen.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination (Only for "All" category) */}
      {activeCategory === "all" && totalPages > 1 && (
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                currentPage === index + 1
                  ? "bg-[#8b0067] text-white"
                  : "bg-gray-200  text-[#666] hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ScreensSection;
