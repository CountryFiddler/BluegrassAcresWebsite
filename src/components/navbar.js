import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Berries from "../pages/Berries";
import Goats from "../pages/Goats";
const navbar= () =>{
    return (
        <Router>
            <div>
                <Link to='/'>Home</Link>
                <Link to='pages/About.js'>About</Link>
                <Link to='pages/Berries.js'>Berries</Link>
                <Link to='pages/Goats.js'>Goats</Link>
            </div>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="pages/About.js"  element={<About/>}/>
                <Route path="pages/Berries.js"  element={<Berries/>}/>
                <Route path="pages/Goats.js"  element={<Goats/>}/>

            </Routes>
        </Router>
    );
}
export default navbar;
