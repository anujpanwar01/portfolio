import SocialContact from "../../components/social-contact/social-contact.component";
import ContactForm from "../../components/form-contact/contact-form.component";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/theme.context";
import CustomLink from "../../components/custom-link/custom-link.component";
import { SectionHeading } from "../../global-styles/common.styles";
import { FooterContainer, Contact } from "./footer.styles";
import useOnScreen from "../../hooks/use-onScreen";
const FooterSection = () => {
  const footerRef = useRef();
  const { currentTheme } = useContext(ThemeContext);
  const footerOnScreen = useOnScreen(footerRef);
  const [footerRefValue, setFooterRefValue] = useState(false);

  useEffect(() => {
    if (!footerRefValue) {
      setFooterRefValue(footerOnScreen);
    }
  }, [footerRefValue, footerOnScreen]);

  return (
    <FooterContainer
      id="footer"
      ref={footerRef}
      className={footerRefValue ? "" : "scroll-Top"}
    >
      {footerRefValue && (
        <>
          <SectionHeading currenttheme={currentTheme}>
            Contact Me!
          </SectionHeading>
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
        </>
      )}
    </FooterContainer>
  );
};

export default memo(FooterSection);
