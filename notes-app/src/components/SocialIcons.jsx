import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="my-8">
      {/* Facebook Icon */}
      <FontAwesomeIcon
        icon={faFacebook}
        className="mx-3 text-4xl text-white hover:text-[#8b0067] transition"
      />

      {/* Twitter Icon */}
      <FontAwesomeIcon
        icon={faTwitter}
        className="mx-3 text-4xl text-white hover:text-[#8b0067] transition"
      />

      {/* Telegram Icon */}
      <FontAwesomeIcon
        icon={faTelegram}
        className="mx-3 text-4xl text-white hover:text-[#8b0067] transition"
      />
    </div>
  );
};

export default SocialIcons;
