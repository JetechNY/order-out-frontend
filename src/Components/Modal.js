import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Content image>
        <Image size="medium" src={this.props.menuObj.img} wrapped />
        <Modal.Description>
          <Header>{this.props.menuObj.name}</Header>
          <p>{this.props.menuObj.description}</p>
          <div type="number" step="0.01">
            {" "}
            Price: {formatCurrency(this.props.menuObj.price)}{" "}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          labelPosition="right"
          color="f0c040"
          content="Add to Cart"
          onClick={() => setOpen(false)}
        >
          Add to Cart
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
