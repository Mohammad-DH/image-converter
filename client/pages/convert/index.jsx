import React, { useContext } from "react";

import { AppContext } from "../../context api/ContextApi";

import General from "../../components/panel/general";

function index() {
  //context api setup

  const { SETformat } = useContext(AppContext);
  // list of formats
  const formats = ["png", "jpg", "webp", "tiff", "avif", "heif"];

  return (
    <div>
      <General>
        <div className="select">
          <select
            onChange={(e) => SETformat(e.target.value)}
            required
            name="format"
          >
            <option value={"null"} hidden>
              Select your format
            </option>
            {formats.map((e, index) => {
              return (
                <option
                  key={index}
                  className={`option option${index}`}
                  value={e}
                >
                  {e}
                </option>
              );
            })}
          </select>
        </div>
      </General>

      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .select::after {
          content: ;
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 1em;
          background: #afd7ff;
          cursor: pointer;
          pointer-events: none;
          -webkit-transition: 0.25s all ease;
          -o-transition: 0.25s all ease;
          transition: 0.25s all ease;
          color: white;
        }
        .select {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 18vw;
          height: 6vh;
          line-height: 3;
          background: #ffffff;
          overflow: hidden;
          border-radius: 1vh;
        }
        .select:hover::after {
          color: #59b800;
        }
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          appearance: none;
          outline: 0;
          box-shadow: none;
          border: 0 !important;
          background: #afd7ff;
          background-image: none;
        }
        select::-ms-expand {
          display: none;
        }
        select {
          flex: 1;
          padding: 0 0.5em;
          color: #fff;
          cursor: pointer;
          font-size: 2vh;
        }
        @media only screen and (max-width: 600px) {
          .select {
            width: 50vw;
            height: 6vh;
            margin-top: 10vw;
          }
        }
      `}</style>
    </div>
  );
}

export default index;
