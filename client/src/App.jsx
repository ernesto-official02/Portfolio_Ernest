import React from "react";
import "./App.css";
import "./index.css";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";
import Footer from "./Footer";
import Contact from "./Contact";


function app()
{
    return(
        <>
        <Header/>
        <Hero/>
       <Services/>
       <Work/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default app;