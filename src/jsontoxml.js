import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
const data = [
  {
    id: 1,
    temaIndicador: "Indian",
    codigo: "001",
    observaciones: "Interactions Specialist tertiary Regional Tennessee",
    activo: "SI",
    urlImagen: "http://placeimg.com/640/480",
    color: "cyan",
    createdAt: "2022-01-26T18:48:36.002Z",
  },
];

const data2 = [
    {
      id: 2,
      temaIndicador: "Indian",
      codigo: "002",
      observaciones: "Interactions Specialist tertiary Regional Tennessee",
      activo: "SI",
      urlImagen: "http://placeimg.com/640/480",
      color: "cyan",
      createdAt: "2022-01-26T18:48:36.002Z",
    },
  ];
const JsonToExcel = () => {
 const downloadExcel = (data,data2) => {
    const a = XLSX.utils.json_to_sheet(data);
    const b = XLSX.utils.json_to_sheet(data2);
    console.log(a[0])
let x=[],y=[]
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
for(let i=0;i<b.length;i++){
    y.push(b[i])
    }
console.log(x,y)
    // x = x.concat(['']).concat(y)
    // let worksheet = XLSX.utils.json_to_sheet(x)

    // const workbook = XLSX.utils.book_new();
   
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  return <button onClick={() => downloadExcel(data,data2)}>Download As Excel</button>;
};

export default JsonToExcel;
