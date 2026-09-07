import { X } from "lucide-react";

type DeleteProjectModalProps = {
  heading: string;
  submitButtonCopy: string;
  projectId: string;
  projectName: string;
  resetStateData: () => void;
  handleDeleteProject: (projectId: string) => void;
  setDeleteProjectModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({
  heading,
  submitButtonCopy,
  projectId,
  projectName,
  resetStateData,
  handleDeleteProject,
  setDeleteProjectModalIsOpen,
}: DeleteProjectModalProps) {
  const handleCloseModal = () => {
    setDeleteProjectModalIsOpen(false);
    resetStateData();
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-heading-section">
          <h3>
            {heading}: "{projectName}"?
          </h3>
          <button onClick={() => handleCloseModal()} className="close-modal">
            <X color="#6B7078" size="18px" />
          </button>
        </div>

        <div className="greyline"></div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => handleCloseModal()}>
            Cancel
          </button>
          <button
            className="btn btn-delete"
            onClick={() => {
              handleDeleteProject(projectId);
              handleCloseModal();
            }}
          >
            {submitButtonCopy}
          </button>
        </div>
      </div>
    </div>
  );
}
