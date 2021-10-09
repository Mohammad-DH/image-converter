import React, { useContext } from "react";

import { AppContext } from "../../context api/ContextApi";

import General from "../../components/panel/general";

function index() {
  {
    /* context api setup */
  }
  const { SETwidth, SETheight } = useContext(AppContext);
  return (
    <div>
      <General>
        <div className="main">
          <div className="input_box">
            <label htmlFor="width">Width :</label>
            <input
              onChange={(e) => SETwidth(e.target.value)}
              required
              id="width"
              placeholder="px"
              name="width"
              type="number"
            />
          </div>
          <div className="input_box">
            <label htmlFor="height">Height :</label>
            <input
              onChange={(e) => SETheight(e.target.value)}
              required
              id="height"
              placeholder="px"
              name="height"
              type="number"
            />
          </div>
        </div>
      </General>

      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          margin-top: -6vh;
        }
        .input_box {
          padding: 1vh 0;
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 0.5vh;
        }
        input {
          width: 12vw;
          height: 2rem;
          border: 1px solid white;
          border-radius: 100vw;
          background: #afd7ff;
          padding: 1vh 1vh;
          font-size: 2.5vh;
        }
        @media only screen and (max-width: 600px) {
          .main {
            margin-top: 0vh;
          }
          label {
            font-size: 2vh;
          }
          input {
            width: 40vw;
            font-size: 3vw;
            height: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default index;
