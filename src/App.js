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
      oricart: [],
      cartItems: []
  }

  componentDidMount() {
      this.fetchCart()
  }

  fetchCart(){
      fetch('http://localhost:3000/api/v1/carts')
      .then(response => response.json())
      .then(cart => {
        console.log("here", cart)
          this.setState({
            oricart: cart,
            cartItems: cart[0].menu_items
          })
      });
  }

  addToCart = (menuId) => {
    fetch('http://localhost:3000/api/v1/cart_items',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        menu_item_id: menuId,
        cart_id: 1
      })
    })
    .then(r => r.json())
    .then(data => this.setState(prevState => {
      return ({
          cartItems: [...prevState.cartItems, data]
      })
  }))
  }

  removeFromCart = (menuitem) => {
    let cartItem = this.state.oricart[0].cart_items.find(item => item.menu_item_id == menuitem.id )
    fetch(`http://localhost:3000/api/v1/cart_items/${cartItem.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data, "success!")
        let newCartItems = [...this.state.cartItems]
        const theNewCartIndex = newCartItems.indexOf(menuitem)
        newCartItems.splice(theNewCartIndex, 1)
        this.setState({cartItems: newCartItems})
    })
    .catch(err => console.log(err))
}

createOrder = (order) => {
  alert("Thank you for your order! Your food is on the way. ");
};

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
