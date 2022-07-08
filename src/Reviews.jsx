import { useState, useEffect } from "react";
import data from "./data";
import Review from "./Review";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleRandomReview = () => {
    const randIndex = Math.floor(Math.random() * data.length);

    randIndex !== index ? setIndex(randIndex) : handleRandomReview();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className="container">
      <Review {...data[index]} key={data[index].id} />

      <div className="btn-container">
        <span className="previous" onClick={() => handlePrevious()}>
          <FaChevronLeft />
        </span>

        <span className="next" onClick={() => handleNext()}>
          <FaChevronRight />
        </span>

        <button className="surprise-btn" onClick={handleRandomReview}>
          Surprise Me
        </button>
      </div>
    </section>
  );
};

export default Reviews;
