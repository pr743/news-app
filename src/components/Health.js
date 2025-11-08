import React from "react";
import News from "./News";

const Health = ({ setProgress }) => {
  return (
    <News
      heading="स्वास्थ्य समाचार"
      category="health"
      setProgress={setProgress}
    />
  );
};

export default Health;
