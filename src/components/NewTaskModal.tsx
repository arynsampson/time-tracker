import { X } from "lucide-react";

type NewTaskModalProps = {
  heading: string;
  submitButtonCopy: string;
  taskTitle: string;
  submitDisabled: boolean;
  resetStateData: () => void;
  handleSubmitData: () => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setAddTaskModalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewTaskModal({
  heading,
  submitButtonCopy,
  taskTitle,
  submitDisabled,
  resetStateData,
  handleSubmitData,
  setTaskTitle,
  setAddTaskModalisOpen,
}: NewTaskModalProps) {
  const handleCloseModal = () => {
    setAddTaskModalisOpen(false);
    resetStateData();
  };

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
            <label htmlFor="project-name">Task title</label>
            <input
              type="text"
              id="project-name"
              name="project-name"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              placeholder="Enter task title"
              maxLength={60}
            />
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
