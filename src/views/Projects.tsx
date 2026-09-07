import { useEffect, useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import ProjectItem from "../components/ProjectItem";

export type Project = {
  projectId: string;
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
    // console.log(projects);
  }, [projects]);

  const resetStateData = () => {
    setProjectName("");
    setProjectDescription("");
    setProjectColour("");
  };

  const handleUpdateProjectData = (updatedProjectData: Project) => {
    const projectToUpdate: Project | undefined = projects.find(
      (project: Project) => project.projectId === updatedProjectData.projectId,
    );

    if (!projectToUpdate) return;

    const updatedProjects = projects.map((project) => {
      if (project.projectId === projectToUpdate.projectId) {
        project = {
          projectId: updatedProjectData.projectId,
          projectName: updatedProjectData.projectName,
          projectDescription: updatedProjectData.projectDescription,
          projectColour: updatedProjectData.projectColour,
        };
      }
      return project;
    });

    setProjects(updatedProjects);

    resetStateData();
    setIsOpen(false);
  };

  const saveNewProject = () => {
    setProjects([
      ...projects,
      {
        projectId: crypto.randomUUID(),
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
                key={project.projectId}
                project={project}
                projectName={projectName}
                projectDescription={projectDescription}
                projectColour={projectColour}
                resetStateData={resetStateData}
                handleSubmitData={handleUpdateProjectData}
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
            handleSubmitData={saveNewProject}
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
