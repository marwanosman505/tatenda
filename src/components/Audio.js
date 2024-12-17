import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { ImSpinner2 } from "react-icons/im";


const Audio = () => {
    const [play, setPlay] = useState(false);
    const [loading, setLoading] = useState(false);
    const audioRef = useRef(null);
    const MAX = 20;

    const toggleAudio = async () => {
        if (play) {
            setPlay(false)
            audioRef.current.pause();
        } else {
            setLoading(true)
            setPlay(true)
            await audioRef.current.play();
            setLoading(false);
        }
    }

    function handleVolume(e) {
        const { value } = e.target;
        const volume = Number(value) / MAX;
        audioRef.current.volume = volume;
      }

    return(
        <div className="absolute shadow-sm -translate-y-full z-50 opacity-90 h-[100px] flex">
            <div className="flex justify-center bg-blue-200 items-center opacity-100 px-5 py-5">

            <button onClick={() => toggleAudio()}>
            {
                loading ? <ImSpinner2 /> : play ? <FaPause/> : <FaPlay/>

            }
            {/* {play ? <FaPause/> : <FaPlay/>} */}
            </button>
            <div className="mx-4 flex">
              <input
                type="range"
                className="bg-transparent mr-2 w-full accent-cyan-100"
                min={0}
                max={MAX}
                onChange={(e) => handleVolume(e)}
              />
              <HiMiniSpeakerWave
                className=""
                aria-hidden="true"
              />
            </div>
            <audio src="/northside.mp3" ref={audioRef}/>
            </div>
            <div className="text-[30px] flex items-center px-5 bg-white h-full">Listen</div>
        </div>
    )
}

export default Audio;