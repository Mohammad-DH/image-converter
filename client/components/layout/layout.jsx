import React, { useEffect, useState } from "react";
import Link from "next/link";

import NavList from "../Nav/list";
import MobileNavList from "../Nav/mobileList";
import Alert from "./alert";
import Animation from "./animation";
import MobileAlert from "./mobileAlert";

function layout(props) {
  const [path, setpath] = useState("/");
  useEffect(() => {
    setpath(window.location.pathname);
    console.log(path);
  });
  if (
    path === "/" ||
    path === "/resize" ||
    path === "/about" ||
    path === "/rotate" ||
    path === "/convert"
  ) {
    return (
      <div className="body">
        <div className="nav">
          <NavList />
        </div>
        <div className="MobileNav">
          <MobileNavList />
        </div>

        <div className="main">
          <div className="animation">
            <Animation />
          </div>
          {/* panel is the data that will be past by diffrent pages */}
          <div className="panel">{props.children}</div>
        </div>
        <div className="alert">
          <Alert />
        </div>
        <div className="MobileAlert">
          <MobileAlert />
        </div>
        {/* ------------------ STYLE ------------------ */}
        <style jsx>{`
          .body {
            width: 100vw;
            display: flex;
            flex-direction: column;
            background: url("./background.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .nav {
            width: 100vw;
            height: 8vh;
          }
          .MobileNav {
            display: none;
            z-index: 950;
          }
          .main {
            width: 100%;
            height: 92vh;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
          .animation {
            width: 67%;
            height: 95%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .panel {
            width: 25vw;
            height: 22vw;
            border-radius: 13vh;
            position: relative;
            background: rgb(141, 171, 255);
            background: linear-gradient(
              180deg,
              rgb(152, 179, 255) 0%,
              rgba(81, 127, 255, 1) 100%
            );
            border: 4px solid rgba(255, 255, 255, 0.65);
            padding: 5vh;
            right: 5%;

            display: flex;
            justify-content: center;
          }
          .MobileAlert {
            display: none;
          }
          @media only screen and (max-width: 600px) {
            .body {
              display: flex;
              flex-direction: column-reverse;
              height: 100vh;
              padding-bottom: 15vh;
            }
            .nav {
              display: none;
            }
            .MobileNav {
              display: block;
            }
            .main {
              flex-direction: column;
              justify-content: space-around;
              height: 100%;
            }
            .animation {
              width: 100%;
              height: fit-content;
            }
            .panel {
              margin-top: 0;
              margin-bottom: 15vw;
              width: 60%;
              height: fit-content;
              border-radius: 5vh;
              border: 4px solid rgba(255, 255, 255, 0.65);
              padding: 5vh;
              right: 0%;
            }
            .alert {
              display: none;
            }
            .MobileAlert {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        `}</style>
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="box">
          <p>don't worry</p>
          <Link href="/">
            <a className="link">back to home</a>
          </Link>
          <p>anyone could get lost</p>
        </div>

        <style jsx>{`
          .main {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: url("./404.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .box {
            position: absolute;
            bottom: 0;
            width: 100vw;
            height: 10vh;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background: yellow;
          }
          p {
            font-size: 3vh;
          }
          .link {
            width: 15vw;
            height: 6vh;
            text-decoration: none;
            font-size: 2.8vh;
            color: white;
            background: red;
            display: flex;
            align-items: center;
            justify-content: center;
            border: white 3px solid;
            border-radius: 100vw;
            margin-left: 8vw;
          }
        `}</style>
      </div>
    );
  }
}
export default layout;
