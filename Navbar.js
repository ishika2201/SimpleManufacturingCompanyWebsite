import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Products from './Products';
import HeaderOption from './HeaderOption';
import Contact from './Contact';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import "./Navbar.css";
import Home from './Home';
import logo from './againnew.jpeg'
import { padding } from '@mui/system';

const Navbar = () => {
  return (
    <div>
        <Router>
        <div className="nav">
        <div className="lnav">
        <img className='logo' src={logo} width="60px" height="30px"/>
        </div>
        <div className="rnav">
        <Link style={{textDecoration: 'none'}} to='/Home'><HeaderOption Icon={HomeIcon} title='Home'/></Link>

        <Link style={{textDecoration: 'none'}} to='/Products'><HeaderOption Icon={CategoryIcon} title='Products'/></Link>

        <Link style={{textDecoration: 'none'}} to='/Contact'><HeaderOption Icon={PersonIcon} title='Contact Us'/></Link>
        </div>
        </div>
        

        <Switch>
          
        <Route path="/Home">
            <Home />
          </Route>

          <Route path="/Products">
            <Products />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>


        </Switch>
      </Router>

    </div>
  )
}

export default Navbar