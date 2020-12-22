import React from 'react';
import NavBar from './Components/Navbar';
import Search from './Components/Search';
import Account from './Components/Account';
import Home from './Components/Home';
import Filter from './Components/Filter';
import RestaurantContainer from './Containers/RestaurantContainer';
import Cart from './Components/Cart';
import {
  withRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import produce from "immer";


class App extends React.Component {

  state = {
      activeCart: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/1')
      .then(response => response.json())
      .then(data => {
        let activeCart = data.carts.filter(cart => cart.checkout === false)
        this.setState({
          activeCart: activeCart[0]
        })
      });
  }

  addToCart = (menuObj) => {
    // const cartItems = this.state.activeCart.menu_items.slice();
    // let alreadyInCart = false;
    // cartItems.forEach((item) => {
    //   if (item.id === menuObj.id) {
    //     item.count++;
    //     alreadyInCart = true;
    //   }
    // });
    // if (!alreadyInCart) {
    //   cartItems.push({ ...menuObj.id, count: 1 });
    // }
    fetch('http://localhost:3000/api/v1/cart_items', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        menu_item_id: menuObj.id,
        cart_id: this.state.activeCart.id
      })
    })
      .then(r => r.json())
      .then(data => {
        // debugger
        this.setState(produce(this.state, draft => {
          draft.activeCart.menu_items = [...draft.activeCart.menu_items, data.menu_item]
          draft.activeCart.cart_items = [...draft.activeCart.cart_items, data.cart_item]
        }))
      })
  }

  removeFromCart = (menuitem) => {
    let cartItem = this.state.activeCart.cart_items.find(item => item.menu_item_id == menuitem.id )
    //use filter instead of find?
    let cartIndex = this.state.activeCart.cart_items.indexOf(cartItem)
    let menuIndex = this.state.activeCart.menu_items.indexOf(menuitem)
    fetch(`http://localhost:3000/api/v1/cart_items/${cartItem.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState(produce(this.state, draft => {
        draft.activeCart.cart_items.splice(cartIndex, 1)
        draft.activeCart.menu_items.splice(menuIndex, 1)
      }))
    })
    .catch(err => console.log(err))
}

  handleCheckout = () => {
    alert("Thank you for your order! Your food is on the way. ");
      Promise.all([
        fetch('http://localhost:3000/api/v1/carts',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            note: "tester note",
            checkout: false,
            user_id: 1
          })
        })
        ,
        fetch(`http://localhost:3000/api/v1/carts/${this.state.activeCart.id}`,{
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
            checkout: true
          })
        })
      ])
      .then(([resp1, resp2]) => {
        return Promise.all([resp1.json(), resp2.json()])
      })
      .then(([data1, data2]) => {
        console.log(data1, data2)
        this.setState({
          activeCart: data1
        })
        this.props.history.push("/")

        })
      }



    render(){
      // console.log("activecart",this.state.activeCart)
      return (
        <>
        { this.state.activeCart.length === 0 ? <h2>loading</h2> :
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
                  <Route
                      path='/' exact
                      render={()=>{
                        return(
                          <div className='index'>
                            <Home/>
                          </div>
                        )
                      }}/>
                  <Route
                      path='/search'
                      render={()=>{
                        return(
                          <div className="index">
                          <Search/>
                          </div>
                        )
                  }}/>
                  <Route
                      path='/my-account'
                      render={()=>{
                        return(
                          <div className="index">
                          <Account/>
                          </div>
                        )
                  }}/>
                </div>
                <div className="sidebar">
                  <Cart
                    menuItems={this.state.activeCart.menu_items}
                    removeFromCart={this.removeFromCart}
                    handleCheckout={this.handleCheckout}
                  />
                </div>
              </div>
            </main>
            <footer> Order Out By SunJet Liu </footer>
          </div>
        }
        </>
    );
  }

}

export default withRouter(App);
