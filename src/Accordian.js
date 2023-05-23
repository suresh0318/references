import React, { useState } from "react";

const QuestionsWithCheckboxes = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (questionIndex, optionIndex) => {

    setCheckedValues((prevCheckedValues) => {
      const updatedCheckedValues = [...prevCheckedValues];
      const questionId = `q${questionIndex + 1}`;
      const optionId = `o${optionIndex + 1}`;
      const optionValue = `${questionId}-${optionId}`;
      const optionIndexInCheckedValues = updatedCheckedValues.indexOf(optionValue);

      if (optionIndexInCheckedValues === -1) {
        updatedCheckedValues.push(optionValue);
      } else {
        updatedCheckedValues.splice(optionIndexInCheckedValues, 1);
      }

      return updatedCheckedValues;
    });
  };
  const data = [{
    label:"question1",
    options:["option q11",'option q12','option q13','option q14']
  },
  {
    label:"question2",
    options:["option q21",'option q22','option q23','option q24']
  },
  {
    label:"question3",
    options:["option q31",'option q32','option q33','option q34']
  }]

  return (
    <div>
      {data.map((question, questionIndex) => (
        <div key={question.label}>
          <h3>{question.label}</h3>
          {question.options.map((option, optionIndex) => (
            <div key={option}>
              <input
                type="checkbox"
                id={`q${questionIndex + 1}-o${optionIndex + 1}`}
                value={`${question.label}-${option}`}
                checked={checkedValues.includes(`${question.label}-${option}`)}
                onChange={() => handleCheckboxChange(questionIndex, optionIndex)}
              />
              <label htmlFor={`q${questionIndex + 1}-o${optionIndex + 1}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuestionsWithCheckboxes;
