import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Berries from "./pages/Berries"
import Goats from "./pages/Goats"
import React, {useEffect, useState} from 'react'
import AboutGoats from "./pages/AboutGoats";
import OurHerd from "./pages/OurHerd";
import Does from "./pages/Does";
import SingleGoatInfo from "./pages/SingleGoatInfo";
import GoatsForSale from "./pages/GoatsForSale";
import KiddingSchedule from "./pages/KiddingSchedule";
import Bucks from "./pages/Bucks";
import PurchaseBerries from "./pages/PurchaseBerries"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import logo from './images/logo.png';


const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth);
    };
   const handleClick = (e) => {
       setDisplayDropdown(!displayDropdown);
   }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    function checkWidth (width) {
        if (width > 940) {
            width = 940;
        } else {
            width = window.innerWidth;
        }
        return width
    }
    function displayDropdownFunction() {
       handleClick();
    }

  return (
      <Router>
          {checkWidth(window.innerWidth) >= 940 ? (
            <div className='navbar'>
                <Link  to='/'>
                    <img src={logo} width={150} height={150}/>
                </Link>
                <Link className= 'navbarLink' to='/'>Home</Link>
                <Link className= 'navbarLink' to='pages/About.js'>About</Link>
                <div className={'dropdown'}>
                    <Link className= 'navbarLink' to='pages/Berries.js'>Berries</Link>
                    <div className={'dropdown-content'}>
                        <Link className= 'navbarLink'to={'/pages/Berries.js'}>About Our Berries</Link>
                        <Link className= 'navbarLink' to={'/pages/PurchaseBerries.js'}>Purchase Berries</Link>
                    </div>
                </div>
                <div className={'dropdown'}>
                <Link className= 'navbarLink' to='pages/Goats.js'>Goats</Link>
                    <div className={'dropdown-content'}>
                        <Link className= 'navbarLink'to={'/pages/AboutGoats.js'}>About Our Goats</Link>
                        <Link className= 'navbarLink' to={'/pages/GoatsForSale.js'}>For Sale</Link>
                        <Link className= 'navbarLink' to={'/pages/KiddingSchedule.js'}>2022 Kidding Schedule</Link>
                        <div className={'ourHerdDropdown'}>
                            <Link className= 'navbarLink' to={'/pages/OurHerd.js'}>Our Herd</Link>
                            <div className={'ourHerdDropdownContent'}>
                                <Link className= 'navbarLink' to={'/pages/Does.js'}>Does</Link>
                                <Link className= 'navbarLink' to={'/pages/Bucks.js'}>Bucks</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div>
          <div className='dropdown'>
              <button onClick={displayDropdownFunction} className={'mobileDropdownBtn'}>
              <FontAwesomeIcon icon={faBars} className={'burgerIcon'}/>
              </button>
              <div className={'mobileNavbarLogo'}>
                  <Link  to='/'>
                      <img src={logo} width={100} height={100}/>
                  </Link>
              </div>
              {displayDropdown ? (
                  console.log('Bob' + displayDropdown),
              <div className={'dropdown-content'}>
              <Link className= 'navbarLink' to='/'>Home</Link>
              <Link className= 'navbarLink' to='pages/About.js'>About</Link>
              <Link className= 'navbarLink' to='pages/Berries.js'>Berries</Link>
              <div className={''}>
                  <Link className= 'navbarLink' to='pages/Goats.js'>Goats</Link>
                  <div className={'goatDropdownContent'}>
                      <Link className= 'navbarLink'to={'/pages/AboutGoats.js'}>About Our Goats</Link>
                      <Link className= 'navbarLink' to={'/pages/GoatsForSale.js'}>For Sale</Link>
                      <Link className= 'navbarLink' to={'/pages/KiddingSchedule.js'}>2022 Kidding Schedule</Link>
                      <div className={'ourHerdDropdown'}>
                          <Link className= 'navbarLink' to={'/pages/OurHerd.js'}>Our Herd</Link>
                          <div className={'ourHerdDropdownContent'}>
                              <Link className= 'navbarLink' to={'/pages/Does.js'}>Does</Link>
                              <Link className= 'navbarLink' to={'/pages/Bucks.js'}>Bucks</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
              ) : null }

          </div>
            </div>
      )}

          <Routes>
              <Route path="/"  element={<Home/>}/>
              <Route path="pages/About.js"  element={<About/>}/>
              <Route path="pages/Berries.js"  element={<Berries/>}/>
              <Route path="pages/Goats.js"  element={<Goats/>}/>
              <Route path="pages/AboutGoats.js"  element={<AboutGoats/>}/>
              <Route path="pages/Home.js"  element={<Home/>}/>
              <Route path="pages/OurHerd.js"  element={<OurHerd/>}/>
              <Route path="pages/Does.js"  element={<Does/>}/>
              <Route path="pages/Bucks.js"  element={<Bucks/>}/>
              <Route path="pages/Does.js/pages/SingleGoatInfo"  element={<SingleGoatInfo/>}/>
              <Route path="pages/Bucks.js/pages/SingleGoatInfo"  element={<SingleGoatInfo/>}/>
              <Route path="pages/Does.js/pages/SingleGoatInfo/pages/GoatsForSale.js"  element={<GoatsForSale/>}/>
              <Route path="pages/Bucks.js/pages/SingleGoatInfo/pages/GoatsForSale.js"  element={<GoatsForSale/>}/>
              <Route path="pages/AboutGoats.js/pages/GoatsForSale.js"  element={<GoatsForSale/>}/>
              <Route path="pages/GoatsForSale.js"  element={<GoatsForSale/>}/>
              <Route path="pages/OurHerd.js/GoatsForSale.js"  element={<GoatsForSale/>}/>
              <Route path="pages/KiddingSchedule.js"  element={<KiddingSchedule/>}/>
              <Route path="pages/KiddingSchedule.js/pages/ForSale.js"  element={<GoatsForSale/>}/>
              <Route path="pages/PurchaseBerries.js"  element={<PurchaseBerries/>}/>

          </Routes>
      </Router>

  );
}

export default App;
