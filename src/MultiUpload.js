import React, { useState } from "react";
import "./App.css";
import FileSaver from "file-saver";


function MultiUpload() {
  const [files, setFiles] = useState(null);
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    let files1=e.target.files
    for(let i=0;i<files1.length;i++){
        fileNames.push(files1[i].name)
    }


    const fileList = [];

    for (const file of files1) {
      const fileName = file.name;
      const fileExtension = file.name.split(".")[1];
      const filePath = `./uploads/${fileName}.${fileExtension}`;

      const saveFile = new FileSaver(file, {
        filename: filePath,
      });
      saveFile.save();

      fileList.push(filePath);
    }
  };

  const handleSubmit = () => {
    const uploadsFolder = "./uploads";
  
  };

  return (
    <div className="App">
      <h1>Profile Picture Uploader</h1>
      <input type="file" multiple name="files" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {fileNames.map((fileName) => (
          <li key={fileName}>{fileName}</li>
        ))}
      </ul>
    </div>
  );
}

export default MultiUpload;
