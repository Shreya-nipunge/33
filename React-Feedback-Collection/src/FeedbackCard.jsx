function FeedbackCard({ feedback, onDelete }) {
  return (
    <div className="feedback-card">

      <h3>{feedback.name}</h3>

      <p><strong>Email:</strong> {feedback.email}</p>

      <p><strong>Rating:</strong> {feedback.rating}/5</p>

      <p><strong>Feedback:</strong> {feedback.message}</p>

      <button onClick={() => onDelete(feedback.id)}>
        Delete
      </button>

    </div>
  );
}

export default FeedbackCard;
