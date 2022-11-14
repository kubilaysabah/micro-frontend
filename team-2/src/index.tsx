import React from "react";
import ReactDOM from "react-dom/client";
import Slider from './components/Slider'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>
);
