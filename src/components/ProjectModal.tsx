import { X } from "lucide-react";
import type { Project } from "../views/Projects";

type ModalProps = {
  heading: string;
  submitButtonCopy: string;
  projectId?: string;
  projectName: string;
  projectDescription: string;
  projectColour: string;
  submitDisabled: boolean;
  resetStateData: () => void;
  handleSubmitData: (project: Project) => void;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  setProjectDescription: React.Dispatch<React.SetStateAction<string>>;
  setProjectColour: React.Dispatch<React.SetStateAction<string>>;
  setAddProjectModalisOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setEditProjectModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({
  heading,
  submitButtonCopy,
  projectId,
  projectName,
  projectDescription,
  projectColour,
  submitDisabled,
  resetStateData,
  handleSubmitData,
  setProjectName,
  setProjectDescription,
  setProjectColour,
  setAddProjectModalisOpen,
  setEditProjectModalIsOpen,
}: ModalProps) {
  const handleCloseModal = () => {
    setAddProjectModalisOpen?.(false);
    setEditProjectModalIsOpen?.(false);
    resetStateData();
  };

  const colours = ["#3B82F6", "#8B5CF6", "#4CAF6A", "#F5B82E", "#F28C38", "#E76F6F", "#D66BA0", "#3BA7A0"];

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
            <label htmlFor="project-name">Project Name</label>
            <input
              type="text"
              id="project-name"
              name="project-name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              placeholder="Enter project name"
              maxLength={60}
            />
          </div>

          <label htmlFor="project-name">Project Colour</label>
          <div className="project-colour-selection">
            {colours.map((colour, index) => (
              <div
                key={index}
                className="colour-selection-item"
                style={{
                  border: projectColour === colour ? `1px solid ${colour}` : "none",
                }}
                onClick={() => {
                  if (projectColour === colour) {
                    return setProjectColour("");
                  }
                  return setProjectColour(colour);
                }}
              >
                <div style={{ backgroundColor: colour }}></div>
              </div>
            ))}
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
              maxLength={255}
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
              handleSubmitData({
                projectId: projectId ? projectId : "",
                projectName: projectName,
                projectColour: projectColour,
                projectDescription: projectDescription,
              });
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
