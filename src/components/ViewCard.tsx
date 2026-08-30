import Dashboard from "../views/Dashboard";
import Projects from "../views/Projects";
import Tasks from "../views/Tasks";
import Timer from "../views/Timer";
import TimeLog from "../views/TimeLog";
import Statistics from "../views/Statistics";

import "../index.css";

export default function ViewCard({ viewId }) {
  return (
    <div className="view-card">
      {viewId === 0 ? (
        <Dashboard />
      ) : viewId === 1 ? (
        <Projects />
      ) : viewId === 2 ? (
        <Tasks />
      ) : viewId === 3 ? (
        <Timer />
      ) : viewId === 4 ? (
        <TimeLog />
      ) : viewId === 5 ? (
        <Statistics />
      ) : undefined}
    </div>
  );
}
