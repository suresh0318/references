import React, { useState } from "react";
import { useEffect } from "react";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

const options = [
  { value: "one", label: "Option One" },
  { value: "two", label: "Option Two" },
  { value: "three", label: "Option Three" },
  { value: "four", label: "Option Four" },
];

function SelectList() {
  const [selected, setSelected] = useState([]);


  useEffect(()=>{
setSelected(["one","three"])
  },[])
console.log(selected)
  return (
    <>
      {" "}
      <DualListBox
        options={options}
        selected={selected}
        onChange={(value) => setSelected(value)}
      />

    </>
  );
}
export default SelectList;
