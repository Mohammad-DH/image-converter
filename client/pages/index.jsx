import HomePanel from "../components/home/panel";

export default function Home() {
  return (
    <div className="main">
      <div className="panel">
        <p>
          welcome to the <strong>King Image Optimization </strong>,
        </p>
        <p>
          were you can <strong>Convert</strong> , <strong>Resize</strong> or{" "}
          <strong>Rotate</strong> your images.
        </p>
        <div className="icons">
          <HomePanel />
        </div>
      </div>

      {/* ------------------ STYLE ------------------ */}

      <style jsx>{`
        .main {
          display: flex;
          font-size: 2.1vh;
        }
        .panel {
          width: 40vw;
          height: 40vh;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .panel p {
          padding: 0.5vh 0;
          color: rgb(255, 255, 255);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
