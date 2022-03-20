import React from 'react';
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);

serviceWorker.unregister();
