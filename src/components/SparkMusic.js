import React, { useState, useEffect, useRef } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import SparkMusicAudio from "./SparkMusicAudio";
// Import your sparkData array
import { sparkData } from '../sparkData';

export default function SparkMusic(props) {
  const trackId = props.trackId;
  const isActive = props.isActive;
  const onPlayRequest = props.onPlayRequest;

  const [activeIndex, setActiveIndex] = useState(0);
  const [height, setHeight] = useState('auto');
  const contentRef = useRef(null);

  // On each render, measure and set the container height
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    }
  }, [activeIndex]);

  useEffect(() => {
    // Preload images for all tabs except the active one
    sparkData.forEach((tab, idx) => {
      if (idx !== activeIndex) {
        tab.images.forEach((img) => {
          const preloadImg = new Image();
          preloadImg.src = img.src; // Browser caches it
        });
      }
    });
  }, [activeIndex]);
  

  useEffect(() => {
    // Set a timeout matching the slide-in duration (e.g., 2s)
    const timer = setTimeout(() => {
      // setShouldFlicker(true);
    }, 1000); // Wait 2 seconds (adjust as needed)
    

    return () => clearTimeout(timer);
  }, []);

  // Helper to select a tab by index
  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  // Cycles to previous or next tab
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sparkData.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === sparkData.length - 1 ? 0 : prev + 1));
  };

  // Get the currently active tab data
  const { images, content, title } = sparkData[activeIndex];

  return (
    <div className="w-full bg-[#F9D593] shadow-2xl text-gray-800">
      {/* Title */}
      <h3 className="italic text-[30px] px-1 sm:text-[50px]">
        SPARK MUSIC CHAMPIONS
      </h3>
      

      {/* Image Container */}
      <div className="relative h-[380px] w-full overflow-hidden">
        {/* Render images for the current tab. 
            If multiple images exist, we can display them side by side or stacked. */}
        <div className="absolute inset-0 flex">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="h-[380px] w-full object-cover rounded-lg shadow"
            />
          ))}
        </div>

        {/* Previous / Next Buttons Over the Images */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:scale-110"
          onClick={handlePrev}
        >
          <FaArrowCircleLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:scale-110"
          onClick={handleNext}
        >
          <FaArrowCircleRight />
        </button>

        {/* SparkMusicAudio Component (if you want it overlayed) */}
        <div className='w-10 h-10 bg-black'/>
        <SparkMusicAudio 
          onPlayRequest={onPlayRequest}
          trackId={trackId}
          isActive={isActive}
        />
      </div>

      {/* Tabs Navigation */}
      <div className="text-[20px] w-full p-4 bg-gray-100">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {sparkData.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(idx)}
              className={`text-[28px] px-4 py-2 font-semibold rounded ${
                activeIndex === idx
                  ? 'bg-[#F9D593] text-black shadow'
                  : 'bg-white hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Container with Transition */}
        <div
          className="bg-white rounded shadow overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height: height, transitionProperty: 'height' }}
        >
          <div ref={contentRef} className="p-6">
            {/* Title or any additional subhead */}
            {/* <h4 className="text-2xl mb-4">{title}</h4> */}

            {/* Actual Tab Content */}
            <div className="opacity-100 transition-opacity duration-300">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
