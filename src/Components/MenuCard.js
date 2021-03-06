import React from "react";
import formatCurrency from "./util";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Button } from "semantic-ui-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "900px",
  },
};

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
                <Button
                  style={{ backgroundColor: "#f0c040" }}
                  onClick={() => this.handleAdd(this.props.menuObj)}
                >
                  Add to cart
                </Button>
              </div>
            </ul>
          </div>
        </Fade>
        {menuObj && (
          <Modal
            isOpen={true}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <Zoom>
              <button onClick={this.closeModal} className="close-modal">
                X
              </button>
              {/* <Button onClick={() => this.closeModal()} floated="right" >X</Button> */}
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
                  <Button
                    style={{ backgroundColor: "#f0c040" }}
                    onClick={() => {
                      this.handleAdd(this.props.menuObj);
                      this.closeModal();
                    }}
                  >
                    Add to cart
                  </Button>
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
