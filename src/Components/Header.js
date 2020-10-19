import React from 'react'
import h from './Img/h.PNG'
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';


function Header(){
    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: theme.palette.background.paper,
          width: 500,
          color:"black",
        },
      }));
    return (<div>
        <div className="_nav">
        <img src={h}/>
        <ul className="list">
            
            <span>
            <li>Home</li>
            <li>Setup</li>
            <li>Boards</li>
            <li>Services</li></span>
        </ul>
        </div>
        <div className="_nav_img">  </div>

      
   
      
    
    </div>)
}
export default Header;