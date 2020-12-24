import React, { Component } from 'react'
import formatCurrency from "./util";


export default class History extends Component {

    renderItems = (menu_items) => {
        // console.log("menuitems", menu_items)
        return(
                menu_items.map((item,i) => {
                    // console.log("item",item)
                    return(
                        <div className="mcard" key={i}>
                        <ul className='menu-items'>
                            <a>
                                <img alt={item.name} src={item.img} />
                                <p> {item.name}</p>
                                <p> {item.description}</p>
                            </a>
                            <div className="product-price">
                                <div> Price: {formatCurrency(item.price)}
                                </div>
                            </div>
                        </ul>
                        </div>
                    )
                })
        )
    }


    renderOldCart = () => {
        // console.log("history",this.props.pastOrders)
        // console.log("cartsitems", carts.menu_items)
        return (
            this.props.pastOrders.map((carts)=> {
                return(
                    <div>
                            <p> Cart #: {carts.id} </p>
                            {this.renderItems(carts.menu_items)}
                    </div>

                )

            })
            )
    }

    render() {
        // console.log("old cart", this.props.pastOrders)
        return (
            <div>
                <p>Your Order History</p>
                {this.renderOldCart()}
            </div>
        )
    }

}
