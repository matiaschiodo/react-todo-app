import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import { TodoContext } from '../TodoContext'

function Modal({ children }) {
  const { openModal } = React.useContext(TodoContext);
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