import { useEffect, useLayoutEffect, useState } from "react";
import { StarIcon } from "../../../icons";
import { Review } from "../../../types";
import { ReviewCard } from "./ReviewCard";

interface ReviewsContainerProps {
  reviewsList: Review[];
}

const calcColsReview = (colsCount: number, reviewsList: Review[]) => {
  const cols: Review[][] = Array.from({ length: colsCount }).map(() => []);

  reviewsList.forEach((review, index) => {
    const colIndex = index % colsCount;
    cols[colIndex].push(review);
  });

  return cols;
};

const getColsCount = (screenWidth: number) => {
  if (screenWidth > 1024) {
    return 3;
  }
  return 2;
};

const ReviewsContainer = ({ reviewsList }: ReviewsContainerProps) => {
  const [colsReview, setColsReview] = useState<Review[][]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const colsCount = getColsCount(screenWidth);
    const _colsReview = calcColsReview(colsCount, reviewsList);

    setColsReview(_colsReview);
  }, [reviewsList]);

  return (
    <section className="reviews_container container">
      <div className="reviews_title_container">
        <div className="reviews_title title">
          <h1>Loved by Our Users</h1>
          <p>
            Godman’s AI chatbot is built to grow and adapt as your business
            evolves, constantly improving sales tactics, and enhancing customer
            relationships!
          </p>
        </div>
      </div>
      <div className="reviews">
        {colsReview.map((col, index) => {
          return (
            <div className="review_column" key={index}>
              {col.map((review) => (
                <ReviewCard review={review} key={review.id} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { ReviewsContainer };
