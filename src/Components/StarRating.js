import React from "react"
import {FaStar} from "react-icons/fa"


const StarRating = () => {

    // console.log("rating", this.props.rating)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                <FaStar className="star" color = {"#ffc107"} size = {20} />
                )
            })}
        </div>
    )
}

export default StarRating;

// color {"#e4e5e9"}
