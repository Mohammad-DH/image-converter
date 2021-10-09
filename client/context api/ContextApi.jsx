import React, { createContext, useState } from "react";

export const AppContext = createContext();

const Provider = (props) => {
  {
    /* states */
  }
  const [state, setstate] = useState("stop");
  const [file, setfile] = useState("");
  const [format, setformat] = useState("");
  const [width, setwidth] = useState("");
  const [height, setheight] = useState("");
  const [degree, setdegree] = useState("");
  const [link, setlink] = useState("");

  {
    /* functions for changing the state */
  }

  const SET = (i) => {
    setstate(i);
  };
  const SETfile = (i) => {
    setfile(i);
  };
  const SETformat = (i) => {
    setformat(i);
  };
  const SETwidth = (i) => {
    setwidth(i);
  };
  const SETheight = (i) => {
    setheight(i);
  };
  const SETdegree = (i) => {
    setdegree(i);
  };
  const SETlink = (i) => {
    setlink(i);
  };
  {
    /* restart functions for whene user change the page */
  }
  const RESTART = () => {
    setstate("stop");
    setfile("");
    setformat("");
    setwidth("");
    setheight("");
    setdegree("");
    setlink("");
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          SET,
          state,
          file,
          SETfile,
          format,
          SETformat,
          width,
          SETwidth,
          height,
          SETheight,
          degree,
          SETdegree,
          RESTART,
          SETlink,
          link,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default Provider;
