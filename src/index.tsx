import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from 'simple-react-lightbox'
import { ThemeProvider } from "./components/Common/ThemeProvider"; 

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
