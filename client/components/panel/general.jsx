import React, { useEffect, useContext } from "react";

import GeneralFileInput from "./generalFileInput";
import { AppContext } from "../../context api/ContextApi";
import BTN from "./btn";

function general(props) {
  //context api setup
  const { RESTART } = useContext(AppContext);

  // useEffect will restart all the states to the defualt valeus whene page is changed
  useEffect(() => {
    RESTART();
  }, []);

  return (
    <form
      onSubmit={(e) => {
        //preventing page refresh
        e.preventDefault();
      }}
      className="form"
      encType="multipart/form-data"
    >
      <GeneralFileInput />

      <div className="setup">{props.children}</div>
      <BTN />

      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        @media only screen and (max-width: 600px) {
          .setup {
            position: relative;
            top: -10vh;
          }
        }
      `}</style>
    </form>
  );
}

export default general;
