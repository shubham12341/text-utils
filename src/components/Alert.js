import React from "react";

export default function Alert(props) {
  const capitalise = (str) => {
    const lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className="" style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalise(props.alert.type)}</strong> :{" "}
          {props.alert.message}
        </div>
      )}
    </div>
  );
}
