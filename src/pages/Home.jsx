import {Box, Typography} from "@mui/material";
import pic3 from "../assets/pictures/background/pic3.jpg";
import Typed from "typed.js";
import {useRef, useEffect} from "react";


const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "من یک دانشجو کارسناسی ورودی ۴۰۲ دانشگاه علم و صنعت ایران هستم",
    "دارای معدل الف در دانشگاه هستم",
    "من یک برنامه نویس فول استک هستم",
  ]

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["فرزاد دهقان منشادی"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 1500,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typedInfo.destroy();
      typedName.destroy();
    };
  }, [])

  return (
      <Box sx={{
        backgroundImage: `url(${pic3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography ref={nameEl} variant="h3" color="whitesmoke"/>
        <Typography ref={infoEl} variant="h4" color="whitesmoke"
                    sx={{textDecoration: "underline", textDecorationColor: "green"}}/>
      </Box>

  )
}

export default Home;