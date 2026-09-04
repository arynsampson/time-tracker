type ContextMenuProps = {
  children: React.ReactNode;
};

export default function ContextMenu({ children }: ContextMenuProps) {
  return <div className="context-menu">{children}</div>;
}
