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


function Main() {
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
      <Landing/>
      <div className="text-[20px] bg-[#F7AF5D]/90 flex flex-col items-center justify-center py-4">
          <p>
            powered by <a className=" underline text-blue-500" target="_blank" href="https://netreach.uk">netreach.uk</a>
          </p>
          <p className="text-center text-black font-normal font-primary text-[15px] sm:text-[20px]">
            Copyright © All Right Reserved. tendamusic 2024
          </p>
        </div>


    
    </main>
  );
}

export default Main;
