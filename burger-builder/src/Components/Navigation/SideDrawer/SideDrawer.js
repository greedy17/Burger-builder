import React from 'react';
import Logo from '/home/greedy17/ReactProjects/burger-builder/src/Components/Logo/Logo.js';
import NavigationItems from '/home/greedy17/ReactProjects/burger-builder/src/Components/Navigation/NavigationItems/NavigationItems.js';
import classes from './SideDrawer.css';
import Backdrop from '/home/greedy17/ReactProjects/burger-builder/src/Components/UI/Backdrop/Backdrop.js';
import Aux from '../../../hoc/Aux/Aux.js';

const sideDrawer = (props) => {
  let attatchedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attatchedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attatchedClasses.join(' ')}>
          <div className={classes.Logo}>
            <Logo/>
          </div>
          <nav>
              <NavigationItems />
          </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;