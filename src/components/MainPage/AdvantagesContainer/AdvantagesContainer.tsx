import { Advantage } from "../../../types";
import { AdvantageCard } from "./AdvantageCard";

interface AdvantagesContainerProps {
  advantagesList: Advantage[];
}

function AdvantagesContainer({ advantagesList }: AdvantagesContainerProps) {
  return (
    <section className="advantages_container container">
      <div className="advantages_title title">
        <h1>Rise with AI-powered Sales</h1>
        <p>
          Welcome to the world of Godman.AI — the powerful chatbot constructor
          for businesses that wants to make learning and selling customer
          products a breeze. Unleash the power of AI to take your business to
          new heights!
        </p>
      </div>
      <div className="advantages">
        {advantagesList.map((advantage) => (
          <AdvantageCard advantage={advantage} key={advantage.id} />
        ))}
      </div>
    </section>
  );
}

export { AdvantagesContainer };
