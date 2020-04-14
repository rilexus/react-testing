import React from "react";
import "./App.css";
import ControlledInput from "./input/ControlledInput";
import { List } from "./list/List";
import Users from "./users/Users";

function App() {
  return (
    <div className="App">
      <ControlledInput />
      <List />
      <Users />
    </div>
  );
}

export default App;
