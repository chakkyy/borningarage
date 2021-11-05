import React, { useState, useRef, useEffect } from "react";
import "./Player.scss";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = (props) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = 25;
    setDuration(seconds);
    progressBar.current.max = seconds;
    return () => {
      audioPlayer?.current?.pause();
    };
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    audioPlayer?.current?.duration,
  ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = (e) => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.background = `linear-gradient(to right, #f42737 0%, #f42737 ${
      (progressBar.current.value / duration) * 100
    }%, rgba(238, 238, 238, 0.7) ${
      (progressBar.current.value / duration) * 100
    }%, rgba(238, 238, 238, 0.7) 100%)`;
    setCurrentTime(progressBar.current.value);
    if (progressBar.current.value >= 25) endAudio();
  };

  function endAudio() {
    setIsPlaying(false);
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
    setCurrentTime(0);
  }

  return (
    <div className="carSound">
      <audio
        id="audiotest"
        ref={audioPlayer}
        src={props.url}
        preload="metadata"
      ></audio>
      <button onClick={togglePlayPause} className="playbutton">
        {isPlaying ? <FaPause /> : <FaPlay className="playicon" />}
      </button>
      <div className="carPlayer">
        <div className="timer">
          {calculateTime(currentTime)}
          {" / "}
          {duration ? calculateTime(duration) : "00:xx"}
        </div>
        <div className="progress-container">
          <input
            type="range"
            className="progress-inner"
            defaultValue="0"
            ref={progressBar}
            onChange={(e) => changeRange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
