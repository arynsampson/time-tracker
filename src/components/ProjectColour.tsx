type ProjectColourProps = {
  colour: string;
};

export default function ProjectColour({ colour }: ProjectColourProps) {
  return (
    <>
      <div style={{ backgroundColor: colour }} className="project-colour-item"></div>
    </>
  );
}
