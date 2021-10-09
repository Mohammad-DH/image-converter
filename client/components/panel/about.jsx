import React, { useEffect, useContext } from "react";

import GeneralFileInput from "./generalFileInput";
import { AppContext } from "../../context api/ContextApi";

function about(props) {
  {
    /* context api setup */
  }
  const { RESTART } = useContext(AppContext);

  {
    /* useEffect will restart all the states to the defualt valeus whene page is changed */
  }
  useEffect(() => {
    RESTART();
  }, []);

  return <div className="about">{props.children}</div>;
}

export default about;
