import React from 'react';
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Reroute from './components/Reroute';
import { MetaMaskProvider } from "metamask-react";
import TestHome from './components/TestHome';




const rootElement = document.getElementById("root");
render(
    <MetaMaskProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TestHome />} />
            <Route path="/home" element={<App />} />
            <Route path="/test" element={<Reroute />} />
        </Routes>
    </BrowserRouter>
    </MetaMaskProvider>,
    rootElement
);

serviceWorker.unregister();
