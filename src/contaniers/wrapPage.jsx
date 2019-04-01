import React from "react";
import "./wrapPage.css";

const wrapPage = () => {
  return (
    <div className="wrapPage">
      <div className="wrapHeader" />
      <div className="wrapPageContext">
        <div className="leftBlockDialogs">
          <div className="search">
            <input />
          </div>
          <ul className="dialogs">
            <li>
              <div className="dialog">
                <div className="imgDialogPhoto">
                <span className="textPlaceholder">DA</span>
                </div>
                <div>
Dialog Info
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="history" />
      </div>
    </div>
  );
};

export default wrapPage;
