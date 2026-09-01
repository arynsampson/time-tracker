type ModalProps = {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ children, setIsOpen }: ModalProps) {
  return (
    <div className="backdrop">
      <button onClick={() => setIsOpen(false)}>Close modal</button>
      <div className="modal">{children}</div>
    </div>
  );
}
