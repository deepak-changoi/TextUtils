import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "));
  };

  const handleClearText = () => {
    let newText = '';
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style = {{color : props.mode === 'light'? 'black' : '#1CB752'}}>
       
        <label htmlFor="myBox" className="form-label"></label>
        <h1>Enter the Text to analyze below</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style = {{backgroundColor: props.mode === 'light'? 'white' : 'rgb(10, 9, 9)', color : props.mode === 'light'? 'black' : 'white'}}
          id="myBox"
          rows="10"
        ></textarea>
        <br />
        <button className="btn btn-primary mx -2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text to Clipboard
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        <div className="container my-3" >
          <h2>Your Text Summary</h2>
          <p style = {{color : props.mode === 'light'? 'black' : 'white'}}>
            {text.split(" ").length} Words and {text.length} characters
          </p>
          <p style = {{color : props.mode === 'light'? 'black' : 'white'}}>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p style = {{color : props.mode === 'light'? 'black' : 'white'}}>{text.length > 0 ? text : "Enter Your Text to Preview"}</p>
        </div>
      </div>
    </>
  );
}
