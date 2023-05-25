import style from "./index.css";
import css from "classnames";
import React from "react";

export default function Alert({ children, type, message }) {

  const renderElAlert = function () {
    return React.cloneElement(children);
  }
    return (
        <div className={css(style.alert, style[type])}>
    
      {children ? renderElAlert() : message}
    </div>
      );
    }
