import React, { useState } from "react";
import Question from "./Question";
import "../App.css";
function UserQuestions() {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setCount] = useState(0);
  console.log(questions, questionCount);

  return (
    <div>
      <h2 className="static">Select Maximum Static Question</h2>
      <input
        className="input1"
        type="number"
        placeholder="Enter Number of Question"
        onChange={(e) => {
          setCount(parseInt(e.target.value));
          setQuestions([]);
        }}
      />
      <div>
        {questionCount > 0 && (
          <button
            className="btn1"
            onClick={(e) => {
              e.preventDefault();
              {
                questionCount > questions.length &&
                  setQuestions([...questions,questions]);
              }
            }}
          >
            Add question
          </button>
        )}
      </div>

      <div className="questions-main">
        {questions.length &&
          questions.map((ele, index) => {
            return (
              <div key={index}>
                <Question
                  index={index}
                  setQuestions={setQuestions}
                  questions={questions}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default UserQuestions;
