
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const ToggleAccordian = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      title: "Item 1",
      content: "Content for Item 1",
    },
    {
      title: "Item 2",
      content: "Content for Item 2",
    },
    // Add more items as needed
  ]);

  const [allOpen, setAllOpen] = useState(false);

  const toggleAllItems = () => {
    setAllOpen(!allOpen);
  };
  return (
    <div>
      <button onClick={toggleAllItems}>
        {allOpen ? "Close All" : "Open All"}
      </button>
      <Accordion>
        {accordionItems.map((item, index) => {
          return (
            <Card key={index}>
              <Card.Header>
                <Accordion.Toggle variant="link" eventKey={index.toString()}>
                  {item.title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index.toString()} in={allOpen}>
                <Card.Body>{item.content}</Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ToggleAccordian;
