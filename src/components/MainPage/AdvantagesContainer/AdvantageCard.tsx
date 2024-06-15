import { LeafIcon } from "../../../icons/LeafIcon";
import { Advantage } from "../../../types";

interface AdvantageCardProps {
  advantage: Advantage;
}

function AdvantageCard({ advantage }: AdvantageCardProps) {
  return (
    <div className="advantage_card">
      <div className="advantage_card_title">
        <LeafIcon />
        <h3>{advantage.label}</h3>
      </div>
      <p className="advantage_card_desc">{advantage.description}</p>
    </div>
  );
}

export { AdvantageCard };
