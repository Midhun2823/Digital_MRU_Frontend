import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ItemContextProvider from "./Context/ItemContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </BrowserRouter>
);
