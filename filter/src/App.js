import "./App.css";
import "./images";
import React, { useState } from "react";
import images from "./images";

function App() {
  const [selectedImg, setselectedImg] = useState(images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="selected" className="selected" />
      </div>

      <div className="imgContainer">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="tantuni"
            onClick={() => setselectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
