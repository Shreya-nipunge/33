function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>Email: {student.email}</p>

      <p>Department: {student.department}</p>

      <button onClick={() => onEdit(student)}>
        Edit
      </button>

      <button onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </div>
  );
}
export default StudentCard;