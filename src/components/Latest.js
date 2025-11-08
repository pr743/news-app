import React from "react";
import News from "./News";

function Latest({ setProgress }) {
  return (
    <div>
      <News heading="नवीनतम समाचार" category="latest"
      setProgress={setProgress}  />;
    </div>
  );
}

export default Latest;
