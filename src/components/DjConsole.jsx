import React, { useRef, useState } from "react";
import "../assets/scss/djConsole.scss";
import disk from "../assets/imgs/disk.png";
import consoleDj from "../assets/imgs/consoleDj.png";

export const DjConsole = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="dj-console">
      <img className="consoleDjImg" src={consoleDj} alt={consoleDj} />
      <div className="dj-screen">
        <div className="soundwave-animation">
          {[...Array(40)].map((_, idx) => (
            <div
              key={idx}
              className={isPlaying ? "bar" : "bar inactive"}
              style={{ animationDelay: `${idx * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      <button className="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
            </svg>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
            </svg>
          </>
        )}
      </button>
      <audio
        ref={audioRef}
        src="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
      ></audio>
    </div>
  );
};
