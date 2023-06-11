import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Question 1",
      checkboxes: [
        { id: 11, label: "Option 01" },
        { id: 12, label: "Option 02" },
        { id: 13, label: "Option 03" },
      ],
    },
    {
      id: 2,
      question: "Question 2",
      checkboxes: [
        { id: 21, label: "Option 21" },
        { id: 22, label: "Option 22" },
        { id: 23, label: "Option 23" },
      ],
    },
  ]);

  const handleFormSubmit = () => {
    questions.forEach((question) => {
      question.checkboxes.forEach((checkbox) => {
      });
    });
  };
  return (
    <div>
        <Child questions={questions}/>
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default Parent;
