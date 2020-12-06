import React, {Component} from 'react';
import Aux from '../Aux/Aux.js';
import classes from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState( (prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )     
  }
}
  


export default Layout;