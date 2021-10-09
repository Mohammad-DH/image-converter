import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context api/ContextApi";
import axios from "axios";

function btn() {
  //get the current path from DOM
  const [path, setpath] = useState("/");
  useEffect(() => {
    setpath(window.location.pathname);
  });
  // context api setup
  const { SET, file, format, width, height, degree, SETlink } =
    useContext(AppContext);

  //upload all the files
  function upload() {
    // a if for checking path and data
    if (
      file === "" ||
      (path === "/convert" && format === "") ||
      (path === "/resize" && width === "") ||
      (path === "/resize" && height === "") ||
      (path === "/rotate" && degree === "")
    ) {
      // data is not set ,prevent sending rong data and stop the animation
      console.log("no data");
      SET("stop");
    } else {
      // data is set ,sending data and play the animation
      SET("play");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("format", format);
      formData.append("width", width);
      formData.append("height", height);
      formData.append("degree", degree);

      axios
        .post(`http://localhost:4000${path}`, formData)
        .then((res) => {
          if (res) {
            SETlink(res.data.link);
            setTimeout(() => {
              SET("stop");
            }, 5000);
            setTimeout(() => {
              SETlink("");
            }, 30000);
          }
        })
        .catch((err) => {
          //showing the error and stoping the animation
          console.log(err);
          SET("stop");
        });
    }
  }

  return (
    <button className="btn" onClick={() => upload()}>
      <img src="/btn.png" alt="" />

      <style jsx>{`
        .btn {
          position: absolute;
          bottom: -5.5vh;
          width: 6vw;
          height: 6vw;
          border: none;
          border-radius: 100vw;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease-out;
        }

        .btn:hover,
        .btn:focus {
          transform: scale(1.05);
        }

        .btn_img {
          width: 6vw;
        }

        @media only screen and (max-width: 600px) {
          .btn {
            position: absolute;
            margin-top: 2vh;
            bottom: -2vh;
            border: none;
            border-radius: 100vw;
            background-color: transparent;
            cursor: pointer;
            transition: transform 0.2s ease-out;
          }
          img {
            width: 18vw;
            height: 18vw;
          }
        }
      `}</style>
    </button>
  );
}

export default btn;
