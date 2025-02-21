import React, { useState } from "react";

const reviews = [
  {
    name: "Kristin Brown",
    location: "New York, USA",
    date: "May 25, 2016",
    text: "Easy to use, great to store those quick thoughts without having to keep up with post-its.",
    image: "/src/assets/review_image1.jpg",
  },

  {
    name: "Krystal Ann",
    location: "Mexico City, Mexico",
    date: "March 8, 2015",
    text: "I love this app. It's amazing, easy to use and helpful. The most important is it has great security. I use it every day!",
    image: "/src/assets/review_image3.jpg",
  },
  {
    name: "Claudia Kappel",
    location: "Hamburg, Germany",
    date: "September 28, 2016",
    text: "Extremely easy to use. Helps organize my daily activities as well as numerous other uses. I really love it!",
    image: "/src/assets/review_image4.jpg",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="reviewContainer"
      className="relative pb-44 pt-44 bg-cover bg-center text-center text-white bg-fixed"
      style={{ backgroundImage: "url('/src/assets/bg-texture1.jpg')" }}
    >
      <img
        class="triangleBottom"
        src="/src/assets/tri-gray-bot.png"
        alt="Diary"
      ></img>
      <h2 className="text-4xl font-bold">Reviews</h2>
      <div className="w-16 h-1 bg-white mx-auto my-4"></div>
      <h3 className="text-lg text-gray-200">
        Read what our diarists are saying about "My Note"
      </h3>

      <div className="mt-8 flex flex-col items-center">
        <div className="relative max-w-2xl p-6 bg-white text-gray-800 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <img
              src={reviews[activeIndex].image}
              alt={reviews[activeIndex].name}
              className="w-16 h-16 rounded-full border-2 border-[#8b0067]"
            />
            <div className="text-left">
              <p className="font-semibold text-lg">
                {reviews[activeIndex].name}
              </p>
              <p className="text-sm text-gray-500">
                {reviews[activeIndex].date} - {reviews[activeIndex].location}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[#666] italic">
            "{reviews[activeIndex].text}"
          </p>
          <div className="mt-2 flex justify-center">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-[#666] text-lg">
                {star}
              </span>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="mt-4 flex space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === activeIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
