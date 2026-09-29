import { X } from "lucide-react";
import type { EditTaskModalProps } from "../utils/types";

export default function EditTaskModal({
  heading,
  taskTitle,
  submitButtonCopy,
  taskId,
  projectOptionId,
  projects,
  submitDisabled,
  handleUpdateTask,
  setEditTaskModalIsOpen,
  setTaskTitle,
  setProjectOptionId,
}: EditTaskModalProps) {
  const handleCloseModal = () => {
    setEditTaskModalIsOpen(false);
  };

  const projectOptions = projects.map((project) => (
    <option key={project.projectId} value={project.projectId}>
      {project.projectName}
    </option>
  ));

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-heading-section">
          <h3>{heading}</h3>
          <button onClick={() => handleCloseModal()} className="close-modal">
            <X color="#6B7078" size="18px" />
          </button>
        </div>

        <div className="greyline"></div>

        <div className="form-container">
          <div>
            <label htmlFor="task-title">Task title</label>
            <input
              type="text"
              id="task-title"
              name="task-title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              placeholder="Enter task title"
              maxLength={60}
            />
          </div>
          <div>
            <label htmlFor="project-name">Project</label>
            <select
              name="project-name"
              id="project-name"
              value={projectOptionId}
              onChange={(e) => setProjectOptionId(e.target.value)}
            >
              <option value="">--Please choose an option--</option>
              {projectOptions}
            </select>
          </div>
        </div>

        <div className="greyline"></div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => handleCloseModal()}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleUpdateTask(taskId);
              handleCloseModal();
            }}
            disabled={submitDisabled}
          >
            {submitButtonCopy}
          </button>
        </div>
      </div>
    </div>
  );
}
