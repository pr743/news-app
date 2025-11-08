import React from "react";
import News from "../components/News";

const Technology = ({ setProgress }) => {
  return (
    <News
      heading="टेक्नोलॉजी समाचार"
      category="technology"
      setProgress={setProgress}
    />
  );
};

export default Technology;
