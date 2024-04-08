import "./bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <>
            <div className="container">
                <Layout />
            </div>
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    const app = ReactDOM.createRoot(document.getElementById("app"));

    app.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}
