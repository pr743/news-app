// import React from 'react'
// import News from "./News";

// function Home() {
//   return (
//     <div>
//       <News heading="सभी समाचार" />
       
      
//     </div>
//   )
// }

// export default Home


import React from "react";
import News from "./News";

const Home = ({ setProgress }) => {
  return (
    <News
      setProgress={setProgress}
      category="general"
      heading="Top Headlines"
    />
  );
};

export default Home;
