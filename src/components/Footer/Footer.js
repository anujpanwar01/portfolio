import Contact from "./Contact";
import Social from "./Social";

import "./footer.css";

function Footer() {
  return (
    <section className="footer" id="footer">
      <h3 className="footer-heading section-heading">Contact Me!</h3>
      <div className="contact">
        <Social />
        <Contact />
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()} by{" "}
        <strong>
          <a href="https://twitter.com/anujpanwar7911">Anuj Panwar</a>{" "}
        </strong>{" "}
      </p>
      {/* </div> */}
    </section>
  );
}

export default Footer;
