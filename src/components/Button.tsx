type ButtonProps = {
  text: string;
  setAddTaskModalisOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setAddProjectModalisOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Button({ text, setAddTaskModalisOpen, setAddProjectModalisOpen }: ButtonProps) {
  const handleClick = () => {
    if (text === "New Project") setAddProjectModalisOpen?.(true);
    if (text === "New Task") setAddTaskModalisOpen?.(true);
  };

  return (
    <button className="btn btn-primary" onClick={() => handleClick()}>
      + {text}
    </button>
  );
}
