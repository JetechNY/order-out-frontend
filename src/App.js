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

  state = {
      cartItems: []
  }

  componentDidMount() {
      this.fetchCart()
  }

  fetchCart(){
      fetch('http://localhost:3000/api/v1/carts')
      .then(response => response.json())
      .then(cartItems => {
          this.setState({cartItems: cartItems[0].menu_items})
      });
  }

  createOrder = (order) => {
    alert("Thank you for your order! Your food is on the way. ");
  };

  removeFromCart = (product) => {
      const cartItems = this.state.cartItems.slice();
      this.setState({
        cartItems: cartItems.filter((x) => x.id !== product.id),
      });
  // fetch('http://localhost:3000/api/v1/carts'), {method:"DELETE"})
  };

  addToCart = (cartItem) => {
    const newCart = [...this.state.cartItems];
    newCart.push({ ...cartItem});
    console.log("newcart",newCart)
    this.setState({cartItems: newCart})
    // debugger
    // fetch('http://localhost:3000/api/v1/carts/1',{
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify(newCart)
    // })
    // .then(r => r.json())
    // .then(data => console.log("new data", data))
  }



    render(){
    return (
      <div className="grid-container">
        <header>
          <NavBar/>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <RestaurantContainer
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer> By SunJet Liu </footer>
      </div>
    );
  }

}


export default App;
