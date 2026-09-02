import { X } from "lucide-react";

type ModalProps = {
  children: React.ReactNode;
  heading: string;
  submitDisabled: boolean;
  resetStateData: () => void;
  handleAddProject: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({
  children,
  heading,
  submitDisabled,
  resetStateData,
  handleAddProject,
  setIsOpen,
}: ModalProps) {
  const handleCloseModal = () => {
    setIsOpen(false);
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
        {children}

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => handleCloseModal()}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => handleAddProject()}
            disabled={submitDisabled}
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
