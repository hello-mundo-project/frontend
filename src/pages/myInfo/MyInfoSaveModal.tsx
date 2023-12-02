import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
//import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "5px solid #04D98B",
  borderRadius: "30px"
};

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  actions?: React.ReactNode;
}

export const BasicSaveModal: React.FC<BasicModalProps> = ({ open, onClose, title, description, actions }) => {
  // const customButtonStyle = {
  //   width: "98px",
  //   height: "60px",
  //   margin: "0 10px",
  // };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} textAlign="center">
          {description}
        </Typography>
        <Box textAlign="center">{actions}</Box>
      </Box>
    </Modal>
  );
};
