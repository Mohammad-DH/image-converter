import React, { useEffect, useState } from "react";
import Link from "next/link";

function list() {
  {
    /* list of paths */
  }
  const items = ["convert", "resize", "rotate", "about"];
  const [path, setpath] = useState("/");
  {
    /* geting current pat from DOM */
  }
  useEffect(() => {
    setpath(window.location.pathname);
  });

  return (
    <div className="list">
      <div className="logo">
        <Link href="/">
          <h1 className={path === `/` ? "king" : ""}>king</h1>
        </Link>
      </div>
      <div className="items">
        {items.map((e, index) => {
          return (
            <Link key={index} href={`/${e}`}>
              <h2
                className={
                  path === `/${e}` || path === `home` ? " active" : "iteam"
                }
              >
                {e}
              </h2>
            </Link>
          );
        })}
      </div>

      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .list {
          height: 8vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .logo {
          margin-right: 25vw;
          width: fit-content;
          cursor: pointer;
          font-size: 2.5vh;
        }
        .items {
          height: 100%;
          width: 40%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-evenly;
        }
        .iteam {
          cursor: pointer;
          transition: all 0.3s;
          transform: scale(0.9);
          background-color: rgba(255, 255, 255, 0.5);
          padding: 1vh;
          border-radius: 1vw;
          border-bottom: 1px solid rgb(77, 77, 77);
        }
        .iteam:hover {
          color: rgb(56, 56, 56);
          transform: scale(1.1);
        }
        .king {
          cursor: pointer;
          color: rgb(255, 58, 239);
        }
        .active {
          cursor: pointer;
          color: rgb(255, 58, 239);
          transform: scale(1.2);
          background-color: rgba(255, 255, 255, 0.5);
          padding: 1vh;
          border-radius: 1vw;
          border-bottom: 1px solid rgb(253, 110, 241);
          transition: all 0.3s;
        }
        .active:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default list;
