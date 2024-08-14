import React, { useState } from "react";

export default function TextForm(props) {
  const handleResetClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been reset!", "success");
  };
  const handleUpperCaseClick = () => {
    // console.log("Upper Case Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Uppercase!", "success");
  };
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lowercase!", "success");
  };
  const handleOnchange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const handleRemoveSpacesClick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container my-3 ${
          props.mode === "light" ? "text-black" : "text-white"
        }`}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control "
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-1"
            onClick={handleResetClick}
          >
            Reset
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-1"
            onClick={handleUpperCaseClick}
          >
            Convert To UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-1"
            onClick={handleLowerCaseClick}
          >
            Convert To LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-1"
            onClick={handleRemoveSpacesClick}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className={`container my-2 ${
          props.mode === "light" ? "text-black" : "text-white"
        }`}
      >
        <h3>Your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} charachters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes may need read these words.
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter some text above to preview it."}</p>
        {/* <p>{text}</p> */}
      </div>
    </>
  );
}
