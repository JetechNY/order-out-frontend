import React from "react";
import formatCurrency from "./util";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuObj: null,
    };
  }

  handleAdd = (itemId) => {
    this.props.addToCart(itemId);
    console.log("add to cart pressed and sent", this.props.menuObj);
  };

  openModal = (menuObj) => {
    this.setState({ menuObj });
    console.log(this.state);
  };

  closeModal = () => {
    this.setState({ menuObj: null });
  };

  render() {
    const { menuObj } = this.state;
    return (
      <div>
        <Fade up cascade>
          <div className="mcard">
            <ul className="menu-items">
              <a onClick={() => this.openModal(this.props.menuObj)}>
                <img
                  alt={this.props.menuObj.name}
                  src={this.props.menuObj.img}
                />
                <p>
                  {" "}
                  <strong style={{ fontSize: 20 }}>
                    {" "}
                    {this.props.menuObj.name}{" "}
                  </strong>{" "}
                </p>
                <p> {this.props.menuObj.description}</p>
              </a>
              <div className="product-price">
                <div type="number" step="0.01">
                  {" "}
                  Price: {formatCurrency(this.props.menuObj.price)}{" "}
                </div>
                <div className="button">
                  <button
                    onClick={() => this.handleAdd(this.props.menuObj)}
                    className="button primary"
                  >
                    {" "}
                    Add to cart
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </Fade>
        {menuObj && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details-modal">
                <img
                  alt={this.props.menuObj.name}
                  src={this.props.menuObj.img}
                />
                <div className="product-details-description">
                <p>
                  {" "}
                  <strong style={{ fontSize: 20 }}>
                    {" "}
                    {this.props.menuObj.name}{" "}
                  </strong>{" "}
                </p>
                <p> {this.props.menuObj.description}</p>

                </div>
                <div className="product-price">
                  <div type="number" step="0.01">
                    {" "}
                    Price: {formatCurrency(this.props.menuObj.price)}{" "}
                  </div>
                  <div className="button">
                  <button
                    onClick={() => {
                      this.handleAdd(this.props.menuObj)
                      this.closeModal()
                    }}
                    className="button primary"
                  >
                    {" "}
                    Add to cart
                  </button>
                </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default MenuCard;
