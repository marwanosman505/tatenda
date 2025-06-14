import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { ImSpinner2 } from "react-icons/im";
import { IoMusicalNotesSharp } from "react-icons/io5";

const COLOR_CLASSES = {
  red: {
    background: "bg-red-500",
    border: "border-red-800",
    overlay: "bg-red-300/20",
  },
  blue: {
    background: "bg-blue-500",
    border: "border-blue-800",
    overlay: "bg-blue-300/20",
  },
  green: {
    background: "bg-green-500",
    border: "border-green-800",
    overlay: "bg-green-300/20",
  },
  white: {
    background: "bg-indigo-500",
    border: "border-indigo-800",
    overlay: "bg-indigo-300/20",
  },
  // ...add more as needed
};

const Track = (props) => {
  const trackId = props.trackId;
  const isActive = props.isActive;
  const onPlayRequest = props.onPlayRequest;
  const color = props.color;
  const title = props.title;
  const track = props.track;
  const genre = props.genre;
  const img = props.img;

  const classes = COLOR_CLASSES[color] ?? COLOR_CLASSES["red"];

  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Prevent auto-play if the user has manually paused.
  const [userHasPaused, setUserHasPaused] = useState(false);

  // Example list of audio tracks
  const tracks = [
    { name: " Hogwarts", file: "/audio/02_WONKAHOGWORTS.mp3" },
    { name: "The Vikings", file: "/audio/01_TheVikings.mp3" },
    { name: "Land of the Disco", file: "/audio/02_LandOfTheDisco.mp3" },
    { name: "Zombie Apocalypse", file: "/audio/03_ZombiApoceclypse.mp3" },
    { name: "Sugary", file: "/audio/01_Sugary.mp3" },
  ];

  // 1. If a track is not active, ensure we pause
  // 2. If track becomes active, check if we should resume playing
  useEffect(() => {
    if (!audioRef.current) return;

    if (!isActive) {
      // If we're not the active track, force pause
      setPlay(false);
      audioRef.current.pause();
    } else {
      // If we *are* the active track, but "play" was true, resume
      if (play) {
        // Attempt to keep playing
        audioRef.current.play().catch((err) => {
          console.error("Could not play:", err);
          setPlay(false);
        });
      }
    }
  }, [isActive]);

  // Keep track of the currently selected track
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  // Ref to the audio element
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  // Track current playback time and duration
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Manually toggling play/pause
  const handleToggle = async () => {
    if (!audioRef.current) return;

    if (play) {
      // Pause
      setPlay(false);
      audioRef.current.pause();
    } else {
      // Before playing, request to be the active track
      onPlayRequest(trackId);

      // Then attempt to play
      setLoading(true);
      setPlay(true);
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Manual play blocked:", err);
        setPlay(false);
      }
      setLoading(false);
    }
  };

  // Listen for metadata to get track duration, and time updates to keep slider in sync
  useEffect(() => {
    if (!audioRef.current) return;

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  // Handle seeking within the audio
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle selecting a new track
  const handleSelectTrack = async (track) => {
    if (!audioRef.current) return;

    setSelectedTrack(track);
    setLoading(true);
    audioRef.current.src = track.file;

    // If we're already playing (and not paused manually), continue
    if (play && !userHasPaused) {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Autoplay or manual play was blocked:", err);
        setPlay(false);
      }
    }
    setLoading(false);
    setShowDropdown(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  };

  return (
    <div ref={containerRef} className="shadow-smz-50 opacity-90 min-w-[60%]">
      <div className="h-[140px] flex ">
      <span
        className={`hidden lg:flex ${classes.background}  ${classes.border} w-[140px] items-center justify-center`}
        >
          <img src={img}></img>
        <IoMusicalNotesSharp className="text-white" />
        </span>

        <div className={`flex flex-col gap-2 px-5 min-w-[400px] ${classes.overlay}`}>
          <div className="flex justify-between py-2">
            <h3 className="text-[20px] text-left font-medium">{title}</h3>
            <h3 className="text-[18px] text-left font-medium sm:bg-gray-300 rounded-lg px-3 py-1">
              # {genre}
            </h3>
          </div>
          <div className="flex w-full text-[65px] items-center">
            {/* Play/Pause Button */}
            <button onClick={handleToggle}>
              {loading ? (
                <ImSpinner2 className="animate-spin" />
              ) : play ? (
                <IoIosPause />
              ) : (
                <IoIosPlay />
              )}
            </button>

            {/* Timestamp Slider */}
            <div className="mx-4 flex flex-col gap-2 flex-grow  items-center">
              <div className="flex justify-between w-full">
                <span className="text-sm">
                {formatTime(currentTime)}
                </span>
                <span className="text-sm">
                {formatTime(duration)}
                </span>

              </div>
              <input
                type="range"
                className="bg-transparent w-full mr-2 accent-cyan-100"
                min={0}
                max={duration}
                step={0.1} // or you can use 1 for a full second step
                value={currentTime}
                onChange={handleSeek}
              />
            </div>

            {/* Audio Element */}
            <audio src={track} ref={audioRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
