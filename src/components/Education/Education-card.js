import { Component } from "react";

class EducationCard extends Component {
  render() {
    const { id, title, year, describe } = this.props;
    return (
      <div className="education-card" key={id}>
        <div className="education-card-2">
          <span></span>
          <div></div>
        </div>
        <div className="education-card-1">
          {/* <div className="education-card-1"> */}
          <h2>{title}</h2>
          <p>{year}</p>

          <p>{describe}</p>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default EducationCard;
