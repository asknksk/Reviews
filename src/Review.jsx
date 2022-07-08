import React from "react";

const Review = ({ id, name, job, image, text }) => {
  return (
    <div className="single-review">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <h3>{job}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Review;
