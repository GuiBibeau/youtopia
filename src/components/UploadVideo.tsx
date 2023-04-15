"use client"
import React, { useRef, FormEvent } from "react";

export const UploadVideo: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if the file input has a file selected
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      // Extract the file from the input element
      const file = fileInputRef.current.files[0];
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fileInput">Upload a file:</label>
      <input type="file" id="fileInput" ref={fileInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};
