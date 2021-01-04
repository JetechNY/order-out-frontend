import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating(props) {
  const { rating } = props;
  return (
    <div className="rating">
      <span>
        {rating >= 20 ? (
          <FaStar className="star" color={"#ffc107"} size={20} />
        ) : rating >= 10 ? (
          <FaStarHalfAlt className="star" color={"#ffc107"} size={20} />
        ) : (
          <FaRegStar className="star" color={"#ffc107"} size={20} />
        )}

        {rating >= 40 ? (
          <FaStar className="star" color={"#ffc107"} size={20} />
        ) : rating >= 30 ? (
          <FaStarHalfAlt className="star" color={"#ffc107"} size={20} />
        ) : (
          <FaRegStar className="star" color={"#ffc107"} size={20} />
        )}

        {rating >= 60 ? (
          <FaStar className="star" color={"#ffc107"} size={20} />
        ) : rating >= 50 ? (
          <FaStarHalfAlt className="star" color={"#ffc107"} size={20} />
        ) : (
          <FaRegStar className="star" color={"#ffc107"} size={20} />
        )}

        {rating >= 80 ? (
          <FaStar className="star" color={"#ffc107"} size={20} />
        ) : rating >= 70 ? (
          <FaStarHalfAlt className="star" color={"#ffc107"} size={20} />
        ) : (
          <FaRegStar className="star" color={"#ffc107"} size={20} />
        )}

        {rating >= 100 ? (
          <FaStar className="star" color={"#ffc107"} size={20} />
        ) : rating >= 90 ? (
          <FaStarHalfAlt className="star" color={"#ffc107"} size={20} />
        ) : (
          <FaRegStar className="star" color={"#ffc107"} size={20} />
        )}
      </span>
    </div>
  );
}
