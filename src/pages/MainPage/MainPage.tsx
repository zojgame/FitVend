import "./MainPage.css";
import { AdvantagesContainer } from "../../components";
import { advantagesList, reviewsList } from "../../consts";
import { ReviewsContainer } from "../../components/MainPage/ReviewsContainer/ReviewsContainer";

function MainPage() {
  return (
    <div className="Main">
      <AdvantagesContainer advantagesList={advantagesList} />
      <ReviewsContainer reviewsList={reviewsList} />
    </div>
  );
}

export { MainPage };
