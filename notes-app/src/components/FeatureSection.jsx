import {
  FaUnlockAlt,
  FaPalette,
  FaShareAlt,
  FaSync,
  FaWifi,
  FaSearch,
  FaGlobe,
  FaFileAlt,
  FaCloud,
  FaBell,
} from "react-icons/fa";

const featuresLeft = [
  {
    icon: <FaUnlockAlt />,
    title: "Codelock Security",
    description: "Secure your diary with a personal PIN code or password.",
  },
  {
    icon: <FaPalette />,
    title: "Custom Colors",
    description:
      "Apply your favorite background color, font-style, and text-color.",
  },
  {
    icon: <FaShareAlt />,
    title: "Share with friends",
    description:
      "Share notes with friends via Mail, Facebook, Twitter, SMS and more.",
  },
  {
    icon: <FaSync />,
    title: "Synchronize Devices",
    description: "Sync entries between Android devices.",
  },
  {
    icon: <FaWifi />,
    title: "Write Online & Offline",
    description:
      "Write diary entries, anywhere and anytime. No Internet required.",
  },
];

const featuresRight = [
  {
    icon: <FaSearch />,
    title: "Search",
    description: "Quickly find old entries by search.",
  },
  {
    icon: <FaGlobe />,
    title: "Write Online",
    description:
      "Access your diary on our Website. Read & write entries, backup, etc.",
  },
  {
    icon: <FaFileAlt />,
    title: "Create Backups",
    description: "Download all your entries as plain text, just in case...",
  },
  {
    icon: <FaCloud />,
    title: "Cloud storing!",
    description: "Keep your notes synced with our cloud (works as backup).",
  },
  {
    icon: <FaBell />,
    title: "Daily reminder",
    description: "Setup a reminder to notify you when you forget to write.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl text-[#666] font-bold">My Note</h2>
      <div className="w-16 h-1 bg-[#8b0067] mx-auto mt-2 mb-4"></div>
      <h3 className="text-[#666] mb-8 text-lg">
        Learn more about in-app features
      </h3>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Left Features */}
        <div className="space-y-6">
          {featuresLeft.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row-reverse items-center space-x-4 space-x-reverse"
            >
              <div className="p-7 bg-white text-[#8b0067] rounded-full text-2xl animate-spin">
                {feature.icon}
              </div>
              <div className="text-right">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-[#666] text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="/src/assets/phone.gif"
            alt="Diary for Android"
            className="w-56 md:w-72"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-6">
          {featuresRight.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="p-7 text-2xl bg-white text-[#8b0067] rounded-full animate-spin">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-[#666] text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
