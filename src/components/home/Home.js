import React from "react";
import FakeFooter from "../layouts/FakeFooter";
import Footer from "../layouts/Footer";

import Deliver from "./Deliver";
import Header from "./Header";

const Home = ()=>{
    return(
        <>
            <Header />
            <Deliver />
            <FakeFooter />
            <Footer />
        </>
    ) 
}

export default Home