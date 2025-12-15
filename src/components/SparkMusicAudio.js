import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { ImSpinner2 } from "react-icons/im";

const SparkMusicAudio = (props) => {
  const { trackId, isActive, onPlayRequest } = props;

  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(false);

  const tracks = [
    {
      name: "The Chief & Frogs (audio story)",
      file: "/audio/TheChiefAndThousandFrogsStory.mp3",
    },
  ];

  const [selectedTrack] = useState(tracks[0]);
  const audioRef = useRef(null);

  const MAX = 20;

  // React to active track changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (!isActive) {
      setPlay(false);
      audioRef.current.pause();
    } else if (play) {
      audioRef.current
        .play()
        .catch((err) => {
          console.error("Could not play:", err);
          setPlay(false);
        });
    }
  }, [isActive, play]);

  const handleToggle = async () => {
    if (!audioRef.current) return;

    if (play) {
      setPlay(false);
      audioRef.current.pause();
    } else {
      if (onPlayRequest) onPlayRequest(trackId);

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

  const handleVolume = (e) => {
    if (!audioRef.current) return;
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  };

  return (
    <div className="w-full">
      <div className="flex items-stretch w-full rounded-xl overflow-hidden shadow-sm bg-white/90 border border-black/10">
        {/* Controls */}
        <div className="flex items-center gap-3 px-3 py-2 bg-black/5">
          <button
            onClick={handleToggle}
            className="h-9 w-9 grid place-items-center rounded-full bg-white shadow-sm border border-black/10
                       hover:bg-gray-50 active:bg-gray-100 transition"
            aria-label={play ? "Pause" : "Play"}
            type="button"
          >
            {loading ? (
              <ImSpinner2 className="animate-spin text-sm" />
            ) : play ? (
              <FaPause className="text-sm" />
            ) : (
              <FaPlay className="text-sm pl-[1px]" />
            )}
          </button>

          {/* Volume (sm and up) */}
          <div className="hidden sm:flex items-center gap-2">
            <input
              type="range"
              className="bg-transparent w-24 accent-black/70"
              min={0}
              max={MAX}
              onChange={handleVolume}
            />
            <HiMiniSpeakerWave aria-hidden="true" />
          </div>

          <audio src={selectedTrack.file} ref={audioRef} />
        </div>

        {/* Track label */}
        <div className="flex-1 flex items-center px-3 py-2 text-sm sm:text-base font-medium text-gray-900">
          <span className="truncate">{selectedTrack.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SparkMusicAudio;
