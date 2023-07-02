// plain CSS
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

// CSS module
/* import { useState } from "react";
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
} */

//////////////////////////

/* 
// CSS-in-JS (emotion)
/* /** @jsxImportSource @emotion/react  //this special comment allows that css attribute is valid on JSX element
import { css } from '@emotion/react';
import { useState } from 'react';


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
    <div 
      css={css` // The tagged template literal converts the style to a CSS class at runtime
        diplay: inline-flex;
        flex-direction: column;
        text-align: left;
        padding: 10px 15px;
        border-radius: 4px;
        border: 1px solid transparent;
        color: ${type === "warning" ? "#e7650f" : "#118da0" }
        background-color: ${type === "warning" ? "tomato" : "teal" };
        `}
    >
      <div 
        css={css`
          dispaly: flex;
          align-items: center;
          margin-bottom: 5px;
      `}
      >
        <span
            role="img"
            aria-label={type === "warning" ? "Warning" : "Information"}
            css={css`
              width: 30px;
            `}
          >
            {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span 
            css={`font-weight: bold;`}> {heading} 
        </span>


      {closable && (
        <button
          aria-label="Close"
          onClick={handleCloseClick}
          css={css`
            border: none;
            background: transparent;
            margin-left: auto;
            cursor: pointer;
            `}
          >
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      </div>

      <div css={css`
          margin-left: 30px;
          color: #000;`}> 
          {children} 
      </div>

      </div>
  );
}
 */

/////////////////////

// Tailwind CSS

import { useState } from "react";

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
    <div
      className={`inline-flex flex-col text-left  px-4  py-3  rounded-md border-1  border-transparent 
      ${type === "warning" ? "text-amber-900" : "text-teal-900"}
      ${type === "warning" ? "bg-amber-50" : "bg-teal-50"}
      `}
    >
      <div className="flex items-center mb-1">
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
          className="w-7"
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span className="font-bold"> {heading} </span>

        {closable && (
          <button
            aria-label="Close"
            onClick={handleCloseClick}
            className="border-none
                  bg-transparent
                  ml-auto
                  cursor-pointer"
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>

      <div className="ml-7 text-black">{children}</div>
    </div>
  );
}
