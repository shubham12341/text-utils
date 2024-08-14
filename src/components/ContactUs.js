import React from "react";

export default function ContactUs(props) {
  return (
    <div
      className={`container my-3 ${
        props.mode === "light" ? "text-black" : "text-white"
      }`}
    >
      <form className="row g-3" method="post">
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            Enter Your First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            placeholder="First Name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Enter Your Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="Last Name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Enter Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Enter Your Mobile No
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMobileNo"
            placeholder="Mobile No"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputMsg" className="form-label">
            Enter Your Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Message"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Enter Your Address
          </label>
          <textarea
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
          />
        </div>
        <div className="col-md-6">
          <label htmlhtmlFor="inputCity" className="form-label">
            Enter Your City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="City"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Enter zip code
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Zipcode"
          />
        </div>

        <div className="d-flex justify-content-center col-12  container my-3">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "20%",
              fontSize: "18px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
