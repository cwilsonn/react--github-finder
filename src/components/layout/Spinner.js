import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt="Loading..." className="m-auto h-25 w-25 d-block " />
  </Fragment>
);

export default Spinner;
