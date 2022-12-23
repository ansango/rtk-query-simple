import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux";
import { worker } from "./mocks/browser";

async function render() {
  if (process.env.NODE_ENV === "development") {
    await worker.start();
  }
  const rootNode = ReactDOM.createRoot( document.getElementById("root") as HTMLElement)

  rootNode.render(<React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
  );
}

render();