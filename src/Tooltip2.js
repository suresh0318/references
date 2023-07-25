import React, { useState } from 'react';
import { Tooltip, Popover } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tooltip2 = () => {
    const handleClick = (event, content) => {
      event.stopPropagation(); // Prevent event propagation to avoid hiding the tooltip immediately
  
      // Code to show the tooltip here, e.g., using a state variable
      console.log(content);
    };

    const tableData = [
        { id: 1, name: 'John', age: 30, email: 'john@example.com' },
        { id: 2, name: 'Jane', age: 25, email: 'jane@example.com' },
        // Add more rows here
      ];
      
  
    return (
      <table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>
                <OverlayTrigger
                  placement="right"
                  overlay={renderTooltip(row.email)}
                >
                  <span
                    onClick={(event) => handleClick(event, row.email)}
                  >
                    {row.email}
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Tooltip2;
  
  const renderTooltip = (content) => (
    <Tooltip id="tooltip">{content}</Tooltip>
  );
