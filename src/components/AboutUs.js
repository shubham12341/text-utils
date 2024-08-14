import React from "react";

export default function AboutUs(props) {
  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
  };
  return (
    <>
      <div className="container my-3">
        <h1 style={myStyle}>About Us</h1>
      </div>
      <div
        className="accordion container my-2"
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Purpose
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Text Utils</strong> is designed to help users quickly and
              easily analyze text. Whether you need to count words, characters,
              or switch between light and dark modes, Text Utils provides a
              simple and efficient solution.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Key Features
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong> Real-Time Text Analysis:</strong> Get instant feedback on
              the number of words and characters as you type.
              <br />
              <strong> Dark Mode: </strong> A user-friendly toggle to switch
              between light and dark themes, making it comfortable to use in
              different lighting conditions. <br />
              <strong>Responsive Design: </strong> Access the tool on any
              device, from desktops to smartphones, without compromising on
              experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Why We Built It
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>The goal behind Text Utils</strong> was to create a
              lightweight and straightforward tool that anyone can use to
              perform basic text operations without the need for complex
              software.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
