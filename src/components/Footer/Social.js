// import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarkedAlt, FaVoicemail, FaPhoneAlt } from "react-icons/fa";
import "./social.css";

function Social() {
  return (
    <div className="social">
      <div>
        <span>
          <FaMapMarkedAlt size={24} />
        </span>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.google.com/maps/place/Bhania+Wala,+Uttarakhand+248140/@30.1842912,78.1495078,15.31z/data=!4m5!3m4!1s0x390925255ec8f53b:0x1f8480613f59a4d9!8m2!3d30.1842339!4d78.1443436"
        >
          Bhaniyawala, Dehradun 248140
        </a>
      </div>
      <div>
        <span>
          <FaVoicemail size={24} />
        </span>
        <a href="mailto:anujpanwar7911@gmail.com">anujpanwar7911@gmail.com</a>
      </div>
      <div>
        <span>
          <FaPhoneAlt size={24} />
        </span>
        <a href="tel:9634111164">+91 9634111164</a>
      </div>
    </div>
  );
}
export default Social;
