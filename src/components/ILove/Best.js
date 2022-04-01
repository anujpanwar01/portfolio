import React from "react";
import data from "./bestData";
import Card from "./BestCard";

const card = function (ele) {
  return (
    <Card
      key={ele.id}
      src={ele.src}
      icon={ele.icon}
      title={ele.title}
      describe={ele.describe}
      num={ele.num}
    />
  );
};

// console.log(ele);
function Love() {
  return (
    <section className="cards">
      <h3 className="section-heading card-heading">Things I Love...</h3>
      <div className="card-container"> {data.map(card)}</div>
    </section>
  );
}

export default Love;
