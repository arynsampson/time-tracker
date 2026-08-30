import Button from "../components/Button";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        <Button text="New Project" />
        <div className="projects-list">
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </>
  );
}
