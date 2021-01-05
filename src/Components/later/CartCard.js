import React from "react";
import formatCurrency from "../util";
import { Button } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

export default function CartCard(props) {
  const { menuItems } = this.props;

  return menuItems.map((item) => (
    <div className="cartcard">
      <ul className="cart-items">
        <Fade left cascade>
          <div key={item.id}>
            <div>
              <img src={item.img} alt={item.name}></img>
            </div>
            <div>
              <Button.Group>
                <Button onClick={this.handleMinus}>-</Button>
                <Button>{this.state.count}</Button>
                <Button onClick={this.handleAdd}>+</Button>
              </Button.Group>
            </div>
            <div>
              <div>{item.name}</div>
              <div className="price">
                {formatCurrency(item.price)}
                {/* x {item.count}{" "} */}
                <button
                  //this just shows the item iteself times how many (how many currently not showing)
                  className="button primary"
                  onClick={() => this.props.removeFromCart(item)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </ul>
    </div>
  ));
}
