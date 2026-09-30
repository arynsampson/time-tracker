import { useState } from "react";

import { EllipsisVertical } from "lucide-react";
import ProjectColour from "./ProjectColour";
import ContextMenu from "./ContextMenu";
import EditTaskModal from "./EditTaskModal";

import type { TasksTableRowItemProps } from "../utils/types";

export default function TasksTableRowItem({
  task,
  project,
  projects,
  taskTitle,
  handleUpdateTask,
  handleMarkTaskAsCompleted,
  handleDeleteTask,
  setTaskTitle,
  setProjectOptionId,
}: TasksTableRowItemProps) {
  const [contextMenuIsOpen, setContextMenuIsOpen] = useState(false);
  const [editTaskModalIsOpen, setEditTaskModalIsOpen] = useState(false);

  const handleClick = () => {
    setTaskTitle(task.title);
    setProjectOptionId(task.projectId ? task.projectId : "");
    setEditTaskModalIsOpen(true);
  };

  return (
    <>
      <tr key={task.id}>
        <td>{task.title}</td>
        <td className="tasks-table-project-cell">
          <ProjectColour colour={project ? project.projectColour : "lightgrey"} />
          {project ? project.projectName : "Standalone"}
        </td>
        <td>
          <p className={`project-type-cell ${project ? "project-pill" : "standalone-pill"}`}>
            {project ? "Project" : "Standalone"}
          </p>
        </td>
        <td>
          <div className={`task-status-indicator ${task.completed ? "bg-green" : "bg-red"}`}>
            {task.completed ? "Completed" : "Incomplete"}
          </div>
        </td>
        <td className="tasks-table-context-menu">
          <div
            className="tasks-table-context-menu-container context-menu-container"
            onClick={() => setContextMenuIsOpen(!contextMenuIsOpen)}
          >
            <EllipsisVertical size="16px" />
            {contextMenuIsOpen && (
              <ContextMenu>
                <div className="context-menu-item" onClick={() => handleClick()}>
                  Edit Task
                </div>
                <div className="greyline"></div>
                <div className="context-menu-item" onClick={() => handleMarkTaskAsCompleted(task.id)}>
                  {task.completed ? "Mark as incomplete" : "Mark as complete"}
                </div>
                <div className="greyline"></div>
                <div className="context-menu-item" onClick={() => handleDeleteTask(task.id)}>
                  Delete Task
                </div>
              </ContextMenu>
            )}
          </div>
          {editTaskModalIsOpen && (
            <EditTaskModal
              heading="Edit Task"
              submitButtonCopy="Update Task"
              taskId={task.id}
              taskTitle={taskTitle}
              projectOptionId={project ? project.projectId : undefined}
              projects={projects}
              submitDisabled={false}
              setEditTaskModalIsOpen={setEditTaskModalIsOpen}
              setTaskTitle={setTaskTitle}
              setProjectOptionId={setProjectOptionId}
              handleUpdateTask={handleUpdateTask}
            />
          )}
        </td>
      </tr>
    </>
  );
}
