
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));


const Title = () => (
    <div>
        <h1>Title !!</h1>     
        <script>alert(1)</script>
    </div>
)


const HeadingComponent = () => (
  <div>
    <Title></Title>
     <h2>Heading !!</h2>
  </div>
)


root.render(<App/>);
