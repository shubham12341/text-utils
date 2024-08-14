import React from "react";

export default function (props) {
  const capitalise = (str) => {
    const lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.message}
      </div>
    )
  );
}
