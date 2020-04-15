import React from "react";
import "./App.css";
import ControlledInput from "./exercise_4/ControlledInput";
import { ConenctedList } from "./exercise_5/connected-list/ConenctedList";
import Users from "./users/Users";
import Link1 from "./exercise_1/Link1";

function App() {
  return (
    <div className="App">
      <ControlledInput />
      <ConenctedList />
      <Users />
      <Link1 />
    </div>
  );
}

export default App;
