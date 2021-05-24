import React from "react";

const Lightbulb = (props) => {
  return (
    <div>
      <img onClick={props.func} src={props.src} alt="" />
    </div>
  );
};

export default Lightbulb;
