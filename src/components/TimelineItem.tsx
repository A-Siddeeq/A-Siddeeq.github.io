import { SchoolData } from "../data/data";
import { Schools } from "../data/data";
import { JobData } from "../data/data";
import { Jobs } from "../data/data";

export const SchoolsAttended = () => {
  return (
    <div>
      {Schools.map((school: SchoolData, index: number) => (
        <div className="relative pl-10 pb-10" key={index}>
          {/* Line and Dot */}
          <div className="absolute ml-2 left-0 top-2.5 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <div className="absolute ml-2 left-1 w-0.5 h-full bg-gray-300"></div>

          {/* Content */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-green-600">
              {school.yearRange}
            </h3>
            <h2 className="text-lg font-bold text-gray-800">{school.title}</h2>
            <p className="text-sm text-gray-600">{school.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const JobRoles = () => {
  return (
    <div>
      {Jobs.map((job: JobData, index: number) => (
        <div className="relative pl-10 pb-10" key={index}>
          {/* Line and Dot */}
          <div className="absolute ml-2 left-0 top-2.5 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <div className="absolute ml-2 left-1 w-0.5 h-full bg-gray-300"></div>

          {/* Content */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-green-600">
              {job.yearRange}
            </h3>
            <h2 className="text-lg font-bold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
