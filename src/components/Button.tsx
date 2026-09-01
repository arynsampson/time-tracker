type ButtonProps = {
  text: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Button({ text, setIsOpen }: ButtonProps) {
  return (
    <button className="btn" onClick={() => setIsOpen(true)}>
      + {text}
    </button>
  );
}
