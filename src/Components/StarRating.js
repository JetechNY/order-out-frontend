import React from "react";
import { FaStar } from "react-icons/fa";
import { Rating } from 'semantic-ui-react'

const StarRating = () => {
  // console.log("rating", this.props.rating)

  return (
    <div>

      {/* <Rating icon='star' size='large' defaultRating={0} maxRating={5} />
      <hr>
      </hr> */}

      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return <FaStar className="star" color={"#ffc107"} size={20} />;
      })}

    </div>
  );
};

export default StarRating;

// gray color {"#e4e5e9"}
