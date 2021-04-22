import React from "react";

const SessionErrors = ({ errors }) => {
  const sessionErrors = Object.values(errors).map((error, i) => {
    return <div key={i}>{error}</div>;
  });

  return <div>{sessionErrors}</div>;
};

export default SessionErrors;
