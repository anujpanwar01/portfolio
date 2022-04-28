import SocialContact from "../../components/social-contact/social-contact.component";
import ContactForm from "../../components/form-contact/contact-form.component";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import CustomLink from "../../components/custom-link/custom-link.component";
import { SectionHeading } from "../../global-styles/common.styles";
import { FooterContainer, Contact } from "./footer.styles";
const FooterSection = () => {

  const { currentTheme } = useContext(ThemeContext);
  
  return (
    <FooterContainer id="footer">
      <SectionHeading currenttheme={currentTheme}>Contact Me!</SectionHeading>
      <Contact>
        <SocialContact />
        <ContactForm />
      </Contact>
      <p>
        Copyright &copy; {new Date().getFullYear()} by{" "}
        <strong>
          <CustomLink to="https://twitter.com/anujpanwar7911">
            Anuj Panwar
          </CustomLink>{" "}
        </strong>{" "}
      </p>
    </FooterContainer>
  );
};

export default FooterSection;
