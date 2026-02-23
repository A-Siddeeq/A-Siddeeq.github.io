import TitleName from "../components/TitleName";
import { JobRoles, SchoolsAttended } from "../components/TimelineItem";
import HeadingText from "../components/HeadingText";

const Resume = () => {
  return (
    <div className="bg-gray-800 py-6 px-2">
      <TitleName title="Resume" />
      <div className="flex flex-col-reverse md:flex-row justify-around">
        <div>
          <HeadingText text="Experience" />
          <JobRoles />
        </div>
        <div>
          <HeadingText text="Education" />
          <SchoolsAttended />
        </div>
      </div>
    </div>
  );
};

export default Resume;
