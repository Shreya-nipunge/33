import { useState } from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: ""
  });

  const [editingId, setEditingId] = useState(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editingId) {
      setStudents(
        students.map((student) =>
          student.id === editingId ? { ...student, ...formData } : student
        )
      );
      setEditingId(null);
    } else {
      setStudents([...students, { id: Date.now(), ...formData }]);
    }

    setFormData({
      name: "",
      email: "",
      department: ""
    });
  }

  function handleEdit(student) {
    setFormData({
      name: student.name,
      email: student.email,
      department: student.department
    });
    setEditingId(student.id);
  }

  function handleCancel() {
    setEditingId(null);
    setFormData({
      name: "",
      email: "",
      department: ""
    });
  }

  function handleDelete(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
    if (editingId === id) handleCancel();
  }

  return (
    <div className="container">

      <h1>Student Profile Management</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={formData.department}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId ? "Update Student" : "Add Student"}
        </button>

        {editingId && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}

      </form>

      <h2>Student Profiles</h2>

      {students.length === 0 ? (
        <p>No student profiles added yet.</p>
      ) : (
        students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}

    </div>
  );
}
export default App;