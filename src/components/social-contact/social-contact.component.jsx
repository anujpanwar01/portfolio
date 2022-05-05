import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import CustomLink from "../custom-link/custom-link.component";
import { FaMapMarkedAlt, FaVoicemail, FaPhoneAlt } from "react-icons/fa";
import { SocialContainer, IconContainer } from "./social-contact.styles";

function SocialContact() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <SocialContainer>
      <div>
        <IconContainer currenttheme={currentTheme}>
          <FaMapMarkedAlt size={24} />
        </IconContainer>

        <CustomLink
          $footerLink
          $navLink="nav-link"
          rel="noreferrer"
          target="_blank"
          currenttheme={currentTheme}
          to="https://www.google.com/maps/place/Bhania+Wala,+Uttarakhand+248140/@30.1842912,78.1495078,15.31z/data=!4m5!3m4!1s0x390925255ec8f53b:0x1f8480613f59a4d9!8m2!3d30.1842339!4d78.1443436"
        >
          Bhaniyawala, Dehradun 248140
        </CustomLink>
      </div>
      <div>
        <IconContainer currenttheme={currentTheme}>
          <FaVoicemail size={24} />
        </IconContainer>
        <CustomLink
          $footerLink
          $navLink="nav-link"
          to="mailto:anujpanwar7911@gmail.com"
          currenttheme={currentTheme}
        >
          anujpanwar7911@gmail.com
        </CustomLink>
      </div>
      <div>
        <IconContainer currenttheme={currentTheme}>
          <FaPhoneAlt size={24} />
        </IconContainer>
        <CustomLink
          $footerLink
          $nav-link="nav-link"
          to="tel:9634111164"
          currenttheme={currentTheme}
        >
          +91 9634111164
        </CustomLink>
      </div>
    </SocialContainer>
  );
}
export default SocialContact;
