import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const DynamicAccordion = () => {


  const accordionItems = [
    {
      id: 1,
      title: 'Item 1',
      content: 'Content for Item 1',
    },
    {
      id: 2,
      title: 'Item 2',
      content: 'Content for Item 2',
    },
    {
      id: 3,
      title: 'Item 3',
      content: 'Content for Item 3',
    },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    if (itemId === activeItem) {
      setActiveItem(null);
    } else {
      setActiveItem(itemId);
    }
  };

  return (
    <Accordion>
      {accordionItems.map(item => (
        <Card key={item.id}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey={item.id}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={item.id}>
            <Card.Body>{item.content}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default DynamicAccordion;
