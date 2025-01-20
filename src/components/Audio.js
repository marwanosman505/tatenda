import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { ImSpinner2 } from "react-icons/im";

const Audio = (props) => {
  const trackId = props.trackId;
  const isActive = props.isActive;
  const onPlayRequest = props.onPlayRequest;

  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Prevent auto-play if the user has manually paused.
  const [userHasPaused, setUserHasPaused] = useState(false);

  // Example list of audio tracks
  const tracks = [
    { name: "Wonka Hogwarts", file: "/audio/02_WONKAHOGWORTS.mp3" },
    { name: "The Vikings", file: "/audio/01_TheVikings.mp3" },
    { name: "Land of the Disco", file: "/audio/02_LandOfTheDisco.mp3" },
    { name: "Zombie Apocalypse", file: "/audio/03_ZombiApoceclypse.mp3" },
    { name: "Sugary", file: "/audio/01_Sugary.mp3" },
  ];

  // Keep track of the currently selected track
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  // Refs
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  // Volume range
  const MAX = 20;

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

  // Adjust audio volume
  const handleVolume = (e) => {
    if (!audioRef.current) return;
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
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

  // Auto-play when the component scrolls into view, unless user paused
  useEffect(() => {
    if (!containerRef.current || !audioRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          // If scrolled into view
          if (entry.isIntersecting) {
            // Attempt auto-play if not already playing, user hasn't paused
            if (!play && !userHasPaused) {
              setLoading(true);
              setPlay(true);
              try {
                await audioRef.current.play();
              } catch (err) {
                console.error("Autoplay failed or was prevented:", err);
                setPlay(false);
              }
              setLoading(false);
            }
          } else {
            // If scrolled out of view and it's playing, pause it
            if (play) {
              // setPlay(false);
              // audioRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [play, userHasPaused]);

  return (
    <div ref={containerRef} className="absolute shadow-sm top-5 z-50 opacity-90">
      <div className="h-[100px] flex">
        <div className="flex justify-center bg-blue-200 items-center px-5 py-5">
          {/* Play/Pause Button */}
          <button onClick={handleToggle}>
            {loading ? (
              <ImSpinner2 className="animate-spin" />
            ) : play ? (
              <FaPause />
            ) : (
              <FaPlay />
            )}
          </button>

          {/* Volume Control */}
          <div className="mx-4 flex items-center sm:relative hidden">
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
        <div className="relative bg-white h-full text-[20px] sm:text-[30px] flex items-center">
          <button onClick={toggleDropdown} className="flex items-center px-5 h-full">
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
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 sm:text-[19px]"
                  >
                    {track.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Audio;
