import { stars } from "../variables/stars";
import {
  Avatar,
  Comment,
  NameUser,
  RatingStarList,
  ReviewsHeader,
  ReviewsList,
} from "./Reviews.styled";
import icons from "../../img/sprite.svg";

export const Reviews = ({ adverd }) => {
  return (
    <ReviewsList>
      {adverd.reviews.map((review, idx) => (
        <li key={idx}>
          <ReviewsHeader>
            <Avatar>{review.reviewer_name.charAt(0)}</Avatar>
            <div>
              <NameUser>{review.reviewer_name}</NameUser>
              <RatingStarList>
                {stars.map((star, idx) => (
                  <li key={idx}>
                    {star > review.reviewer_rating ? (
                      <svg width="16" height="16">
                        <use href={icons + "#icon-star-default"}></use>
                      </svg>
                    ) : (
                      <svg width="16" height="16">
                        <use href={icons + "#icon-star-fill"}></use>
                      </svg>
                    )}
                  </li>
                ))}
              </RatingStarList>
            </div>
          </ReviewsHeader>
          <Comment>{review.comment}</Comment>
        </li>
      ))}
    </ReviewsList>
  );
};
