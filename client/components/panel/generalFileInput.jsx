import React, { useState, useContext } from "react";

import { AppContext } from "../../context api/ContextApi";

function generalFileInput() {
  //context api setup
  const { SETfile } = useContext(AppContext);

  const [info, setinfo] = useState("");

  const handeler = (e) => {
    //set file data from input to context api
    SETfile(e.target.files[0]);
    //showing the file size
    if (e.target.value) {
      const [file] = e.target.files;
      const { name: fileName, size } = file;
      const fileSize = (size / 1000).toFixed(2);
      setinfo(`${fileName} - ${fileSize}KB`);
    }
  };

  return (
    <>
      <div className="form_input">
        <input
          onChange={(e) => handeler(e)}
          type="file"
          name="file"
          required
          className="file"
          id="file"
        />
        <label className="label" htmlFor="file">
          <img className="label_img" src="./image.svg" alt="" />
        </label>
        <p className="file_name">{info}</p>
      </div>

      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .form_input {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          position: relative;
          top: -11vh;
        }
        .file {
          opacity: 0;
          width: 0.1px;
          height: 0.1px;
          position: absolute;
        }

        .label {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease-out;
          padding: 1vw;
          padding-left: 2vw;
          padding-top: 2vw;
          background: rgb(114, 246, 255);
          background: linear-gradient(
            30deg,
            rgba(114, 246, 255, 0.75) 0%,
            rgba(255, 255, 255, 0.75) 100%
          );
          backdrop-filter: blur(50px);
          border-radius: 2vw;
        }
        .file_name {
          position: relative;
          font-size: 2vh;
          color: #555;
          margin-bottom: -2vh;
          margin-top: 2vh;
        }
        .label_img {
          width: 9vw;
        }
        .label:hover,
        .label:focus,
        .file:focus .label {
          transform: scale(1.05);
        }

        .file:focus .label {
          outline: 1px solid #000;
          outline: -webkit-focus-ring-color auto 2px;
        }

        @media only screen and (max-width: 600px) {
          .label {
            padding: 2vw;
            padding-left: 4vw;
            padding-top: 4vw;
          }
          .label_img {
            width: 25vw;
          }
        }
      `}</style>
    </>
  );
}

export default generalFileInput;
