import { useEffect, useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import ProjectItem from "../components/ProjectItem";

export type Project = {
  id: string;
  projectName: string;
  projectDescription: string;
  projectColour: string;
};

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectColour, setProjectColour] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const resetStateData = () => {
    setProjectName("");
    setProjectDescription("");
    setProjectColour("");
  };

  const handleSubmitData = () => {
    setProjects([
      ...projects,
      {
        id: crypto.randomUUID(),
        projectName,
        projectDescription,
        projectColour,
      },
    ]);

    resetStateData();
    setIsOpen(false);
  };

  return (
    <>
      <div className="projects view">
        <h2>Projects</h2>
        <Button text="New Project" setIsOpen={setIsOpen} />
        <div className="projects-list">
          {projects.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                project={project}
                resetStateData={resetStateData}
                handleSubmitData={handleSubmitData}
                setProjectName={setProjectName}
                setProjectDescription={setProjectDescription}
                setProjectColour={setProjectColour}
              />
            );
          })}
        </div>
        {isOpen && (
          <Modal
            heading="Add New Project"
            submitButtonCopy="Create Project"
            projectName={projectName}
            projectDescription={projectDescription}
            projectColour={projectColour}
            submitDisabled={projectName.length < 3}
            resetStateData={resetStateData}
            handleSubmitData={handleSubmitData}
            setProjectName={setProjectName}
            setProjectDescription={setProjectDescription}
            setProjectColour={setProjectColour}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
}
