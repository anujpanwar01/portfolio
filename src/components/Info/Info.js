import CustomLink from "../custom-link/custom-link.component";
import "./info.scss";
import MyImage from "../Img/myimage.jpg";

import { themeHandler } from "../../theme-function/theme-handler";

function Info() {
  return (
    <div className="info">
      <div className="g"></div>
      <div className="img">
        <div className="f"></div>
        <img width={"100%"} src={MyImage} alt="Anuj Panwar" />
      </div>
      <div className="text">
        <h4>Who I am</h4>
        <h3>About Me</h3>
        <aside className="parent-p">
          Hello my name is <strong>Anuj Panwar</strong>, Passionate about
          Front-end Development. I'm from Dehradun Uttarakhand, India. I Love to
          learn new skills and think creative i'm a Fresher looking for the job.
          I build some projects to enhance my skills.
          <p>
            I build projects using HTML5, CSS3, SCSS, JAVASCRIPT, REACT JS and
            keep always looking for better SEO. I love create best visual effect
            and features which one attract the users.
          </p>
          <p>
            <strong style={{ color: " #00ff14" }}>
              {" "}
              “You define your own life. Don’t let other people write your
              script.”
              <br />— Oprah Winfrey
            </strong>
          </p>
        </aside>
        {/* <iframe
          src="./img/resume.zip"
          width="100%"
          height="500px"
          title="resume"
        >
          Download
        </iframe> */}
        <CustomLink
          className={`btn info-btn ${themeHandler(
            "btn-pink",
            "btn-black",
            "btn-default"
          )}`}
          target="_blank"
          rel="noreferrer"
          to="https://my.indeed.com/p/anujp-hskl1dp"
          download
        >
          Download CV
        </CustomLink>
      </div>
    </div>
  );
}
export default Info;
