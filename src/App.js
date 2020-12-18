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


class App extends React.Component {

  state = {
      newActiveCart: {
        menu_items: [],
        cart_items: []
      },
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

  addToCart = (menuId) => {
    fetch('http://localhost:3000/api/v1/cart_items',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        menu_item_id: menuId,
        cart_id: this.state.activeCart.id
      })
    })
    .then(r => r.json())
    // .then(newItemInCart =>
    //   let copyOfNewItemInOrderCart = [...this.state.activeCart.cart_items, newItemInCart]
    //   let copyOfCart = {
    //     ...this.state.activeCart,
    //   activeCart.cart_items: copyOfNewItemInOrderCart
    //   }
    //   this.setState({
    //     activeCart: copyOfCart
    //   })

    //   this.setState(prevState => {
    //   return({
    //     newActiveCart: [...prevState.activeCart.menu_items, data]
    //   })
    // }
    // {
    // let newCartItems = [...this.state.activeCart.cart_items]
    // const theNewCartIndex = newCartItems.indexOf(menuId)
    // newCartItems.splice(theNewCartIndex, 1)
    // this.setState({activeCart: newCartItems})
    // }
    // )
  }

  removeFromCart = (menuitem) => {
    let cartItem = this.state.activeCart.cart_items.find(item => item.menu_item_id == menuitem.id )

    fetch(`http://localhost:3000/api/v1/cart_items/${cartItem.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data, "success!")
        // let newCartItems = [...this.state.activeCart.cart_items]
        // const theNewCartIndex = newCartItems.indexOf(menuitem)
        // newCartItems.splice(theNewCartIndex, 1)
        // this.setState({activeCart: newCartItems})
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
      console.log("orig",this.state.activeCart)
      console.log("new", this.state.newActiveCart)
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
                    cartItems={this.state.activeCart.menu_items}
                    removeFromCart={this.removeFromCart}
                    handleCheckout={this.handleCheckout}
                  />
                </div>
              </div>
            </main>
            <footer> By SunJet Liu </footer>
          </div>
        }
        </>
    );
  }

}

export default withRouter(App);
