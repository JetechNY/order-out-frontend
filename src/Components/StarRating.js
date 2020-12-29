import React from "react"
import {FaStar} from "react-icons/fa"


const StarRating = () => {

    // console.log("rating", this.props)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                <FaStar className="star" size = {20} />
                )
            })}
        </div>
    )
}

export default StarRating;
