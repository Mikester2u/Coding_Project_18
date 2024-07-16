//U22562170

import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Uploading image...');

    setTimeout(() => {
        alert('Image uploaded successfully!');
   }, 2000);
 };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;