import React, { useState } from 'react'
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Lottie from "lottie-react";
import animationData from "../assets/animations/59839.json";
import "../css/ChatAdmin.css";
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ChatAdmin() {
  const [open, setOpen] = useState(false);
  const [svgClassName,setsvgClassName]=useState('chatAdminMessageIcon')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setsvgClassName('chatAdminMessageIcon')
  };

  function handleSvgClick() {
    setsvgClassName('chatAdminMessageIconSmall')
  }
  

  return (
    <>
      <div className={svgClassName} onClick={handleSvgClick}>
        <Lottie
          animationData={animationData}
          autoplay
          loop
          onClick={handleClickOpen}
        />
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent>
          <div className="chatAdminProfilePic">
            <img
              src="https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png"
              alt=""
            />
            <img
              src="https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png"
              alt=""
              className="customerProfile"
            />
            <p>Hii there!</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="more" transform="translate(-556 -188)">
                <path
                  id="Vector"
                  d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z"
                  transform="translate(559 198)"
                  fill="none"
                  stroke="#292d32"
                  stroke-width="1.5"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z"
                  transform="translate(573 198)"
                  fill="none"
                  stroke="#292d32"
                  stroke-width="1.5"
                />
                <path
                  id="Vector-3"
                  data-name="Vector"
                  d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z"
                  transform="translate(566 198)"
                  fill="none"
                  stroke="#292d32"
                  stroke-width="1.5"
                />
                <path
                  id="Vector-4"
                  data-name="Vector"
                  d="M0,0H24V24H0Z"
                  transform="translate(556 188)"
                  fill="none"
                  opacity="0"
                />
              </g>
            </svg>
          </div>
          <div className="chatAdminMessageBox"></div>

          <div className="chatAdminInput">
            <input placeholder="Hit the enter to respond" />
            <SendIcon color="primary"  className='sendIconChatAdmin'/>
          </div>
          <InsertEmoticonIcon className="emoji"/>
          
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
