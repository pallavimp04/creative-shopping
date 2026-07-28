import React, { Fragment } from "react";
import RightCartIcon from "../Cart/RightCartIcon";

function Footer() {
  return (
    <Fragment>
      <RightCartIcon />
      <div className="text-center bg-dark text-white py-2 fixed-bottom footer">
        <span className="footer-section">
          Developed by{" "}
          <a href="" className="footer-link" target="blank">
            Creative Workss
          </a>
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;
