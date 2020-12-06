import React from 'react';
import classes from './Toolbar.css';
import Logo from '/home/greedy17/ReactProjects/burger-builder/src/Components/Logo/Logo.js';
import NavigationItems from '/home/greedy17/ReactProjects/burger-builder/src/Components/Navigation/NavigationItems/NavigationItems.js';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default toolbar;