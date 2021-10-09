import React, { useContext } from "react";

import { AppContext } from "../../context api/ContextApi";

import General from "../../components/panel/general";

function index() {
  {
    /* context api setup */
  }
  const { SETdegree } = useContext(AppContext);

  return (
    <div>
      <General action="rotate">
        <div className="main">
          <div className="input_box">
            <label htmlFor="rotateDegree">Rotate Degree :</label>
            <input
              onChange={(e) => SETdegree(e.target.value)}
              required
              id="rotateDegree"
              placeholder="degree"
              name="rotate degree"
              type="number"
            />
          </div>
        </div>
      </General>
      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .input_box {
          padding: 1vh 0;
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 0.5vh;
          font-size: 2vh;
        }
        input {
          width: 12vw;
          height: 2rem;
          border: 1px solid white;
          border-radius: 100vw;
          background: #afd7ff;
          padding: 1vh 0.5vh;
          font-size: 2.5vh;
        }
        @media only screen and (max-width: 600px) {
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
