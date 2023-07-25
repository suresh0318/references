import React, { useState } from 'react';
import { Table, OverlayTrigger, Popover } from 'react-bootstrap';

const CustomTooltip = ({ content }) => (
    <Popover id="popover-basic">
      <Popover.Body>{content}</Popover.Body>
    </Popover>
  );
 const ToolTip = () => {
    // Sample data for the table (replace this with your actual data)
    const data = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 3, name: 'Bob', age: 28 },
    ];
  
    // State to handle the visibility of the tooltip
    const [tooltipContent, setTooltipContent] = useState('');
  
    // Function to handle tooltip display
    const handleTooltip = (content) => {
      setTooltipContent(content);
    };
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={<CustomTooltip content={tooltipContent} />}
                  rootClose
                >
                  <span onClick={() => handleTooltip(item.name)}>{item.name}</span>
                </OverlayTrigger>
              </td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  export default ToolTip
