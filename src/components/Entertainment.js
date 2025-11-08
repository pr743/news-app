import React from "react";
import News from "./News";

const Entertainment = ({ setProgress }) => {
  return (
    <News
      heading="मनोरंजन समाचार"
      category="entertainment"
      setProgress={setProgress}
    />
  );
};

export default Entertainment;
