import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import type { Project } from "../views/Projects";
import ContextMenu from "../components/ContextMenu";
import Modal from "../components/Modal";

type ProjectItemProps = {
  project: Project;
  projectName: string;
  projectDescription: string;
  projectColour: string;
  resetStateData: () => void;
  handleSubmitData: (project: Project) => void;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  setProjectDescription: React.Dispatch<React.SetStateAction<string>>;
  setProjectColour: React.Dispatch<React.SetStateAction<string>>;
};

export default function ProjectItem({
  project,
  projectName,
  projectDescription,
  projectColour,
  resetStateData,
  handleSubmitData,
  setProjectName,
  setProjectDescription,
  setProjectColour,
}: ProjectItemProps) {
  const [contextMenuIsOpen, setContextMenuIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const handleOpenEditModal = () => {
    setProjectName(project.projectName);
    setProjectDescription(project.projectDescription);
    setProjectColour(project.projectColour);
    setEditModalIsOpen(true);
  };

  return (
    <div className="project-item">
      <div className="project-colour" style={{ backgroundColor: project.projectColour }}></div>
      <div className="project-info">
        <p className="project-name">{project.projectName}</p>
        <p className="project-description">{project.projectDescription}</p>
      </div>
      <p className="project-hours">
        0 <span>hrs</span>
      </p>
      <div className="context-menu-container" onClick={() => setContextMenuIsOpen(!contextMenuIsOpen)}>
        <EllipsisVertical size="14px" />
        {contextMenuIsOpen && (
          <ContextMenu>
            <div className="context-menu-item" onClick={() => handleOpenEditModal()}>
              Edit Project
            </div>
            <div className="greyline"></div>
            <div className="context-menu-item">Delete Project</div>
          </ContextMenu>
        )}
      </div>
      {editModalIsOpen && (
        <Modal
          heading="Edit Project"
          submitButtonCopy="Update Project"
          projectId={project.projectId}
          projectName={projectName}
          projectDescription={projectDescription}
          projectColour={projectColour}
          submitDisabled={false}
          resetStateData={resetStateData}
          handleSubmitData={handleSubmitData}
          setProjectName={setProjectName}
          setProjectDescription={setProjectDescription}
          setProjectColour={setProjectColour}
          setEditModalIsOpen={setEditModalIsOpen}
        />
      )}
    </div>
  );
}
