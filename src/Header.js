import React from 'react'
import './Header.css';
import FacebookLogo from './images/facebook_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon  from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//Header is seperated into 3 sections, left, middle and right
function Header() {
  return (
    <div className="header">
      {/* header left section */}
      <div className="header__left">
        <img src={FacebookLogo} alt="facebook logo"/>
        <div className="header__input">
          <SearchIcon />
          <input type="text"/>
        </div> 
      </div>

      {/* header middle ection */}
      <div className="header__center">
        <div className="header__option">
          <HomeIcon fontSize="large"/>
        </div>

        <div className="header__option">
          <FlagIcon fontSize="large"/>
        </div>  

        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>   

        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large"/>
        </div>   

        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large"/>
        </div>                                 
      </div>
      

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Jerez</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>                


      </div>
    </div>
  );
}

export default Header
