import React, { useState } from "react";
import "./metronome.css";
import high from "../assets/high.wav";
import low from "../assets/low.wav";
import { FiPlay, FiSquare } from "react-icons/fi";

const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [timer, setTimer] = useState(0);

  const claps = {
    highNote: new Audio(high),
    lowNote: new Audio(low),
  };

  const beat = 4;
  let count = 0;

  function handleBpmChange(e) {
    if (playing) {
      setPlaying(!playing);
      resetTimer();
    }
    setBpm(e.target.value);
  }

  function handleStartStop() {
    setPlaying(!playing);
    if (!playing) {
      setTimer(setInterval(play, (60 / bpm) * 1000));
      count = 0;
    } else {
      resetTimer();
    }
  }

  function play() {
    if (count % beat === 0) {
      claps.highNote.play();
    } else {
      claps.lowNote.play();
    }
    count = count + (1 % beat);
  }

  function resetTimer() {
    clearInterval(timer);
    setTimer(0);
  }

  return (
    <div className="wrapper">
      <div className="metronome">
        <div className="metronome-display">
          <h1>{bpm}</h1>
          <h3>BPM</h3>
        </div>

        <div className="metronome-slider">
          <span>-</span>
          <input
            type="range"
            className="slider"
            min={40}
            max={200}
            value={bpm}
            onChange={handleBpmChange}
          />
          <span>+</span>
        </div>

        <div className="metronome-controls" onClick={handleStartStop}>
          {playing ? <FiSquare /> : <FiPlay />}
        </div>
      </div>
    </div>
  );
};

export default Metronome;
