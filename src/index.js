import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [rated, setRated] = useState(0);
//   return (
//     <div>
//       <StarRating color="green" maxRating={5} size={30} onSetRated={setRated} />
//       <p>This movie is rated {rated} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating maxRating={10} color="red" size={20} className="test" />
    <Test /> */}
  </React.StrictMode>
);
