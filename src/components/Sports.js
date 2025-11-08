// import React from "react";
// import News from "./News";

// function Sports() {
//   return (
//     <div>
//       <News heading="स्पोर्ट्स समाचार" category="sports" />
//     </div>
//   );
// }

// export default Sports;

import React from "react";
import News from "./News";

const Sports = ({ setProgress }) => {
  return (
    <News
      setProgress={setProgress}
      category="sports"
      heading="Sports News"
    />
  );
};

export default Sports;
