<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
>>>>>>> 91cda3d31d9ce61a28a672f39b81b32358d4e15d

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
       <App /> 
  </StrictMode>
);
=======
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
>>>>>>> 91cda3d31d9ce61a28a672f39b81b32358d4e15d
