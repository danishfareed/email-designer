import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './containers/Footer';
import Header from './containers/Header';
import Home from './containers/Home';
import About from './containers/About';
import ContentLabelling from './containers/ContentLabelling';

const MyRouter = () => {
  return (
    <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/content-labelling" element={<ContentLabelling />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default MyRouter