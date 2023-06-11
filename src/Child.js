import React, { useEffect, useState } from "react";

const Child = ({ questions }) => {
  const [ticked, setTicked] = useState([]);
  const handleCheckboxChange = (e) => {
    let current = {
      name: e.target.name,
      checked: e.target.checked,
    };

    if (current.checked === true && !ticked.includes(current.name))
      setTicked([...ticked, current.name]);
    else {
      const name = current.name;

      setTicked((current) => current.filter((fruit) => fruit !== name));
    }
  };

  useEffect(() => {
    setTicked(["Option 21"]);
  }, []);
  console.log(ticked);
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          {question.checkboxes.map((checkbox) => (
            <label key={checkbox.id}>
              <input
                type="checkbox"
                name={checkbox.label}
                checked={ticked.includes(checkbox.label)}
                onChange={(e) => handleCheckboxChange(e)}
              />
              {checkbox.label}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Child;
