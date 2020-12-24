import React, { Component } from 'react'
import MenuCard from './MenuCard'
import formatCurrency from "./util";


export default class History extends Component {

    renderItems = () => {
        
    }


    renderOldCart = () => {
        // console.log("history",this.props.pastOrders)
        return (
            this.props.pastOrders.map((carts)=> {
                // console.log("cartsitems", carts.menu_items)
                return(
                    // Cart #: {carts.id}
                        carts.menu_items.map((item,i) => {
                            console.log("item",item)
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
