import React, { useContext } from "react";
import { AppContext } from "../../context api/ContextApi";

function mobileAlert() {
  const { link, SETlink } = useContext(AppContext);

  return (
    <div className={link === "" ? "main" : "main active"}>
      <a
        onClick={() => {
          setTimeout(() => {
            SETlink("");
          }, 1);
        }}
        className="btn"
        href={`http://localhost:4000/${link}`}
        target="_blank"
        download
      >
        Download
      </a>

      <style jsx>{`
        .main {
          position: absolute;
          bottom: 5%;
          width: 90vw;
          height: 60vh;
          background-color: red;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          display: none;
          transition: 1s all ease-in-out;
          border-radius: 5vw;
        }
        .active {
          display: flex;
          animation: op 1s ease-in-out forwards;
        }
        @keyframes op {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 100;
          }
        }
        .btn {
          width: 10rem;
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: rgb(255, 255, 255);
          background-color: rgb(255, 0, 0);
          border: white 5px solid;
          border-radius: 100vw;
          font-size: 2.8vh;
        }
      `}</style>
    </div>
  );
}

export default mobileAlert;
