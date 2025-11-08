import React from "react";
import News from "./News";

const Business = ({ setProgress }) => {
  return (
    <News
      setProgress={setProgress}
      category="business"
      heading="Business News"
    />
  );
};

export default Business;
