interface projectProps {
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectTools?: string[];
}

const ProjectCard = (props: projectProps) => {
  const randomBgColors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500",
    "bg-teal-500",
    "bg-orange-500",
  ];

  return (
    <a
      href={props.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="flex flex-col md:flex-row items-center p-6 bg-slate-400 rounded-lg fredoka cursor-pointer hover:bg-gray-500 m-1">
        <img
          src={props.projectImage}
          alt=""
          className="w-[88px] h-[100px] m-2"
        />
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row gap-2">
            <p className="text-lg font-bold text-white">{props.projectTitle}</p>
            <div className="flex flex-wrap gap-2">
              {props.projectTools?.map((tool, index) => (
                <p
                  key={index}
                  className={`${
                    randomBgColors[
                      Math.floor(Math.random() * randomBgColors.length)
                    ]
                  } rounded-md px-2 py-1 text-white text-sm`}
                >
                  {tool}
                </p>
              ))}
            </div>
          </div>
          <div className="flex">
            <p className="text-white">{props.projectDescription}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
