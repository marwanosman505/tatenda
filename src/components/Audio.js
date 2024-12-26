import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { ImSpinner2 } from "react-icons/im";

const Audio = () => {
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Example list of audio tracks
  const tracks = [
    { name: "Track 1", file: "/northside.mp3" },
    { name: "Track 2", file: "/northside.mp3" },
    { name: "Track 3", file: "/northside.mp3" },
  ];

  // Keep track of the currently selected track
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  const audioRef = useRef(null);
  const MAX = 20;

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (play) {
      setPlay(false);
      audioRef.current.pause();
    } else {
      setLoading(true);
      setPlay(true);
      await audioRef.current.play();
      setLoading(false);
    }
  };

  const handleVolume = (e) => {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle selecting a new track from the dropdown
  const handleSelectTrack = async (track) => {
    // Update the selected track
    setSelectedTrack(track);

    // Reset loading state
    setLoading(true);

    // Set the new audio source
    if (audioRef.current) {
      audioRef.current.src = track.file;
      // If the player was already playing, continue playback automatically
      if (play) {
        await audioRef.current.play();
      }
    }

    setLoading(false);
    setShowDropdown(false); // close the dropdown
  };

  return (
    <div className="absolute shadow-sm -translate-y-[120%] z-50 opacity-90 h-[100px] flex">
      <div className="flex justify-center bg-blue-200 items-center px-5 py-5">
        {/* Play/Pause Button */}
        <button onClick={toggleAudio}>
          {loading ? <ImSpinner2 className="animate-spin" /> : play ? <FaPause /> : <FaPlay />}
        </button>

        {/* Volume Control */}
        <div className="mx-4 flex items-center">
          <input
            type="range"
            className="bg-transparent w-32 mr-2 accent-cyan-100"
            min={0}
            max={MAX}
            onChange={handleVolume}
          />
          <HiMiniSpeakerWave aria-hidden="true" />
        </div>

        {/* Audio Element */}
        <audio src={selectedTrack.file} ref={audioRef} />

      </div>

      {/* Track Name & Dropdown Toggle */}
      <div className="relative bg-white h-full text-[30px] flex items-center">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-5 h-full"
        >
          {selectedTrack.name}
          {showDropdown ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <ul className="absolute top-full right-0 w-48 bg-white shadow-md border border-gray-200 z-10">
            {tracks.map((track, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleSelectTrack(track)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {track.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Audio;
