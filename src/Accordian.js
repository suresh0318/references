import React, { useState } from "react";
import { Accordion, Card, Button, Form } from "react-bootstrap";

function AccordionComponent(props) {
  const accordionData = [
    {
      title: "Accordion Item #1",
      label: "Select an option:",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
    },
    {
      title: "Accordion Item #2",
      label: "Select an option:",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
    },
    {
      title: "Accordion Item #3",
      label: "Select an option:",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (event, index) => {
    setSelectedOptions({
      ...selectedOptions,
      [index]: event.target.value,
    });
  };

  const renderOptions = (options, index) => {
    return options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
  };

  const renderAccordionItems = () => {
    return accordionData.map((item, index) => {
      return (
        <Card key={index}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey={index.toString()}
            >
              {item.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index.toString()}>
            <Card.Body>
              <Form>
                <Form.Group controlId={`accordionItem${index}`}>
                  <Form.Label>{item.label}</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedOptions[index]}
                    onChange={(event) => handleOptionChange(event, index)}
                  >
                    <option value="">Select an option</option>
                    {renderOptions(item.options, index)}
                  </Form.Control>
                </Form.Group>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    });
  };

  return <Accordion>{renderAccordionItems()}</Accordion>;
}

export default AccordionComponent;
