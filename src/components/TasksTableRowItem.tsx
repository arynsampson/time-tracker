import { useState } from "react";

import { EllipsisVertical } from "lucide-react";
import ProjectColour from "./ProjectColour";
import ContextMenu from "./ContextMenu";

import type { TasksTableRowItemProps } from "../utils/types";

export default function TasksTableRowItem({
  task,
  project,
  handleMarkTaskAsCompleted,
  handleDeleteTask,
}: TasksTableRowItemProps) {
  const [contextMenuIsOpen, setContextMenuIsOpen] = useState(false);

  return (
    <>
      <tr key={task.id}>
        <td>{task.name}</td>
        <td className="tasks-table-project-cell">
          <ProjectColour colour={project.projectColour} />
          {project.projectName}
        </td>
        <td>
          <p className="project-type-cell">Project</p>
        </td>
        <td>
          <div className={`task-status-indicator ${task.completed ? "completed-pill" : "incompleted-pill"}`}>
            {task.completed ? "Completed" : "Incomplete"}
          </div>
        </td>
        <td className="tasks-table-context-menu">
          <div
            className="tasks-table-context-menu-container context-menu-container"
            onClick={() => setContextMenuIsOpen(!contextMenuIsOpen)}
          >
            {contextMenuIsOpen && (
              <ContextMenu>
                <div className="context-menu-item" onClick={() => {}}>
                  Edit Task
                </div>
                <div className="greyline"></div>
                <div className="context-menu-item" onClick={() => handleMarkTaskAsCompleted(task)}>
                  {task.completed ? "Mark as incomplete" : "Mark as complete"}
                </div>
                <div className="greyline"></div>
                <div className="context-menu-item" onClick={() => handleDeleteTask(task.id)}>
                  Delete Task
                </div>
              </ContextMenu>
            )}
            <EllipsisVertical size="16px" />
          </div>
        </td>
      </tr>
    </>
  );
}
