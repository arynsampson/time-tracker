type ButtonProps = {
  text: string;
  setAddProjectModalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Button({ text, setAddProjectModalisOpen }: ButtonProps) {
  return (
    <button className="btn btn-primary" onClick={() => setAddProjectModalisOpen(true)}>
      + {text}
    </button>
  );
}
