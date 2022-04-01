import { Component } from "react";
import education from "./education-data";
import EducationCard from "./Education-card";
// import { FaGraduationCap } from "react-icons/fa";
import "./education.scss";
class Education extends Component {
  render() {
    return (
      <section className="education">
        <h3 className="section-heading">Education</h3>
        <div>
          {education.map((data) => {
            return (
              <EducationCard
                key={data.id}
                title={data.title}
                year={data.year}
                describe={data.describe}
                college={data.college}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
export default Education;
