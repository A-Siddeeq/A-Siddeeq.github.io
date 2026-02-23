import HeadingText from "../components/HeadingText";
import TitleName from "../components/TitleName";
import ProgressBar from "../components/ProgressBar";

const Skills = () => {
  return (
    <div className="bg-slate-600">
      <TitleName title="Skills" />
      <div className="flex justify-around py-6">
        <div>
          <HeadingText text="Technical Skills" />
          <ProgressBar label="React" percentage={65} />
          <ProgressBar label="TypeScript" percentage={50} />
          <ProgressBar label="JavaScript" percentage={70} />
          <ProgressBar label="Tailwindcss" percentage={88} />
          <ProgressBar label="Bootstrap" percentage={85} />
        </div>
        <div>
          <HeadingText text="Soft Skills" />
          <ProgressBar label="Communication" percentage={75} />
          <ProgressBar label="Teamwork" percentage={80} />
          <ProgressBar label="Creativity" percentage={70} />
          <ProgressBar label="Problem-solving" percentage={65} />
          <ProgressBar label="Dedication" percentage={95} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
