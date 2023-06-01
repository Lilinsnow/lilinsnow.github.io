import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineCloseCircle } from "react-icons/ai"
import "./modal.css";

export default function 
({title="Default Title", children, open, onClose}) {
  if(!open) return null;
  return ReactDOM.createPortal(
    <>
    <div className="modal-overlay"></div>
    <div className="modal-container">
      <div className="titleBar">
        <button onClick={onClose}>
          <AiOutlineCloseCircle />
        </button>
        <h2>{title}</h2>
      </div>
      <div className="modalBody">
        {children}
        <p className='moreLink'>
          <a href="https://google.com" target="_blank">More...</a>
        </p>
      </div>
    </div>
    </>,
    document.body
  )
}
