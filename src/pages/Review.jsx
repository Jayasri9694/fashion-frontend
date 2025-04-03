import React from "react";
import "./Review.css";

const reviews = [
  { name: "Alice", comment: "Great quality and fast delivery!" },
  { name: "John", comment: "Loved the fashion trends. Will buy again!" },
  { name: "Emma", comment: "Affordable and stylish, highly recommended!" }
];

const Review = () => {
  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <p>Read what our customers have to say about our products!</p>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <strong>{review.name}</strong>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
