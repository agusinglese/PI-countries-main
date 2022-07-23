import React from "react";
import "./Loader.css";

//loading.io --> loader animados
const Loader = () => {
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
