import React from "react";
import authors from "./data";

// COMPONENTS
import Sidebar from "./Sidebar.js";
import AuthorList from "./AuthorList.js";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <Sidebar />

        <AuthorList authors={authors} />
      </div>
    </div>
  );
}

export default App;
