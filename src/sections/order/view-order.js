import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function SimpleDialog(props) {
  const { onClose, open, id, order } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <>
      <DialogTitle sx={{textAlign:"center"}}>Order</DialogTitle>
      <ul style={{padding:"1rem 5rem"}}>
        <li>
        <p>{"id -"} {order.orderId}</p>
        </li>
        <li>
        <p>{"status -"} {order.status}</p>
        </li>
        <li>
        <p>{"cargo -"} {order.shipId}</p>
        </li>
        <li>
        <p>{"customer -"} {order.customerId}</p>
        </li>
        <li>
        <p>{"Item -"} {order.item}</p>
        </li>
        <li>
        <p>{"quantity -"} {order.quantity}</p>
        </li>
      </ul>
      </>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  id: PropTypes.string,
  order: PropTypes.object
};
