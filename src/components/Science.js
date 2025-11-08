import React from "react";
import News from "../components/News";

const Science = ({ setProgress }) => {
  return (
    <News
      heading="विज्ञान समाचार"
      category="science"
      setProgress={setProgress}
    />
  );
};

export default Science;
