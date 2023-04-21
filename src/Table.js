import React, { useState } from "react";
function Table() {
  const data = [
    {
      name: "John Doe",
      age: 30,
      city: "New York",
      country: "USA",
    },
    {
      name: "Jane Smith",
      age: 25,
      city: "London",
      country: "UK",
    },
    {
      name: "Bob Johnson",
      age: 40,
      city: "Paris",
      country: "France",
    },
    {
      name: "Alice Lee",
      age: 35,
      city: "Sydney",
      country: "Australia",
    },
  ];

  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });

  const sortedData = React.useMemo(() => {
    if (sortConfig.direction === "") {
      return data;
    }

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort("id")}>
            Id{" "}
            {sortConfig.key === "id" &&
              sortConfig.direction === "ascending" &&
              "↑"}
            {sortConfig.key === "id" &&
              sortConfig.direction === "descending" &&
              "↓"}
          </th>
          <th onClick={() => requestSort("name")}>
            Name{" "}
            {sortConfig.key === "name" &&
              sortConfig.direction === "ascending" &&
              "↑"}
            {sortConfig.key === "name" &&
              sortConfig.direction === "descending" &&
              "↓"}
          </th>
          <th onClick={() => requestSort("age")}>
            Age{" "}
            {sortConfig.key === "age" &&
              sortConfig.direction === "ascending" &&
              "↑"}
            {sortConfig.key === "age" &&
              sortConfig.direction === "descending" &&
              "↓"}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
