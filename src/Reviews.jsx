import { useState } from "react";
import data from "./data";
import Review from "./Review";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  return (
    <section>
      <Review {...data[index]} key={data[index].id} />
      <div className="btn-container"></div>
    </section>
  );
};

export default Reviews;
