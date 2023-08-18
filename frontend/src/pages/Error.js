import React from "react";

const Error = () => {
  const errorStyles = {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "10px",
    border: "1px solid #f5c6cb",
    borderRadius: "5px",
    textAlign: "center",
    margin: "20px auto",
    maxWidth: "400px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={errorStyles}>
      <p>This Page Does Not Exist</p>
    </div>
  );
};

export default Error;
