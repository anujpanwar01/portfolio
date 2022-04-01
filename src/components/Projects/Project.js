import { themeHandler, btn } from "../../theme-function/theme-handler";
import CustomLink from "../custom-link/custom-link.component";
import "./project.css";
function Project() {
  return (
    <section className="projects">
      <h3 className="section-heading">Projects</h3>
      <div className="project">
        <div className="videos">
          <video height={350} controls muted>
            <source
              type="video/mp4"
              src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
            />
          </video>
        </div>
        <div className="project-describe">
          <h3>Bhagirathi Travels</h3>
          <p>10/01/2022</p>
          <p style={{ margin: "0 0 4rem" }}>
            {" "}
            Notice the use of %PUBLIC_URL% in the tags above. It will be
            replaced with the URL of the `public` folder during the build. Only
            files inside the `public` folder can be referenced from the HTML.
            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico"
            will work correctly both with client-side routing and a non-root
            public URL. Learn how to configure a non-root public URL by running
            `npm run build`.
          </p>
          <CustomLink
            className={`btn ${themeHandler(...btn)}`}
            target="_blank"
            rel="noreferrer"
            to="https://bhagirathi-travles.netlify.app/"
          >
            Live view
          </CustomLink>
          <CustomLink
            className={`btn ${themeHandler(...btn)}`}
            target="_blank"
            rel="noreferrer"
            to="https://github.com/anujpanwar01/Bhagirathi-Travels"
          >
            Source code
          </CustomLink>
        </div>
      </div>
    </section>
  );
}
export default Project;
