import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import ProjectTabs from "./ProjectTabs";
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import Audio from "./Audio";
import Track from "./Track";



const Landing = () => {
    const [shouldFlicker, setShouldFlicker] = useState(false);
    const [shouldHide, setShouldHide] = useState(false);
    const [shouldShowIcons, setShowIcons] = useState(false);
    const [hasSubmited, setHasSubmited] = useState(false);
    const [activeTrackId, setActiveTrackId] = useState(null);
  

      useEffect(() => {
    // Set a timeout matching the slide-in duration (e.g., 2s)
    const timer = setTimeout(() => {
      setShouldFlicker(true);
    }, 1000); // Wait 2 seconds (adjust as needed)
    

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set a timeout matching the slide-in duration (e.g., 2s)
    const timer2 = setTimeout(() => {
      setShouldHide(true);
    }, 1005); // Wait 2 seconds (adjust as needed)
    

    return () => clearTimeout(timer2);
  }, [shouldFlicker]);

  useEffect(() => {
    // Set a timeout matching the slide-in duration (e.g., 2s)
    const timer2 = setTimeout(() => {
      setShowIcons(true);
    }, 1200); // Wait 2 seconds (adjust as needed)
    

    return () => clearTimeout(timer2);
  }, [shouldHide]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    // alert(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  const tracksData = [
    {
      id: "1",
      color: "red",
      title: "Eternity",
      genre: "Alternative R&B",
      track: "/audio/Eternity.mp3",
      img: '/images/eternity_2.jpg'
    },
    {
      id: "2",
      color: "blue",
      title: "Won’t do for love",
      genre: "Orchestral R&B",
      track: "/audio/WontDoForLove.mp3",
      img: '/images/wontDoForLove_2.jpg'
    },
    {
      id: "3",
      color: "white",
      title: "Venus",
      genre: "Orchestral",
      track: "/audio/Venus.mp3",
      img: '/images/venus.jpg'
    },
  ];

    // Handler when a track tries to play
    const handlePlayRequest = (trackId) => {
      // If the user clicks play on a new track, make that track active
      setActiveTrackId(trackId);
    };


  return (
    <>
    <section className="h-[120vh] flex flex-col items-center ">
      
      {/* <div className='backdrop-blur-lg w-full py-5 z-50 hidden sm:flex gap-10 justify-evenly'> */}
      <div className=' w-full py-5 sm:z-50 flex  sm:gap-10 justify-evenly sm:relative sm:absolute sm:top-20 sm:text-[50px] text-[35px]'>
      <nav className=" hover:cursor-pointer relative hover:scale-110 transition ease-in-out duration-200 sm:-translate-x-[40px] backdrop-blur-2xl bg-[#F7AF5D]/90 px-7 py-2">
        <h1
          className=" uppercase z-50 text-white sm:relative font-bold text-center hover:cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </h1>
      </nav>

      <nav className=" hover:cursor-pointer relative hover:scale-110 transition ease-in-out duration-200 backdrop-blur-2xl -translate-x-[20px] bg-white px-7 py-2">
      <h1 className=" uppercase z-20 text-black font-bold text-center hover:cursor-pointer" onClick={() => scrollToSection('about')}>About</h1>

      </nav>

        {/* <h1 className="text-[50px] uppercase z-20 text-white font-bold text-center hover:cursor-pointer" onClick={() => scrollToSection('about')}>About</h1> */}
        {/* <h1 className="text-[50px] uppercase z-20 text-white font-bold text-center hover:cursor-pointer">Contact</h1> */}
      </div>
      {/* <div className='absolute h-[110px] backdrop-blur-xl w-full py-5 bg-black opacity-40 z-20 hidden sm:flex gap-10 justify-center' /> */}
{/* Background Image */}
  {/* Background Image */}
  <img
    src="/images/tatenda_landing_bg_v2.png"
    className="absolute inset-0 object-cover w-full h-[120vh] z-0 object-top"
    alt="Background"
  />

  {/* Lower Z-index Person Image (the "behind" one) */}
  <img
    src="/images/tatenda_landing_person.png"
    className="absolute top-20  h-full transform -translate-x-1/2 animate-slide-in-left transition-opacity duration-700"
    alt="Foreground Person Behind"
  />
  

  {/* Higher Z-index Person Image (the "front" one) */}
  <img
    src="/images/tatenda_landing_person.png"
    className={`absolute top-20 left-1/2 h-full transform -translate-x-1/2 transition-opacity duration-700 ${
      shouldHide ? 'z-50 opacity-100' : 'z-50 opacity-0'
    }`}
    alt="Foreground Person Front"
  />
      
      {
        shouldFlicker &&
          <img
            src="/images/spotlight.png"
            className={`absolute ${shouldHide ? 'z-20' : 'z-50'} -top-[100px] -translate-x-10 opacity-70 ${shouldFlicker ? 'animate-flicker' : ''}`}
          />

        }
    {
      shouldShowIcons &&
      <div className="flex flex-col absolute bottom-20">
        <h1 className="z-50 text-white text-[80px] sm:text-[100px] uppercase font-medium">Tenda</h1>
        <div className="w-[80%] m-auto sm:w-full h-[2px] bg-white z-50 -translate-y-3 sm:-translate-y-5"/>

      <nav className="z-50 flex flex-row gap-5 sm:gap-10 h-min">
        
        <a href="https://www.instagram.com/tendaa_music/" className="animate-zoomInFade z-50 rounded-full transition ease-in-out duration-300 sm:h-[100px] sm:w-[100px] hover:cursor-pointer hover:scale-110 h-[80px] w-[80px] bg-[#F6D692] flex justify-center text-orange-400 items-center text-xl">
          <svg className="hover:cursor-pointer hover:scale-[125%] trasition ease-in-out duration-200"  viewBox="0 0 48 48" fill="none">
          
<circle cx="24" cy="24" r="20" fill="#C13584"/>
<path  d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z" fill="white"/>
<path d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z" fill="white"/>
<path d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z" fill="white"/>
</svg>
        </a>
      
        
        {/* <a>

        </a> */}
                <a href="https://www.youtube.com/@t.a.t.e.n.d.amusic7361" className="hover:cursor-pointer animate-zoomInFade z-50 rounded-full sm:h-[100px] sm:w-[100px] h-[80px] w-[80px] bg-[#F6D692] flex justify-center text-orange-400 items-center text-xl px-[10px]">

        <svg className="hover:cursor-pointer hover:scale-[125%] trasition ease-in-out duration-200" fill="#FF0000"  version="1.1" id="Layer_1"  
	 viewBox="-143 145 512 512" >
<g>
	<polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	"/>
	<path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
		c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
		V446.8z"/>
</g>
</svg>
</a>
        <a href="https://open.spotify.com/artist/2lHMBqcl2QoQXI0zslXhfB" className="hover:cursor-pointer animate-zoomInFade z-50 rounded-full sm:h-[100px] sm:w-[100px] h-[80px] w-[80px] bg-[#F6D692] flex justify-center text-orange-400 items-center text-xl px-[10px]">
            <svg className="hover:cursor-pointer hover:scale-[125%] trasition ease-in-out duration-200"   viewBox="0 0 48 48" fill="none">
    
    <title>Spotify-color</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="#000000" fill-rule="evenodd">
        <g id="Color-" transform="translate(-200.000000, -460.000000)" fill="#00DA5A">
        <circle cx="24" cy="24" r="20" fill="#FF8800"/>
            <path d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460" id="Spotify">

</path>
        </g>
    </g>
</svg>
        </a>
        <a href="https://soundcloud.com/tendamusic" className=" animate-zoomInFade z-50 rounded-full sm:h-[100px] sm:w-[100px] h-[80px] w-[80px] bg-[#F6D692] flex justify-center text-orange-400 items-center text-xl">
            <svg className="hover:cursor-pointer hover:scale-[120%] trasition ease-in-out duration-200" viewBox="0 0 48 48" fill="none" >
<circle cx="24" cy="24" r="20" fill="#FF8800"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.16 26.8651C13.21 26.8651 13.252 26.8244 13.2593 26.7677L13.5266 24.6598L13.2593 22.5045C13.2513 22.4472 13.21 22.4078 13.16 22.4078C13.1086 22.4078 13.0666 22.4485 13.0606 22.5052L12.824 24.6598L13.0606 26.7671C13.0673 26.8244 13.1086 26.8651 13.16 26.8651ZM12.2727 26.0638C12.3213 26.0638 12.3613 26.0251 12.3687 25.9704L12.5767 24.6598L12.3687 23.3265C12.3613 23.2712 12.322 23.2332 12.2727 23.2332C12.2227 23.2332 12.1827 23.2718 12.176 23.3272L12 24.6605L12.176 25.9704C12.1827 26.0258 12.2227 26.0638 12.2727 26.0638ZM14.2226 22.1032C14.2153 22.0352 14.1653 21.9859 14.1026 21.9859C14.0393 21.9859 13.9879 22.0352 13.9819 22.1032C13.9819 22.1039 13.7579 24.6605 13.7579 24.6605L13.9819 27.1237C13.9879 27.1931 14.0393 27.2417 14.1026 27.2417C14.1653 27.2417 14.2153 27.193 14.2226 27.1244L14.4779 24.6605L14.2226 22.1032ZM15.0533 27.3404C15.1266 27.3404 15.1873 27.2817 15.1939 27.2031L15.4339 24.6618L15.1939 22.0332C15.1873 21.9552 15.1266 21.8952 15.0533 21.8952C14.9786 21.8952 14.9186 21.9545 14.9126 22.0339L14.7013 24.6618L14.9126 27.2031C14.9186 27.2817 14.9786 27.3404 15.0533 27.3404ZM16.0112 27.3824C16.0972 27.3824 16.1666 27.3144 16.1732 27.2237L16.1726 27.2244L16.3999 24.6618L16.1726 22.2232C16.1666 22.1339 16.0972 22.0652 16.0112 22.0652C15.9252 22.0652 15.8566 22.1339 15.8506 22.2245L15.6512 24.6618L15.8506 27.2244C15.8559 27.3144 15.9252 27.3824 16.0112 27.3824ZM17.3712 24.6625L17.1599 20.6966C17.1539 20.5959 17.0745 20.5166 16.9785 20.5166C16.8812 20.5166 16.8012 20.5959 16.7972 20.6966L16.6099 24.6625L16.7972 27.225C16.8019 27.325 16.8819 27.4044 16.9785 27.4044C17.0752 27.4044 17.1545 27.3257 17.1599 27.2244V27.2257L17.3712 24.6625ZM17.9512 27.4084C18.0592 27.4084 18.1485 27.3204 18.1538 27.2084V27.2104L18.3518 24.6631L18.1538 19.7899C18.1485 19.6779 18.0592 19.5899 17.9512 19.5899C17.8425 19.5899 17.7538 19.6779 17.7492 19.7899C17.7492 19.7906 17.5732 24.6631 17.5732 24.6631L17.7492 27.209C17.7538 27.3204 17.8425 27.4084 17.9512 27.4084ZM18.9325 19.1633C18.8112 19.1633 18.7138 19.2606 18.7098 19.3846L18.5465 24.6631L18.7098 27.1837C18.7138 27.3064 18.8112 27.4037 18.9325 27.4037C19.0525 27.4037 19.1498 27.3064 19.1551 27.1824V27.1844L19.3385 24.6631L19.1551 19.3846C19.1505 19.2606 19.0525 19.1633 18.9325 19.1633ZM19.9218 27.4084C20.0538 27.4084 20.1611 27.3031 20.1651 27.1671V27.1684L20.3351 24.6638L20.1651 19.2066C20.1611 19.0706 20.0538 18.9646 19.9218 18.9646C19.7891 18.9646 19.6825 19.0706 19.6791 19.2066L19.5271 24.6638L19.6791 27.1684C19.6818 27.3031 19.7891 27.4084 19.9218 27.4084ZM20.9191 27.4057C21.0624 27.4057 21.1791 27.291 21.1824 27.1431V27.1457L21.3391 24.6631L21.1824 19.3453C21.1791 19.1986 21.0624 19.0833 20.9191 19.0833C20.7744 19.0833 20.6578 19.1986 20.6551 19.3459L20.5164 24.6631L20.6551 27.1444C20.6578 27.291 20.7744 27.4057 20.9191 27.4057ZM22.3504 24.6645L22.2071 19.5406C22.2037 19.3819 22.0791 19.2579 21.9231 19.2579C21.7671 19.2579 21.6417 19.3826 21.6384 19.5406L21.5124 24.6645L21.6384 27.1297C21.6417 27.2864 21.7664 27.411 21.9231 27.411C22.0784 27.411 22.2037 27.2864 22.2071 27.1284V27.1297L22.3504 24.6645ZM22.9364 27.4157C23.1004 27.4157 23.2377 27.2797 23.2397 27.1124V27.1144L23.3684 24.6651L23.2397 18.568C23.2377 18.4006 23.1004 18.264 22.9364 18.264C22.7704 18.264 22.6337 18.4006 22.6317 18.568L22.5164 24.6631C22.5164 24.6678 22.6317 27.1144 22.6317 27.1144C22.6337 27.2797 22.7704 27.4157 22.9364 27.4157ZM23.9443 17.692C23.7663 17.692 23.621 17.8373 23.619 18.016L23.4857 24.6658L23.619 27.0791C23.621 27.2557 23.767 27.4004 23.9443 27.4004C24.1203 27.4004 24.2663 27.255 24.2683 27.0771V27.0791L24.413 24.6658L24.2683 18.0153C24.2663 17.8366 24.1203 17.692 23.9443 17.692ZM24.8663 27.4177C24.8737 27.4184 32.9954 27.423 33.0481 27.423C34.678 27.423 36 26.1011 36 24.4705C36 22.8398 34.6787 21.5185 33.0481 21.5185C32.6441 21.5185 32.2581 21.6005 31.9068 21.7472C31.6721 19.0866 29.4409 17 26.7196 17C26.0536 17 25.405 17.1313 24.8317 17.3527C24.6083 17.4393 24.5497 17.528 24.5477 17.7V27.0691C24.5497 27.2497 24.689 27.3997 24.8663 27.4177Z" fill="white"/>
</svg>

        </a>
      </nav>
      </div>
    }
    </section>
    <section id="about" className="h-screen relative sm:bg-gradient-to-r bg-[#FFEABE] from-black from-1% to-15% sm:to-20%">
        <div className="flex h-full items-center sm:ml-20">
        <img 
          src="/images/headDown.jpg"
          className="h-[80%] sm:block hidden"
        />

        <div className="w-full sm:text-[100px] py-3 mx-8 flex flex-col">
          <h1 className="font-medium">
            MY JOURNEY
          </h1>
          <div className="bg-[#F9D593] text-[22px] py-3 flex flex-col gap-2 sm:px-6 shadow-2xl sm:w-min m-auto">

          <p className="text-justify m-auto w-[80%] sm:w-[700px] bg-[#F9D593] ">
          Born and raised in Zimbabwe, <b>"TENDA"</b> is an artist who blends African influences and personal experiences into musical practices.
        </p>
        <p className="text-justify m-auto w-[80%] sm:w-[700px] bg-[#F9D593] ">
        Starting out as a beat maker and producer, I soon discovered a passion for songwriting to share stories from my childhood to adulthood. By blending genres and sampling, I craft music that resonates with broad audiences.
        </p>
        <p className="text-justify m-auto w-[80%] sm:w-[700px] hidden bg-[#F9D593] sm:flex">
          As an early years practitioner, I design play-based musical experiences for children aged 0–5 and their families, fostering curiosity and creativity through music, movement, and storytelling. I also plan to merge nature and art by using field recordings and immersive techniques, bringing multi-sensory wonder to spark a lifelong love of music.
        </p>

          </div>
        </div>

        </div>
    </section>
    {/* My Music Section */}
    <section className="m-0 pt-10 pb-10 bg-[#FFEABE]">
      <h1 className="text-left text-[50px] sm:text-[80px] font-medium bg-[#F7AF5D] w-max px-8 mx-auto">
        NEW TRACKS
      </h1>
      <p className="text-[20px] sm:text-[30px] w-[90%] sm:w-[60%] m-auto my-2 sm:my-5">
        Explore three of Tenda’s latest tracks, each defined by his genre-bending production.
      </p>
      <div className="m-auto w-max pb-10 pt-5 flex flex-col gap-4">
        {tracksData.map((trackInfo) => (
          <Track
            key={trackInfo.id}
            color={trackInfo.color}
            title={trackInfo.title}
            img={trackInfo.img}
            genre={trackInfo.genre}
            track={trackInfo.track}
            trackId={trackInfo.id}
            isActive={activeTrackId === trackInfo.id}
            onPlayRequest={handlePlayRequest}
          />
        ))}
      </div>
    </section>


    {/* <section className=" m-0 pt-10 pb-10 bg-[#FFEABE] sm:bg-gradient-to-r bg-[#FFEABE] from-[#F9D593]/60 via-[#FFEABE] to-[#F9D593]/60"
    >
      <h1 className="text-left text-[50px] sm:text-[80px] bg-[] font-medium bg-[#F7AF5D] w-max px-8  mx-auto ">NEW MUSIC</h1>
      <p className="text-[20px] sm:text-[30px] w-[90%] sm:w-[60%] m-auto my-2 sm:my-5">Explore some of my latest work, each defined by genre-bending production.</p>
      <div className="m-auto w-max pb-10 pt-5 flex flex-col gap-4">
        <Track color={'red'} title={'Eternity'} genre={'Alternative R&B'} track={'/audio/Eternity.mp3'} img={'/images/eternity_2.jpg'}/>
        <Track color={'blue'} title={"Won't do for love"} genre={'Orchestral R&B'} track={'/audio/WontDoForLove.mp3'} img={'/images/wontDoForLove_2.jpg'}/>
        <Track color={'white'} title={'Venus'} genre={'Orchestral'} track={'/audio/Venus.mp3'} img={'/images/venus.jpg'}/>
        

      </div>
    </section> */}
    <section className=" bg-[#FFEABE] w-full  pb-[50px]" id="projects">
        <div className="bg-[#F7AF5D] w-full px-[100px] shadow-xl">

      {/* <h2 className="text-left bg-[#F9D593] text-[25px] sm:text-[50px] w-max px-5 translate-y-2 sm:translate-y-7">My Work</h2> */}
      <h1 className="text-center text-[50px] sm:text-[100px] font-medium mb-10 ">PROJECTS</h1>
      {/* <div className="h-[3px]"/> */}

      </div>
      <div className="mb-7 w-full sm:px-[100px]">
      <div>
        

      {/* <div className="project_content mt-5 grid sm:grid-cols-2 gap-5 items-stretch">
  <img¬
    src="/images/SingWhatYou Mean_1.jpg"
    alt="Description of the image"
    className="w-full h-full object-cover"
  />

  <p className="text-justify text-[30px] px-6 py-3 bg-[#F9D593] shadow-2xl">
  By creating a safe, inclusive, and engaging environment, the program allowed participants to explore, express, and develop their musical voices while fostering confidence and creativity.  </p>
  <p className="text-justify text-[30px] px-6 py-3 bg-[#F9D593] shadow-2xl">
  I participated in <b>"Sing What You Mean, Mean What You Play,"</b> a project led by Buzzing Roots and funded by Youth Music UK. This initiative supported neurodivergent young people in expressing themselves through music. Through songwriting and music production, I contributed to creating a safe, nurturing space where participants explored their emotions and personal stories, producing authentic and meaningful compositions.
  </p>
</div> */}

{/* <button className="mt-3 w-full bg-white flex gap-2 items-center justify-center">Read More <FaAngleDown/></button> */}
{/* <Audio/> */}
<ProjectTabs
  onPlayRequest={handlePlayRequest}
  trackId={'4'}
  isActive={activeTrackId === '4'}
/>
      </div>
      <h1 className="text-left text-[40px] sm:text-[80px] bg-[] font-medium bg-[#F9D593] w-max px-8 mt-20 mx-auto ">MORE PROJECTS</h1>
      <div className="mt-[50px]">
      <div className="w-full bg-red-400 bg-[#F9D593] shadow-2xl">
      <h3 className="italic text-[30px] px-1 sm:text-[50px] uppercase">spark music champions</h3>
      <img
    src="/images/spark_music_1.jpg"
    alt="Description of the image"
    className="sm:hidden relative w-full h-full object-cover"
  />
      </div>
      <div className="project_content sm:mt-5 grid sm:grid-cols-2 gap-5 items-stretch">
  <p className="text-justify text-[25px] sm:text-[30px] px-6 py-3 bg-[#F9D593] shadow-2xl">
  I am currently participating in the Spark Music Champions program, a 15-week initiative focused on early years (0–4 years) music-making in Leicester. This opportunity includes hands-on sessions, training, and mentoring, enabling me to develop innovative approaches to play-based musical interactions. My involvement is deepening my practice and expanding my skills in early years music education.
  </p>
  <img
    src="/images/spark_music_1.jpg"
    alt="Description of the image"
    className="sm:flex hidden w-full h-full object-cover"
  />
</div>



      </div>

      <div className="mt-[50px]">
      <div className="w-full bg-yellow-200 bg-[#F9D593] shadow-2xl">
        <h3 className="italic text-[30px] px-1 sm:text-[50px] uppercase">CREATIVE PLAY</h3>
      </div>
      <div className="project_content sm:mt-5 grid sm:grid-cols-2 sm:gap-5 items-stretch">
  <img
    src="/images/st_mathews_1.JPG"
    alt="Description of the image"
    className="w-full h-[580px] object-cover"
  />
  <p className="text-justify text-[25px] sm:text-[30px] px-6 py-3 bg-[#F9D593] shadow-2xl">
  I participated in the <b>St. Matthew’s Big Local initiative</b>, collaborating with nurseries and local communities to deliver interactive music workshops for children aged 0–5. These sessions integrated storytelling, rhythm, and play to support language development and creative growth. My work focused on nurturing children’s love for music by encouraging exploratory sound-making and creative engagement in Leicester’s vibrant community.
  </p>
</div>



      </div>

      <div>
      <div className="w-full bg-blue-100 shadow-2xl mt-10">
        <h3 className="italic text-[30px] px-1 sm:text-[50px] uppercase">THE LANDING</h3>
      </div>
      <img
    src="/images/the_landing_1.JPG"
    alt="Description of the image"
    className="w-full h-full sm:hidden object-cover"
  />
      <div className="project_content sm:mt-5 grid sm:grid-cols-2 gap-5 items-stretch">
  <p className="text-justify text-[25px] sm:text-[30px] px-6 py-3 bg-[#F9D593] shadow-2xl">
  In <b>The Journey of the Mayflower</b>, I collaborated with Hetain Patel and other artists to interpret and convey the emotional and historical narratives through movement. Filmed in Worksop, the project explores North Nottinghamshire's connection to the Mayflower's historic voyage, reflecting on the impact of those who made the journey and their lasting legacy. My role focused on supporting the Yard Theatre group with choreography and physical expression to embody and communicate these stories, adding depth and movement to the film's exploration of migration and identity.  
  </p>
  <img
    src="/images/the_landing_1.JPG"
    alt="Description of the image"
    className="hidden sm:flex w-full h-full object-cover"
  />
</div>



      </div>
        </div>
    </section>
    <section className="h-[200vh] py-[100px] flex flex-col bg-[#F7AF5D]  bg-gradient-to-r from-black from-1% to-20%" >
    <img
    src="/images/tatenda_landing_bg_v2.jpg"
    className="absolute inset-0 object-cover w-full h-[120vh] z-0 object-top"
    // alt="Background"
  />
    <iframe className='w-[80%] h-[40%] m-auto' src="https://www.youtube.com/embed/CFwVb498PCU?si=3xYkC_w4RaFPLm0b&amp;start=337" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe className='w-[80%] h-[40%] m-auto' src="https://www.youtube.com/embed/HVlZm4oZKoA?si=YwnEESUkPtKzU4D7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
    </section>
    <section className="px-6 pb-10">
    <form 
      // onSubmit={handleSubmit}
      className="space-y-6 text-[30px] px-8 py-6 w-full">
        <div className="translate-y-5">
      <h2 className="text-left bg-[#F9D593] text-[25px] sm:text-[50px] w-max px-5 sm:translate-y-7">Get in Touch</h2>
      <h1 className="text-left text-[50px] sm:text-[100px] font-medium ">CONTACT</h1>
      {/* <div className="h-[3px]"/> */}

      </div>
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              // value={formData.email}
              // onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6A00] text-gray-800"
              required
            />

            {/* Phone Input */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              // value={formData.phone}
              // onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6A00] text-gray-800"
            />

            {/* Message Input */}
            <textarea
              name="message"
              placeholder="Your Message"
              // value={formData.message}
              // onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6A00] text-gray-800"
              required
            ></textarea>

            {/* Submit Button */}
            {
              hasSubmited ? 
          <div className="flex flex-col items-center gap-3 -translate-y-10">
            <FaCheckCircle className="text-[#F9D593] text-[100px] animate-bounce" />
            <h2 className="text-[30px] -translate-y-5 font-semibold text-black">
              Message Sent!
            </h2>
          </div>
            :

            <button
              className="w-full bg-[#F9D593] text-black py-3 shadow-xl font-semibold hover:bg-[#e05900] transition duration-300"
              onClick={() => setHasSubmited(true)}
            >
              Send Message
            </button>
            }
          </form>
    </section>
    </>
  );
};

export default Landing;
