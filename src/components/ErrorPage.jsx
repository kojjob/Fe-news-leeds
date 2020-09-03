import React from "react";

const ErrorPage = ({ err }) => {
  const error = err ? `${err.msg} : ${err.status}` : "Path not found: 404";

  return (
    <section className="error-message">
      <h4>Sorry, something went wrong</h4>
      <p>{error}</p>
    </section>
  );
};

export default ErrorPage;
