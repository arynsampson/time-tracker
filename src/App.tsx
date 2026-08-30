import { useState } from "react";

import Sidebar from "./components/Sidebar";
import ViewCard from "./components/ViewCard";

import "./index.css";

export default function App() {
  const [viewId, setViewId] = useState(0);

  return (
    <div className="container">
      <Sidebar viewId={viewId} setViewId={setViewId} />
      <ViewCard viewId={viewId} />
    </div>
  );
}
