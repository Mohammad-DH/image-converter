import React from "react";

import About from "../../components/panel/about";

function index() {
  return (
    <div>
      <About>
        <p>
          This is a image optimizer made by <strong>Mohammad DH</strong> using
          next.js , node.js , sharp.js and some other tools , you can see the
          source code at my <strong>Github</strong> and take look at my{" "}
          <strong>Portfolio</strong> for more.
        </p>
        <div className="links">
          <a target="_blank" href="https://github.com/Mohammad-DH">
            Github
          </a>
          <br />
          <br />
          <a target="_blank" href="https://www.mohammaddh.com">
            my Portfolio
          </a>
        </div>
      </About>

      <style jsx>{`
        p {
          text-align: center;
          font-size: 2.5vh;
          color: white;
          font-weight: 500;
        }
        .links {
          margin-top: 6vh;
          text-align: center;
        }
        .links a {
          font-size: 2rem;
          color: white;
          text-decoration: none;
          transition: all 0.3s;
        }
        .links a:hover {
          color: rgb(0, 17, 255);
          border-bottom: 2px solid red;
          padding: 0 1vh;
          padding-bottom: 1vh;
        }
        @media only screen and (max-width: 600px) {
          p {
            font-size: 1rem;
          }
          .links a {
            font-size: 1.5rem;
          }
          .links {
            margin-top: 3vh;
          }
        }
      `}</style>
    </div>
  );
}

export default index;
