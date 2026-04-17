import {Box, Typography} from "@mui/material";
import pic7 from "../assets/pictures/background/pic7.jpg";
import Typed from "typed.js";
import {useRef, useEffect, useCallback} from "react";
import Particles from "react-particles";
import {loadSlim} from "tsparticles-slim";
import {links} from "../constants/particles";
import {technologies, strings} from "../constants/";
import Slider from "react-slick";


const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["فرزاد دهقان منشادی"], typeSpeed: 50, backSpeed: 20, backDelay: 10, showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings: strings, startDelay: 1500, typeSpeed: 80, backSpeed: 40, backDelay: 50, loop: true, showCursor: false,
    });

    return () => {
      typedInfo.destroy();
      typedName.destroy();
    };
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const options = {
    dots: false,           // Hide dots for cleaner look
    arrows: false,        // Hide arrows for autoplay cycle
    infinite: true,       // Loop infinitely
    autoplay: true,       // Auto rotate
    autoplaySpeed: 2000,  // Speed between slides (2 seconds)
    pauseOnHover: true,   // Pause when hovering
    cssEase: 'linear',    // Smooth transition
    slidesToShow: 5,      // Show 6 items at once
    slidesToScroll: 1,    // Scroll 1 at a time
    speed: 500,           // Transition speed
  };

  return (<Box sx={{
        backgroundImage: `url(${pic7})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
      }}>
        <Particles id="tsparticles" init={particlesInit} options={links}
                   style={{
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100%",
                     height: "100%",
                     zIndex: 0,
                     pointerEvents: "none",
                   }}
        />
        <Typography ref={nameEl} variant="h3" color="whitesmoke"/>
        <Typography ref={infoEl} variant="h4" color="whitesmoke"
                    sx={{textDecoration: "underline", textDecorationColor: "green", m: 2}}/>

        <Box sx={{position: 'absolute', bottom: 50, width: '90%',}}>
          <Slider {...options}>
            {technologies.map((item, index) => (
                <Box key={index} sx={{textAlign: 'center', px: 1}}>
                  <Box component="img" src={item.icon} alt={item.name} sx={{
                    height: 50, width: 'auto', margin: '0 auto', display: 'block', filter: 'brightness(0) invert(1)'
                  }}/>
                  <Typography variant="caption" sx={{
                    display: 'block', mt: 1, color: 'whitesmoke', fontWeight: 'medium', textAlign: 'center'
                  }}>
                    {item.name}
                  </Typography>
                </Box>
            ))}
          </Slider>
        </Box>

      </Box>
  )
}

export default Home;