import React from "react";

const SupportSection = () => {
  return (
    <section id="supportContainer" className="py-16 text-center relative">
      {/* Top Triangle */}
      <img
        className="mx-auto triangleTop"
        src="/src/assets/tri-white-top.png"
        alt="Diary"
      />

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-[#666]">Support</h2>
      <div className="w-16 h-1 bg-[#8b0067] mx-auto my-4"></div>
      <h3 className="text-lg text-[#666]">
        For more info and support, feel free to contact us
      </h3>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-[#f1eded] p-6 rounded-lg shadow-md">
          <form
            name="sendmail2"
            id="sendmail2"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              className="w-full p-3 mb-4 border border-[#f1eded] rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email..."
              className="w-full p-3 mb-4 border border-[#f1eded] rounded"
              required
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Your Message..."
              className="w-full p-3 mb-4 border border-[#f1eded] rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="w-3/12 hover:bg-[#8b0067] hover:text-white text-[#666] py-3 rounded border-[#8b0067] border-2 transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-left text-[#8b0067]">
          <div className="flex items-center mb-4">
            <i className="fas fa-envelope text-[#8b0067] text-xl mr-3"></i>
            <a
              href="mailto:support@writenote.com"
              className="hover:text-[#666]"
            >
              support@writenote.com
            </a>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-globe text-[#8b0067] text-xl mr-3"></i>
            <a href="/" className="hover:text-[#666]">
              www.writenote.com
            </a>
          </div>
          <div className="flex items-center">
            <i className="fas fa-question text-[#8b0067] text-xl mr-3"></i>
            <a href="/faq" className="hover:text-[#666]">
              F.A.Q
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Triangle */}
      <img
        className="mt-16 absolute inset-x-0 mx-auto"
        src="/src/assets/tri-white-bot.png"
        alt="white triangle background"
      />
    </section>
  );
};

export default SupportSection;
