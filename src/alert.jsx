import style from "./index.css";
import css from "classnames";
import React from "react";

export default function Alert({ children, type, message }) {

  const renderElAlert = function () {
    return React.cloneElement(children);
  }
    return (
        <div className="alert">
    
      {children ? renderElAlert() : message}
    </div>
      );
    }
