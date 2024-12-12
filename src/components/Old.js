import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaSchool, FaPaintBrush  } from 'react-icons/fa';
import { IoIosClose  } from 'react-icons/io';
import { FaPhone } from "react-icons/fa6";


import {
  FaMicrophoneAlt,
  FaDrum,
  FaChalkboardTeacher,
} from 'react-icons/fa';
// Import Swiper components at the top
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from "swiper/modules";
import Contact from './Contact';
import Landing from './Landing';

// import { Pagination } from 'swiper';


function Home() {
    const [isContactVisibe, setIsContactVisible] = useState(false);

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false); // State to control the side menu

    const [isOrangeDivInView, setIsOrangDivInView] = useState(false);
    const orangeDivRef = useRef(null);

    const [isMusicServiceView, setIsMusicServiceInView] = useState(false);
    const musicServicevRef = useRef(null);

    const [isYouthServiceInView, setIsYouthServiceInView] = useState(false);
    const youthService = useRef(null);

    const [isMusicServiceSwiperView, setIsMusicServiceSwiperInView] = useState(false);
    const musicServiceSwiperRef = useRef(null);

    const [isYouthServiceSwiperInView, setIsYouthServiceSwiperInView] = useState(false);
    const youthServiceSwiperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsOrangDivInView(true); // Trigger animation when in view

            }
          },
          { threshold: 0.3 } // Trigger when 20% of the element is visible
        );
    
        if (orangeDivRef.current) {
          observer.observe(orangeDivRef.current);
        }
    
        return () => {
          if (orangeDivRef.current) {
            observer.unobserve(orangeDivRef.current);
          }
        };
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsYouthServiceInView(true); // Trigger animation when in view

            }
          },
          { threshold: 0.5 } // Trigger when 20% of the element is visible
        );
    
        if (youthService.current) {
          observer.observe(youthService.current);
        }
    
        return () => {
          if (youthService.current) {
            observer.unobserve(youthService.current);
          }
        };
      }, []);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsMusicServiceInView(true); // Trigger animation when in view

            }
          },
          { threshold: 0.5 } // Trigger when 20% of the element is visible
        );
    
        if (musicServicevRef.current) {
          observer.observe(musicServicevRef.current);
        }
    
        return () => {
          if (musicServicevRef.current) {
            observer.unobserve(musicServicevRef.current);
          }
        };
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
                setIsYouthServiceSwiperInView(true); // Trigger animation when in view

            }
          },
          { threshold: 0.5 } // Trigger when 20% of the element is visible
        );
    
        if (youthServiceSwiperRef.current) {
          observer.observe(youthServiceSwiperRef.current);
        }
    
        return () => {
          if (youthServiceSwiperRef.current) {
            observer.unobserve(youthServiceSwiperRef.current);
          }
        };
      }, []);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsMusicServiceSwiperInView(true); // Trigger animation when in view

            }
          },
          { threshold: 0.5 } // Trigger when 20% of the element is visible
        );
    
        if (musicServiceSwiperRef.current) {
          observer.observe(musicServiceSwiperRef.current);
        }
    
        return () => {
          if (musicServiceSwiperRef.current) {
            observer.unobserve(musicServiceSwiperRef.current);
          }
        };
      }, []);


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        // alert(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        setIsSideMenuOpen(false)
      }

      const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
      };

    const servicesData = [
        {
          title: 'Creative Play',
          description: `I'm an artist dedicated to igniting creativity, fostering personal
            growth, and inspiring positive change through the power of music. My
            mission is to provide accessible opportunities for young people to
            explore their creative potential, develop valuable skills, and
            contribute meaningfully to their communities.`,
          imageSrc: '/images/creative_play.jpg',
          icon: <FaPaintBrush className="text-white text-3xl" />,
        },
        {
          title: 'Primary Schools',
          description: `I've collaborated with primary schools to offer a diverse range of
            engaging workshops, including drumming, music production, singing,
            and songwriting. Additionally, I've worked with neuro-divergent young
            people who may face challenges in mainstream educational settings. I
            aim to provide a safe and nurturing environment for these
            individuals to explore their creativity, develop their ideas, and
            express themselves freely, fostering personal growth and
            empowerment.`,
          imageSrc: '/images/primary_schools.jpg',
          icon: <FaSchool className="text-white text-3xl" />,
        },
        {
          title: 'Secondary Schools',
          description: `In 2023, I collaborated with City of Derby Academy and the Freedom
            Foundation to deliver a 12-week programme called DRILL. The programme
            offered a structured framework for personal growth, creativity, and
            empowerment, providing young individuals with the tools and confidence
            to navigate life's challenges and pursue their dreams.`,
          imageSrc: '/images/secondary_schools.jpg',
          icon: <FaGraduationCap className="text-white text-3xl" />,
        },
      ];

      const musicServicesData = [
        {
          title: 'Studio Sessions',
          description: `Professional studio sessions for budding musicians to enhance their skills and take their craft to the next level.`,
          imageSrc: '/images/studio_sessions.jpg',
          icon: <FaMicrophoneAlt  />,
          button: 'Book a Session'
        },
        {
          title: 'Upbeats',
          description: `Engaging and interactive music drumming workshops for young people new to music, sparking a passion for beats.`,
          imageSrc: '/images/primary_schools.jpg',
          icon: <FaDrum  />,
            button: 'Book'
        },
        {
          title: 'Muisc Mentoring',
          imageSrc: '/images/music_mentoring.jpg',
          description: "One-on-one mentorship to guide aspiring artists in honing their talents and pursuing their creative aspirations.",
          icon: <FaChalkboardTeacher  />,
          button: 'Get Started'
        },
      ];
      

  return (
    <main className="App text-[50px]">
       { isContactVisibe &&
           <Contact setIsContactVisible={setIsContactVisible}/>
       }
      {/* Navigation */}
      <nav className="font-semibold animation zoomIn shadow-lg justify-end sm:justify-between sm:text-[80px] flex px-6 sm:px-[100px] items-center h-[120px]">
        <div className='absolute sm:text-[60px] text-[40px] left-1/2 transform italic -translate-x-1/2'>
        T<span className="text-[#FF5100]">.</span>A<span className="text-[#FF5100]">.</span>
        T<span className="text-[#FF5100]">.</span>E<span className="text-[#FF5100]">.</span>
        N<span className="text-[#FF5100]">.</span>D<span className="text-[#FF5100]">.</span>A

        </div>


        <ul className='sm:flex gap-20 justify-center w-1/3 text-gray-800 flex-row hidden animate-fade-in '>
            <li onClick={() => scrollToSection('about')}
                className='text-[40px] hover:cursor-pointer hover:text-[#FF5100] transition ease-in-out delay-50'>
                About
            </li>
            <li onClick={() => scrollToSection('youthservices')}
                className='text-[40px] hover:cursor-pointer hover:text-[#FF5100] transition ease-in-out delay-50'>
                Services
            </li>
        </ul>
            <span onClick={() => setIsContactVisible(true)}
                className='text-[40px] sm:flex hidden text-gray-600 hover:cursor-pointer bg-white animate-fade-in flex gap-3 items-center px-8 rounded-[40px] hover:text-[#FF5100] transition ease-in-out delay-50'>
                Contact
                <FaPhone/>
            </span>


        <button className="flex flex-col gap-2.5 sm:hidden animate-fade-in" onClick={toggleSideMenu}>
            <div className="w-[30px] h-[1px] bg-black" />
            <div className="w-[30px] h-[1px] bg-black" />
            <div className="w-[30px] h-[1px] bg-black" />
        </button>

      </nav>
{/* side menu */}
      <div
      className={`fixed top-0 left-0 z-50 w-[250px] h-full bg-white shadow-lg transform ${
        isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >

      <button
        className="absolute top-5 right-5 text-3xl text-gray-700"
        onClick={(toggleSideMenu)}
      >
        <IoIosClose />
      </button>
      <nav className=" mt-20">
        <ul className=" flex-col justify-between h-[70vh] flex text-lg text-gray-700">
        <li onClick={() => scrollToSection('about')}
                className='text-[40px]'>
                About
            </li>
            <li onClick={() => scrollToSection('about')}
                className='text-[40px]'>
                Services
            </li>
            <li onClick={() => setIsContactVisible(true)}
                className='text-[40px]'>
                Contact
            </li>
            <li>
            <a
            className=" ml-[10px] absolute sm:hidden bottom-10  flex items-center justify-between h-max   border-2 border-[#FF5100] bg-black rounded-[100px] transition-all duration-300"
            href='https://open.spotify.com/artist/2lHMBqcl2QoQXI0zslXhfB'
          >
            <img
              src="/images/spotify_orange.png"
              className="h-[90px] sm:h-[200px]"
              alt="Spotify"
            />
            <h2 className="text-[#FF6A00] leading-[120%] text-[30px] sm:text-[70px] w-min text-right pr-10">
              LISTEN NOW
            </h2>
          </a>
            </li>

            <li>

            </li>

        </ul>

      </nav>
      </div>



      {/* First Section */}
      <section className="h-screen relative bg-gradient-to-r from-gray-400 from-1% to-20%">
        {/* Black block */}
        <div className="bg-black absolute z-5 w-[35%] h-full right-0 animate-slide-in-right"></div>

        {/* Text and Images */}
        <div className="hidden sm:block sm:absolute z-10 top-0 right-0 sm:pr-[100px] w-min font-bold">
          <h1 className="relative tracking-[15px] text-right leading-[100%] mt-10 sm:text-[70px] text-white z-10 animate-slide-in-right">
            WHERE CREATIVITY MEETS PASSION
          </h1>

          <img
            src="/images/piano.jpg"
            className="absolute top-10 sm:right-[400px] h-[200px] sm:h-[300px] z-0 animate-slide-in-right"
            alt="Piano"
          />

          {/* Spotify Div */}
          <a
            className="absolute mt-[90px] right-[120px] flex items-center justify-between h-max w-[500px] hover:w-[800px] border-2 border-[#FF5100] bg-black rounded-l-[100px] transition-all duration-300"
            href='https://open.spotify.com/artist/2lHMBqcl2QoQXI0zslXhfB'
          >
            <img
              src="/images/spotify_orange.png"
              className="h-[120px] sm:h-[200px]"
              alt="Spotify"
            />
            <h2 className="text-[#FF6A00] leading-[120%] sm:text-[70px] w-min text-right pr-10">
              LISTEN NOW
            </h2>
          </a>
        </div>

        {/* Main Image */}
        <img
          src="/images/teeTransparent.png"
          className="animate-slide-in-left h-full absolute bottom-0 sm:ml-10"
          alt="Tee Transparent"
        />

        {/* Spotify Div for Small Screens */}
        <a href='https://open.spotify.com/artist/2lHMBqcl2QoQXI0zslXhfB' className="absolute mt-[400px] shadow-lg zoomIn right-7 fade-in sm:hidden flex justify-between h-max w-[85%] border-2 border-[#FF5100] bg-black rounded-[100px]">

          <img
            src="/images/spotify_orange.png"
            className="h-[120px]"
            alt="Spotify"
          />
          <h2 className="text-[#FF6A00] leading-[120%] font-bold w-min text-right pr-[50px]">
            LISTEN NOW
          </h2>
        </a>
      </section>

      {/* Second Section */}
      <section className="sm:h-screen pb-20 pt-20 sm:pt-0 flex bg-gradient-to-r from-gray-400 from-1% to-20%" id="about">
  {/* Orange Background with Sliding Image */}
  <div className="flex-grow hidden sm:flex sm:w-[40%] bg-[#FF6A00] relative overflow-hidden"         ref={orangeDivRef}
  >
    {/* Sliding Image */}
    <img
          src="/images/headDown2.jpg"
          className={`absolute mt-10 h-[90%] w-[50%] right-0 ${
            isOrangeDivInView ? 'animate-slide-in-right' : 'opacity-0'
          } object-cover shadow-2xl`}
          alt="Head Down"
        />
  </div>

  {/* Text Section */}
  <div className="text-left z-20 flex-grow sm:mt-20 ml-[70px] sm:border-l-0 border-l-8 border-[#FF6A00] sm:ml-0 w-[60%] px-4 sm:px-10">
    <h1 className="font-medium text-[50px] mb-4">WHO AM I</h1>
    <div>
      <p className="text-[20px] sm:text-[40px] leading-[1.6]">
        I'm an artist dedicated to igniting creativity, fostering <b>personal growth</b>, and
        inspiring <b>positive change</b> through the power of music. My mission is to provide
        accessible opportunities for young people to explore their <b>creative potential</b>,
        develop valuable skills, and contribute meaningfully to their communities.
      </p>
    </div>
  </div>
</section>


      <section className="h-screen pt-00 flex" id='about'>
      <iframe className='w-full h-full' src="https://www.youtube.com/embed/CFwVb498PCU?si=3xYkC_w4RaFPLm0b&amp;start=337" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </section>

      {/* Youth Services */}
    <section className=" pt-0 flex hidden md:block" id='youthservices'>
      <div className="text-left flex-grow p-10 ">
        <h1 className="font-semibold text-[50px] mx-[15px] text-gray-600 text-center mb-4 uppercase ">Youth Services</h1>
        <div className={`flex flex-col md:flex-row gap-5 text-left justify-center ${ isYouthServiceInView  ? 'animate-fade-in' : 'opacity-0'}`} ref={youthService}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:w-[32%] relative mb-0 shadow-lg"
            >
              {/* Image */}
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={service.imageSrc}
                  className="w-full h-auto"
                  alt={service.title}
                />
              </div>

              {/* Orange Div with Icon */}
              <div className="w-20 h-20 bg-[#FF6A00] rounded-full flex items-center justify-center -translate-y-10">
                {/* React Icon */}
                {service.icon}
              </div>

              {/* Title and Description */}
              <div className="px-4 pb-0 mt-5 -translate-y-10">
                <h2 className="text-center text-xl font-semibold">{service.title}</h2>
                <p className="text-justify text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="pt-5 flex sm:hidden" >
        <div className="text-left flex-grow p-2 w-full animate-fade-in">
          <h1 className="font-medium text-[50px] mb-4 uppercase text-center">Youth Services</h1>

          {/* Swiper for small screens */}
          <div ref={youthServiceSwiperRef} className={`block ${ isYouthServiceSwiperInView  ? 'animate-fade-in' : 'opacity-0'}`}>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={5}
            slidesPerView={1.3}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
              {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center relative mb-0 shadow-lg h-[100%]">
                    {/* Image */}
                    <div className="h-[200px] w-full overflow-hidden">
                      <img
                        src={service.imageSrc}
                        className="w-full h-auto"
                        alt={service.title}
                      />
                    </div>

                    {/* Orange Div with Icon */}
                    <div className="w-20 h-20 bg-[#FF6A00] rounded-full flex items-center justify-center -translate-y-10">
                      {service.icon}
                    </div>

                    {/* Title and Description */}
                    <div className="px-4 pb-0 mt-5 -translate-y-10">
                      <h2 className="text-center text-xl font-semibold">{service.title}</h2>
                      <p className="text-justify text-base leading-relaxed">
                        {service.description}aa
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

         
        </div>
      </section>
    {/* Music Services */}
    <section className="h-screen hidden md:block flex flex-col overflow-hidden relative pb-40" >
      {/* Background Image */}
      <img
        src="/images/studio.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt="Background"
      />

      {/* Overlay to darken the background for better text visibility (optional) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Header */}
      <div className='backdrop-blur-xl w-full py-5 z-50 relative'>
        
        <h1 className="text-[50px] uppercase z-20 text-white font-bold text-center">Music Services</h1>
      </div>

      {/* Content */}
      <div ref={musicServicevRef} className={`text-left flex-grow p-10 relative z-10 mt-[10px] ${ isMusicServiceView  ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          {musicServicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:w-[32%] relative mb-0 shadow-lg bg-white rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={service.imageSrc}
                  className={`w-full h-full object-cover ${service.title === 'Upbeats' ? 'object-bottom' : 'object-center'}`}
                  alt={service.title}
                />
              </div>

              {/* Orange Div with Icon */}
              <div className="w-[150px] h-[150px] bg-[#FF6A00] text-white rounded-full flex items-center justify-center relative -translate-y-[75px]">
                {service.icon}
              </div>

              {/* Title and Description */}
              <div className="px-4  bg-white -translate-y-[50px] w-[95%]">
                <h2 className="text-center font-semibold text-[40px]">{service.title}</h2>
                <p className="text-justify text-[25px] ">
                  {service.description}
                </p>
                {service.button && (
                  <button onClick={() => setIsContactVisible(true)} className='hover:bg-[#FF6A00] transition ease-in-out delay-50 bg-black text-white w-full font-medium rounded-[20px] px-10 py-5 mt-5 text-[40px]'>
                    {service.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="pt-0 flex relative sm:hidden" id="music-services">
        {/* Background Image */}
        <img
          src="/images/studio.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="Background"
        />

        {/* Overlay to darken the background for better text visibility (optional) */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content Wrapper */}
        <div className="text-left flex-grow p-2 w-full animate-fade-in relative z-10">
          {/* Header */}
          <div className="sm:backdrop-blur-xl w-full py-5 z-20 relative">
            <h1 className="text-[50px] uppercase text-white font-bold text-center">
              Music Services
            </h1>
          </div>

          {/* Swiper */}
          <div ref={musicServiceSwiperRef} className={`block mt-10 ${ isMusicServiceSwiperView  ? 'animate-fade-in' : 'opacity-0'}` }>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={5}
              slidesPerView={1.3}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {musicServicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center relative mb-0 shadow-lg bg-white rounded-lg overflow-hidden">
                    {/* Image */}
                    <div className="h-[200px] w-full overflow-hidden">
                      <img
                        src={service.imageSrc}
                        className="w-full h-full object-cover"
                        alt={service.title}
                      />
                    </div>

                    {/* Orange Div with Icon */}
                    <div className="w-20 h-20 bg-[#FF6A00] rounded-full flex items-center justify-center -translate-y-10">
                      {service.icon}
                    </div>

                    {/* Title and Description */}
                    <div className="px-4 pb-0 mt-5 -translate-y-10">
                      <h2 className="text-center text-xl font-semibold">
                        {service.title}
                      </h2>
                      <p className="text-justify text-base leading-relaxed">
                        {service.description}
                      </p>
                      {service.button && (
                  <button onClick={() => setIsContactVisible(true)} className='hover:bg-[#FF6A00] transition ease-in-out delay-50 bg-black text-white w-full font-medium rounded-[20px] px-10 py-5 mt-5 text-[25px]'>
                    {service.button}
                  </button>
                )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


    
    </main>
  );
}

export default Home;
