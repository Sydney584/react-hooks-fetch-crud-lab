import React, { useState, useEffect } from "react";

function QuestionList() {
  const [quesions, setQuestions] = useState([]);
useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then((response) => response.json())
  .then((questions) => {
    setQuestions(questions);
  });
}, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
