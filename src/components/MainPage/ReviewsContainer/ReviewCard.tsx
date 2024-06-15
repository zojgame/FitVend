import { StarIcon } from "../../../icons";
import { Review } from "../../../types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="review_card">
      <div className="review_star_container">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div className="review_card_desc">{review.text}</div>
      <div className="review_username">{`-${review.userName}`}</div>
    </div>
  );
};
export { ReviewCard };
