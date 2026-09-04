import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import type { Project } from "../views/Projects";
import ContextMenu from "../components/ContextMenu";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  const [contextMenuIsOpen, setContextMenuIsOpen] = useState(false);

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
            <div className="context-menu-item">Edit Project</div>
            <div className="greyline"></div>
            <div className="context-menu-item">Delete Project</div>
          </ContextMenu>
        )}
      </div>
    </div>
  );
}
