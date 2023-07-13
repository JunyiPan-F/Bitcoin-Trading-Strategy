import "./Desktop2.css";
import React from "react";
const Desktop2 = () => {
  return (
    <div className="desktop-2">
      <div className="upload-your-stock-container">
        <p className="upload-your-stock">Upload your stock data file</p>
        <p className="upload-your-stock">{`(in cvs format) below `}</p>
      </div>
      <div className="button">
        <div className="button-child" />
      </div>
      <div className="text">
        <b className="reminder">Reminder</b>
        <div className="file-should-be-container">
          <span className="file-should-be-container1">
            <p className="upload-your-stock">
              File should be submitted in this form: name + “.csv”
            </p>
            <p className="upload-your-stock">
              For example: APPL.csv; MSFT.csv ...
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
