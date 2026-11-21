import { useState } from "react";
import "./App.css";

function Student(props) {
  return (
    <div>
      <h2>Welcome, {props.name}!</h2>
      <p>Department: {props.department}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Student Welcome App</h1>

      <Student
        name="Shreya"
        department="Artificial Intelligence and Data Science"
      />

      <h3>Button Clicked: {count} times</h3>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}
export default App;