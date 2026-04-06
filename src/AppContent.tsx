import React from "react";
import { Routes, Route } from "react-router-dom";

import MobileMenu from "./components/mobileMenu/MobileMenu";
import Scrollbar from "./components/Scrollbar/Scrollbar";
import Header from "./components/Header/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import WorksDetailLoader from "./pages/WorksPages/WorksDetailLoader";
import Photos from "./pages/Photos";

import useRippleTransition from "./components/RippleTransition/useRippleTransition";

function AppContent() {
    const { navigateWithRipple, RippleOverlay } = useRippleTransition();

    return (
        <>
        <div className="App">
            <Scrollbar />
            <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/works/:categorySlug" element={<Works />} />
                    <Route path="/works/:category/:workId" element={<WorksDetailLoader />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/photos/:categorySlug" element={<Photos />} />
                    <Route path="/photos/:categorySlug/:subSlug" element={<Photos />} />
                </Routes>

                <MobileMenu navigateWithRipple={navigateWithRipple} />
        </div>

        {/* ← Routerの中だけどRoutesの外 */}
        <RippleOverlay />
        </>
    );
}

export default AppContent;