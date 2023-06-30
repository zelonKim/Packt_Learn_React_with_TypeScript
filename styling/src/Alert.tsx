/* import { useState } from 'react';
import './Alert.css'

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  
  return (
    <div className={`container ${type}`}>
      
      <div className="header">
        <span role="img" aria-label={ type === 'warning' ? 'Warning' : 'Information' } className="header-icon">
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span className="header-text"> {heading} </span>
      </div>
      
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick} className="close-button">
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div className="content"> {children} </div>
    </div>
  );
}
 */

////////////////////////////

import { useState } from "react";
import potato from "./Alert.module.css";

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({
  type = "information",
  heading,
  children,
  closable,
  onClose,
}: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div className={`${potato.container} ${potato[type]}`}>
      <div className={potato.header}>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
          className={potato.headerIcon}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        {heading && <span className={potato.headerText}> {heading} </span>}
      </div>

      {closable && (
        <button
          aria-label="Close"
          onClick={handleCloseClick}
          className={potato.closeButton}
        >
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div className={potato.content}> {children} </div>
    </div>
  );
}
