import React from "react";
import spinner from "../assets/spinner_yellow.svg";
import warning from "../assets/warning.png";

interface LoadingProps {
  error: boolean | string;
}

const LoadingPage: React.FC<LoadingProps> = ({ error }) => {
  return (
    <div className="loadingContainer">
      {!error ? (
        <>
          <img className="spinner" src={spinner} alt="spinner" />
          <h4>loading trips...</h4>
        </>
      ) : (
        <>
          <img className="warning" src={warning} alt="warning" />
          <h3>Something went wrong</h3>
          <p>{error}</p>
        </>
      )}
    </div>
  );
};

export default LoadingPage;
