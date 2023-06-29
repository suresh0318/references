import React, { useState } from "react";
import FileSaver from "file-saver";

const Multi1 = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileEvent = (event) => {
    const files = event.target.files;
    const fileList = [];

    for (const file of files) {
      const fileName = file.name;
      const fileExtension = file.name.split(".")[1];
      const filePath = `uploads/${fileName}.${fileExtension}`;

      const saveFile = new FileSaver(file, {
        filename: filePath,
      });
      saveFile.save();

      fileList.push(filePath);
    }

    setUploadedFiles(fileList);
  };

  return (
    <div>
      <input type="file" multiple />
      <button onClick={handleFileEvent}>Upload Files</button>
      <ul>
        {uploadedFiles.map((filePath) => (
          <li key={filePath}>{filePath}</li>
        ))}
      </ul>
    </div>
  );
};

export default Multi1;
