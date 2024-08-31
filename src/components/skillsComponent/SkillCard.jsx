import "./SkillCard.css";
import { DiGit } from "react-icons/di";

function SkillCard({ props }) {
  return (
    <>
      <div className="skillCardContainer">
        <DiGit size={40} />
      </div>
    </>
  );
}

export default SkillCard;
