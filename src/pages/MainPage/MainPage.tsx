import "./MainPage.css";
import { AdvantagesContainer } from "../../components";
import { advantagesList, reviewsList } from "../../consts";
import { ReviewsContainer } from "../../components/MainPage/ReviewsContainer/ReviewsContainer";

function MainPage() {
  return (
    <div className="Main">
      <AdvantagesContainer advantagesList={advantagesList} />
      <ReviewsContainer reviewsList={reviewsList} />
      <img src="/images/ellipse_1.png" alt="" className="ellipse_1" />
      <img src="/images/ellipse_2.png" alt="" className="ellipse_2" />
      <img src="/images/ellipse_3.png" alt="" className="ellipse_3" />
      <img src="/images/ellipse_4.png" alt="" className="ellipse_4" />
      <img src="/images/ellipse_5.png" alt="" className="ellipse_5" />
    </div>
  );
}

export { MainPage };
