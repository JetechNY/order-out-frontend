import React from 'react'
import formatCurrency from "./util";

class Cart extends React.Component {

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

    removeFromCart = (item) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x.id !== item.id),
        });
    };

    addToCart = (item) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
        if (item.id === item.id) {
            item.count++;
            alreadyInCart = true;
        }
        });
        if (!alreadyInCart) {
        cartItems.push({ ...item, count: 1 });
        }
        this.setState({ cartItems });
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.function(this.state)
    }


    // editCart = (cartObj) =>{
    //     fetch(`http://localhost:3000/api/v1/carts`,{
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             body: JSON.stringify(body)
    //         })
    //         .then(r => r.json())
    //         .then(data => function(data))
    // }

    // addCart = (cartObj) => {
    //     fetch(`http://localhost:3000/api/v1/carts`,{
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             body: JSON.stringify({...cartObj, user_id: this.props.user.id})
    //         })
    //         .then(r => r.json())
    //         .then(data => this.setState(prevState => {
    //             return ({
    //                 cartItems: [...prevState.cartItems, data]
    //             })
    //         }))
    // }

    // // deletecart = (cartId) => {
    //     fetch(`http://localhost:3000/api/v1/carts/${cartId}`, {
    //         method: 'DELETE'}
    //     )
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data, "success!")
    //     })
    //     .catch(err => console.log(err))
    // }


    render(){
        const { cartItems } = this.state;
        console.log("state", this.state)
        return (
            <div className="cart-empty-or-not">
                {cartItems.length === 0 ? (
                <div className="cart cart-header">Cart is empty</div>
                ) : (
                <div className="cart cart-header">
                    You have {cartItems.length} items in the cart{" "}
                </div>
                )}

                <div>
                    <div className="cart">
                            <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                <div>
                                    <img src={item.img} alt={item.name}></img>
                                </div>
                                <div>
                                    <div>{item.name}</div>
                                    <div className="right">
                                    {formatCurrency(item.price)} x {item.count}{" "}
                                    <button
                                        className="button"
                                        onClick={() => this.removeFromCart(item)}
                                    >
                                        Remove Item
                                    </button>
                                    </div>
                                </div>
                                </li>
                            ))}
                            </ul>
                    </div>

                    {cartItems.length !== 0 && (
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total:{" "}
                                    {formatCurrency(
                                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                    )}
                                </div>
                                <button className="button primary">CheckOut</button>
                            </div>
                        </div>
                    )}
                        <div className="cart">
                            <div className="note">
                                <div>
                                    <form onSubmit={this.submitHandler}>
                                        <input type="text" name="note" placeholder="Note" value={this.state.cartItems.note} onChange={this.changeHandler}/>
                                        <input type="submit" value="Add Note"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        );
    }

}

export default Cart
