import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./starRating.css";

export default function StarRating({ rating, index }) {
  const numStars = Math.round(parseFloat(rating) / 2);

  let stars;
  switch (numStars) {
    case 5:
      stars = Array(5).fill(<FaStar />);
      break;
    case 4:
      stars = Array(4)
        .fill(<FaStar />)
        .concat(Array(1).fill(<FaRegStar />));
      break;
    case 3:
      stars = Array(3)
        .fill(<FaStar />)
        .concat(Array(2).fill(<FaRegStar />));
      break;
    case 2:
      stars = Array(2)
        .fill(<FaStar />)
        .concat(Array(3).fill(<FaRegStar />));
      break;
    default:
      stars = Array(1)
        .fill(<FaStar />)
        .concat(Array(4).fill(<FaRegStar />));
  }

  return <div className="star-container">{stars}</div>;
}
