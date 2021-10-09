import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context api/ContextApi";

function animation() {
  {
    /* refrencing to the video element */
  }
  const video = useRef(null);
  {
    /* context api setup */
  }
  const { state } = useContext(AppContext);

  {
    /** useEffect will control the animation base on state in context api */
  }
  useEffect(() => {
    if (state === "stop") {
      video.current.pause();
      video.current.currentTime = 0;
    } else {
      video.current.play();
    }
  }, [state]);

  return (
    <>
      <video ref={video} className="animation_video" muted="" loop="">
        <source src="./animation.ogg" type="video/ogg" />
        <source src="./animation.mp4" type="video/mp4" />
      </video>

      {/* ------------------ STYLE ------------------ */}
      <style jsx>{`
        .animation_video {
          width: 80%;
          border: 8px solid rgb(255, 255, 255);
          border-radius: 2vw;
          opacity: 70%;
        }
        @media only screen and (max-width: 600px) {
          .animation_video {
            width: 95%;
            border: 8px solid rgb(255, 255, 255);
            border-radius: 5vw;
            opacity: 85%;
          }
        }
      `}</style>
    </>
  );
}

export default animation;
