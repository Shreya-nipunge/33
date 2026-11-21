import { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('5');
  const [message, setMessage] = useState('');

  const [feedbacks, setFeedbacks] = useState([]);

  // Submit feedback
  function handleSubmit(e) {
    e.preventDefault();

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      message.trim() === ''
    ) {
      alert('Please fill all fields');
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name: name,
      email: email,
      rating: rating,
      message: message
    };

    setFeedbacks([...feedbacks, newFeedback]);

    setName('');
    setEmail('');
    setRating('5');
    setMessage('');

    alert('Feedback submitted successfully!');
  }

  // Delete feedback
  function deleteFeedback(id) {
    setFeedbacks(
      feedbacks.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="container">

      <h1>Feedback Collection System</h1>

      <h2>Submit Your Feedback</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Rating:</label>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Very Good</option>
          <option value="3">3 - Good</option>
          <option value="2">2 - Average</option>
          <option value="1">1 - Poor</option>
        </select>

        <textarea
          placeholder="Write your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

      <h2>Submitted Feedback</h2>

      <h3>Total Feedback: {feedbacks.length}</h3>

      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbacks.map((item) => (
          <FeedbackCard
            key={item.id}
            feedback={item}
            onDelete={deleteFeedback}
          />
        ))
      )}

    </div>
  );
}

export default App;
