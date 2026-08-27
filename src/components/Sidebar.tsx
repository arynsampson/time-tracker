import { House, Folder, ClipboardPen, Timer, SquareText, ChartNoAxesCombined, Clock } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [viewId, setViewId] = useState(0);

  return (
    <div className="sidebar">
      <header>
        <Clock />
        <h1>TimeTracker</h1>
      </header>
      <nav>
        <button onClick={() => setViewId(0)} className={viewId === 0 ? "active-nav" : undefined}>
          <House />
          Dashboard
        </button>
        <button onClick={() => setViewId(1)} className={viewId === 1 ? "active-nav" : undefined}>
          <Folder />
          Projects
        </button>
        <button onClick={() => setViewId(2)} className={viewId === 2 ? "active-nav" : undefined}>
          <ClipboardPen />
          Tasks
        </button>
        <button onClick={() => setViewId(3)} className={viewId === 3 ? "active-nav" : undefined}>
          <Timer />
          Timer
        </button>
        <button onClick={() => setViewId(4)} className={viewId === 4 ? "active-nav" : undefined}>
          <SquareText />
          Time Log
        </button>
        <button onClick={() => setViewId(5)} className={viewId === 5 ? "active-nav" : undefined}>
          <ChartNoAxesCombined />
          Statistics
        </button>
      </nav>
    </div>
  );
}
