import React, { useEffect, useRef } from "react";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

const Grid1 = () => {
  const gridRef = useRef();

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.innerHTML = "";
    }
  }, []);
  return (
    
      
      <Grid
      ref={gridRef}
        data={[
          ["John", "john@example.com"],
          ["Mike", "mike@gmail.com"],
        ]}
        columns={["Name", "Email"]}
        search={true}
        sort={true}
      />
    
  );
};

export default Grid1;
