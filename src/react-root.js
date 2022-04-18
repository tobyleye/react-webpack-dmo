import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { App } from "./App.js";

function createElement({ id }) {
  let element = document.getElementById(id);
  if (element) {
    element.innerHTML = ``;
    return element;
  }
  element = document.createElement("div");
  element.setAttribute("id", id);
  document.body.appendChild(element);
  return element;
}
export class create {
  constructor() {
    this.root = createRoot(createElement({ id: "okra-root" }));
  }
  open(credentials = {}) {
    console.log("opening component with credentials", credentials);
    this.root.render(<App />);
  }
}
