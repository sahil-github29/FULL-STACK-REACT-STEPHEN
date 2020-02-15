// SurveyField contains logic to render single lable and text input
import React from "react";

export default ({ input }) => {
  console.log("Custom Field");
  return (
    <div>
      <input {...input} />{" "}
    </div>
  );
};
