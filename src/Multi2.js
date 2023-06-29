import React, { useState } from 'react';

function Multi2() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = () => {
    const names = selectedFiles.map((file) => {
      const newName = `profile_${Date.now()}_${file.name}`;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const dataUrl = reader.result;
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = newName;
        link.click();
      };
      return newName;
    });
    setFileNames(names);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      {fileNames.length > 0 && (
        <div>
          <h3>Uploaded Files:</h3>
          <ul>
            {fileNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Multi2;
