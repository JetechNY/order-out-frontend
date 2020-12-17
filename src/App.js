import React from 'react';
import NavBar from './Components/Navbar';
import RestaurantContainer from './Containers/RestaurantContainer';
import Cart from './Components/Cart';
import {
  withRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';


class App extends React.Component {

  render(){
    return (
      <div className="grid-container">
        <header>
          <NavBar/>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <RestaurantContainer/>
            </div>
            <div className="sidebar">
              <Cart/>
            </div>
          </div>
        </main>
        <footer>
          By SunJet Liu
        </footer>
      </div>
    );
  }

}


export default App;
