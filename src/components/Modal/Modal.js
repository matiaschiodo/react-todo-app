import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({ children, openModal }) {
  let classNames;
  if(openModal) {
    classNames = "modal open-modal"
  } else {
    classNames = "modal"
  }

  return ReactDOM.createPortal(
      <div className={classNames}>
        {children}
      </div>,
    document.getElementById('modal')
  );
}

export { Modal };