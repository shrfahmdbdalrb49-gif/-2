import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>شرف ERP</h1>
      <p>نظام تخطيط موارد المؤسسات</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
