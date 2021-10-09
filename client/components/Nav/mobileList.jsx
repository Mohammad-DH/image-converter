import React, { useEffect, useState } from "react";
import Link from "next/link";

function list() {
  {
    /* list of paths */
  }
  const [path, setpath] = useState("/");
  {
    /* geting current pat from DOM */
  }
  useEffect(() => {
    setpath(window.location.pathname);
  });

  return (
    <div className="list">
      <div className="items">
        <Link href="/convert">
          <div className={path === "/convert" ? "item active" : "item"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="{130}"
              height="132.181"
              viewBox="0 0 130 132.181"
            >
              <g id="convert_icon" transform="translate(1234.013 -21.061)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M49.182,16.239v.188H90.5a2.65,2.65,0,0,1,.308.017,54.773,54.773,0,0,1,11.148,1.915h0a39.53,39.53,0,0,1,9.974,4.368,33.185,33.185,0,0,1,5.642,4.34,30.939,30.939,0,0,1,4.16,4.967,40.906,40.906,0,0,1,4.485,9.3,79.993,79.993,0,0,1,3.135,12.279,34.8,34.8,0,0,1,.53,4.309,8.692,8.692,0,0,1-.47,3.736,4.644,4.644,0,0,1-.943,1.425,4.274,4.274,0,0,1-1.6,1.02c-4.32,1.579-7.851-2.237-9.974-4.531h0l-.39-.422a32.753,32.753,0,0,0-12.986-8.318A59.369,59.369,0,0,0,86.32,47.7H48.868l.017.285v9.857a2.07,2.07,0,0,1-.017.285,5.568,5.568,0,0,1-2.516,4.887,7.457,7.457,0,0,1-6.192.242,2.565,2.565,0,0,1-.744-.368L2.471,36.417,2.3,36.28A5.015,5.015,0,0,1,.115,31.057,7.455,7.455,0,0,1,3.286,27L37.31,2.561A14.553,14.553,0,0,1,41.784.281a6.426,6.426,0,0,1,3.747,0,4.844,4.844,0,0,1,2.949,2.662A9.05,9.05,0,0,1,49.2,6.8V16a1.71,1.71,0,0,1,0,.248Zm31.648,99.7v-.188H39.5a2.605,2.605,0,0,1-.308-.017,54.755,54.755,0,0,1-11.148-1.915h0a39.491,39.491,0,0,1-9.974-4.368,33.152,33.152,0,0,1-5.645-4.366,31.013,31.013,0,0,1-4.186-5.012A43.684,43.684,0,0,1,3.466,89.813,74.978,74.978,0,0,1,.385,76.742a24.4,24.4,0,0,1-.251-3.283,7.52,7.52,0,0,1,.487-2.941,4.653,4.653,0,0,1,.94-1.425,4.275,4.275,0,0,1,1.6-1.034c4.32-1.579,7.851,2.237,9.974,4.531h0l.39.422a32.73,32.73,0,0,0,12.986,8.318,59.369,59.369,0,0,0,17.2,3.134H81.148l-.017-.285V74.345a2.068,2.068,0,0,1,.02-.285,5.568,5.568,0,0,1,2.516-4.89,7.454,7.454,0,0,1,6.2-.256,2.522,2.522,0,0,1,.744.368l36.942,26.467.174.137a5.021,5.021,0,0,1,2.183,5.235,7.454,7.454,0,0,1-3.172,4.046L92.712,129.624a14.532,14.532,0,0,1-4.474,2.28,6.44,6.44,0,0,1-3.75,0,4.845,4.845,0,0,1-2.949-2.664,9.054,9.054,0,0,1-.724-3.861v-9.2a2.144,2.144,0,0,1,.014-.245Zm4.254-2.961a5.22,5.22,0,0,1,.7,3.046v9.355a5.13,5.13,0,0,0,.316,2.083c.06.128.068.177.074.18a1.519,1.519,0,0,0,.641-.091,9.564,9.564,0,0,0,2.824-1.5l34.016-24.441c.769-.553,1.308-1.06,1.4-1.456.04-.168-.143-.447-.653-.878L87.873,73.1q-1.174-.322-1.476-.137-.259.157-.3,1.254v9.868a4.673,4.673,0,0,1-.624,2.938A4.234,4.234,0,0,1,82.5,88.929a2.7,2.7,0,0,1-.6.068H43.579a64.837,64.837,0,0,1-18.9-3.448A37.632,37.632,0,0,1,9.763,75.986l-.425-.456h0C8.165,74.26,6.255,72.194,5.2,72.251a4.389,4.389,0,0,0-.12,1.225,21.237,21.237,0,0,0,.231,2.736,70.448,70.448,0,0,0,2.878,12.3,39.324,39.324,0,0,0,4.274,9.218,26.341,26.341,0,0,0,3.562,4.274,28.364,28.364,0,0,0,4.819,3.71,34.586,34.586,0,0,0,8.694,3.787,49.316,49.316,0,0,0,10.039,1.71h41.7a4.121,4.121,0,0,1,3.81,1.755ZM44.93,19.2a5.2,5.2,0,0,1-.7-3.046V6.79a5.158,5.158,0,0,0-.316-2.083c-.06-.128-.068-.177-.074-.18a1.516,1.516,0,0,0-.641.091,9.572,9.572,0,0,0-2.824,1.5L6.355,30.567c-.769.553-1.308,1.063-1.4,1.456-.04.171.142.447.653.878Q23.863,46.009,42.135,59.08q1.174.322,1.473.137c.174-.105.285-.524.3-1.254V48.1a4.673,4.673,0,0,1,.633-2.944,4.237,4.237,0,0,1,2.964-1.906,2.709,2.709,0,0,1,.6-.068h38.31a64.751,64.751,0,0,1,18.9,3.448A37.631,37.631,0,0,1,120.233,56.2l.422.456h0c1.174,1.271,3.083,3.337,4.143,3.28a5.857,5.857,0,0,0,.1-1.841,30.606,30.606,0,0,0-.47-3.776A75.947,75.947,0,0,0,121.482,42.7a36.574,36.574,0,0,0-3.989-8.287,26.427,26.427,0,0,0-3.528-4.237,28.312,28.312,0,0,0-4.784-3.7,34.582,34.582,0,0,0-8.694-3.787,49.323,49.323,0,0,0-10.039-1.71H48.74a4.115,4.115,0,0,1-3.81-1.755Z"
                  transform="translate(-1234.024 21.059)"
                  fill="#006fff"
                />
              </g>
            </svg>
          </div>
        </Link>
        <Link href="/resize">
          <div className={path === "/resize" ? "item active" : "item"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110.97"
              height="110.97"
              viewBox="0 0 110.97 110.97"
            >
              <g id="resize_icon" transform="translate(768.689 231.569)">
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(-19 -19)"
                >
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M103.165,5H51.948a4.268,4.268,0,0,0,0,8.537h51.217a4.268,4.268,0,0,1,4.268,4.268v85.36a4.268,4.268,0,0,1-4.268,4.268H17.8a4.268,4.268,0,0,1-4.268-4.268V51.948a4.268,4.268,0,0,0-8.537,0v51.217a12.8,12.8,0,0,0,12.8,12.8h85.36a12.8,12.8,0,0,0,12.8-12.8V17.8A12.8,12.8,0,0,0,103.165,5Z"
                    transform="translate(-754.689 -217.569)"
                    fill="rgba(0,111,255,0.4)"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M55.12,1H13.49A12.49,12.49,0,0,0,1,13.49V55.12A12.49,12.49,0,0,0,13.49,67.61H55.12A12.49,12.49,0,0,0,67.61,55.12V13.49A12.49,12.49,0,0,0,55.12,1Zm4.163,54.12a4.163,4.163,0,0,1-4.163,4.163H13.49A4.163,4.163,0,0,1,9.327,55.12V13.49A4.163,4.163,0,0,1,13.49,9.327H55.12a4.163,4.163,0,0,1,4.163,4.163Zm24.98,12.49H71.773a4.163,4.163,0,0,0-4.163,4.163v12.49a4.163,4.163,0,0,0,8.327,0V75.937h8.327a4.163,4.163,0,0,0,0-8.327Zm8.324,41.63h12.49a4.163,4.163,0,0,0,4.163-4.163V92.587a4.163,4.163,0,1,0-8.327,0v8.327H92.587a4.163,4.163,0,1,0,0,8.327Z"
                    transform="translate(-750.689 -213.569)"
                    fill="#006fff"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Link>
        <Link href="/rotate">
          <div className={path === "/rotate" ? "item active" : "item"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="{139}"
              height="143.988"
              viewBox="0 0 139 143.988"
            >
              <g id="rotate_icon" transform="translate(1578.003 337.188)">
                <g id="rotate_svg" transform="translate(-1578.003 -337.188)">
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M66.49,135.067a62.408,62.408,0,1,1,47.8-108.753l-12.768.913.673,9.6L131,34.8l-2.023-28.8-9.6.673.823,11.95A72,72,0,1,0,65.485,144.6a73.357,73.357,0,0,0,7.535.384,71.7,71.7,0,0,0,45.211-16.03l-5.952-7.469a62.12,62.12,0,0,1-45.786,13.58Z"
                    transform="translate(-0.996 -0.998)"
                    fill="#006fff"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Link>
        <Link href="/about">
          <div className={path === "/about" ? "item active" : "item"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="{140}"
              height="{140}"
              viewBox="0 0 140 140"
            >
              <g id="about_icon" transform="translate(-41 7)">
                <g id="Group_1" data-name="Group 1" transform="translate(6 -1)">
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M75,5a70,70,0,1,0,70,70A70,70,0,0,0,75,5Zm0,134.815A64.815,64.815,0,1,1,139.815,75,64.815,64.815,0,0,1,75,139.815Z"
                    transform="translate(30 -11)"
                    fill="rgba(0,111,255,0.69)"
                  />
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M41.474,13a14.333,14.333,0,1,0,10.276,4.2A14.474,14.474,0,0,0,41.474,13Zm0,23.16a8.684,8.684,0,1,1,8.684-8.684,8.53,8.53,0,0,1-8.684,8.684Zm0,11.58A14.333,14.333,0,0,0,27,62.214v46.311a14.475,14.475,0,0,0,28.95,0V62.214A14.333,14.333,0,0,0,41.474,47.74Zm8.684,60.793a8.685,8.685,0,0,1-17.37,0V62.221a8.685,8.685,0,1,1,17.37,0Z"
                    transform="translate(64 -4)"
                    fill="#006fff"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>

      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .list {
          position: fixed;
          bottom: 0;
          height: 3.8rem;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          backdrop-filter: blur(500px);
          padding-top: 1vh;
          background-color: rgba(87, 87, 87, 0.788);
        }
        .items {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-evenly;
        }
        svg {
          width: 9vw;
          height: 9vw;
        }
        .item {
          background-color: rgb(255, 255, 255);
          padding: 2vw;
          border-radius: 100vw;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        .active {
          background-color: rgba(255, 58, 239, 0.76);
        }
      `}</style>
    </div>
  );
}

export default list;