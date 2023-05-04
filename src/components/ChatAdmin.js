import React, { useState } from 'react'
import "../css/ChatAdmin.css";
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';




export default function ChatAdmin() {
  const [inputStr, setInputStr] = useState('');
  const [showPicker, setShowPicker] = useState(false);




  const sendMessage = () =>{
    console.log(`Sending message: ${inputStr}`);
    setInputStr('');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  
  function handleEnterClick(event) {
      sendMessage();

  }

  const onEmojiClick = (event) => {
    setInputStr(prevInput => prevInput + event.emoji);
    console.log(event.emoji);
    setShowPicker(false);
  };



  

  return (
    <>

      <div className='ChatBoxContainer'>
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
            <input 
          value={inputStr}
          onChange={e => setInputStr(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Hit the enter to respond"/>
            <SendIcon color="primary"  className='sendIconChatAdmin' onClick={handleEnterClick}/>
          </div>
          <div className='emoji'>
          <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker(val => !val)}
          alt='' />
        {showPicker && <Picker
          onEmojiClick={onEmojiClick} />}
          </div>
                   
        </div>
    </>
  );
}
