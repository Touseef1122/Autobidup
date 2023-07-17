
import React, { useRef, useEffect, useState } from 'react';

const Component = () => {
    const setImageAction = async (event) => {
      event.preventDefault();
  
      const data = await fetch("https://autobidup.pythonanywhere.com/bidding/mainform", {
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({
  
        }),
      });
      const uploadedImage = await data.json();
      if (uploadedImage) {
        console.log('Successfully uploaded image');
      } else {
        console.log('Error Found');
      }
    };
  
    return (
      <div className="content">
        <form onSubmit={setImageAction}>
          <input type="file" name="image" />
          <br />
          <br />
          <button type="submit" name="upload">
            Upload
          </button>
        </form>
      </div>
    );
  };