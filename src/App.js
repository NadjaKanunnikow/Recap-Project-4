import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";

function App() {
  const [activity, setActivity] = useState("");

  function handleAddActivity(activityObject) {
    setActivity([{ id: uid(8), ...activityObject }, ...activity]);
  }

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
