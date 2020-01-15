import React from "react";

// TODO: Add dismiss button
export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`my-3 alert alert-${alert.type}`}>
        <i className="fas fa-info-circle mr-2" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
