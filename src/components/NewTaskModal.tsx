import { X } from "lucide-react";
import type { Project } from "../utils/types";

type NewTaskModalProps = {
  heading: string;
  submitButtonCopy: string;
  taskTitle: string;
  projectOptionId: string;
  projects: Project[];
  submitDisabled: boolean;
  resetStateData: () => void;
  handleSubmitData: () => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setProjectOptionId: React.Dispatch<React.SetStateAction<string>>;
  setAddTaskModalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewTaskModal({
  heading,
  submitButtonCopy,
  taskTitle,
  projectOptionId,
  projects,
  submitDisabled,
  resetStateData,
  handleSubmitData,
  setTaskTitle,
  setProjectOptionId,
  setAddTaskModalisOpen,
}: NewTaskModalProps) {
  const handleCloseModal = () => {
    setAddTaskModalisOpen(false);
    resetStateData();
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
              handleSubmitData();
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
