import { useEffect, useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import ProjectItem from "../components/ProjectItem";

type Project = {
  id: string;
  projectName: string;
  projectDescription: string;
};

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const resetStateData = () => {
    setProjectName("");
    setProjectDescription("");
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        id: crypto.randomUUID(),
        projectName,
        projectDescription,
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
                projectName={project.projectName}
                projectDescription={project.projectDescription}
              />
            );
          })}
        </div>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            heading="Add New Project"
            submitDisabled={projectName.length < 3}
            resetStateData={resetStateData}
            handleAddProject={handleAddProject}
          >
            <div className="form-container">
              <div>
                <label htmlFor="project-name">Project name</label>
                <input
                  type="text"
                  id="project-name"
                  name="project-name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                  placeholder="Enter project name"
                />
              </div>

              <div>
                <label htmlFor="project-description">
                  Project Description <span>(Optional)</span>
                </label>
                <textarea
                  name="project-description"
                  id="project-description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Enter project description"
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
