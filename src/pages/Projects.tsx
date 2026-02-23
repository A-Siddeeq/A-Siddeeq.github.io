import HeadingText from "../components/HeadingText";
import ProjectCard from "../components/ProjectCard";
import TitleName from "../components/TitleName";
import biossanHome from "../assets/biossanHome.png";

const Projects = () => {
  return (
    <div className="bg-slate-600 px-4 py-2">
      <TitleName title="Projects" />
      <HeadingText text="Recent Projects" />
      <div>
        <ProjectCard
          projectLink="https://adustechbiossan.netlify.app"
          projectTitle="Academic Website"
          projectDescription="A fully responsive academic website built with React and Supabase."
          projectTools={["React", "TypeScript", "Tailwind CSS"]}
          projectImage={biossanHome}
        />
        <ProjectCard
          projectLink="https://e-commerce-website.netlify.app"
          projectTitle="E-commerce Website"
          projectDescription="A fully responsive e-commerce website built with React and Firebase."
          projectImage="https://picsum.photos/200"
        />
        <ProjectCard
          projectLink="https://task-management-app.netlify.app"
          projectTitle="Task Management App"
          projectDescription="A task management application built with React and Firebase."
          projectImage="https://picsum.photos/200"
        />
      </div>
    </div>
  );
};

export default Projects;
