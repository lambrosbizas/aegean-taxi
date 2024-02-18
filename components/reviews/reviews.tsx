"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//MUI

import GB from "public/assets/flags/gb.svg";
import US from "public/assets/flags/us.svg";
import ES from "public/assets/flags/es.svg";
import FR from "public/assets/flags/fr.svg";

import { locationDetails } from "@/utils/locationDetails";

export default function Reviews({ location }: any) {
  const data =
    location === "default"
      ? locationDetails[location]
      : locationDetails.taxi_locations[location];

  let settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "30",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  const getFlag = (flag: string) => {
    if (flag === "uk") {
      return GB;
    }
    if (flag === "america") {
      return US;
    }
    if (flag === "french") {
      return FR;
    }
    if (flag === "spain") {
      return ES;
    }
  };

  const Review = ({ item }: any) => (
    <Stack spacing={2} sx={{ p: 1 }}>
      <Paper
        sx={{
          background: "#244284",
          color: "#fff",
          minHeight: "500px",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Image src={getFlag(item.flag)} width={60} alt="GB" />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              my: 2,
              minHeight: { xs: "200px", md: "170px" },
            }}
          >
            {item.text}
          </Typography>

          {/* User */}
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Box
              component="span"
              sx={{
                alignSelf: "flex-end",
                mt: 3,
                p: 1,
                px: 2,
                textAlign: "center",
                background: `#fff`,
                borderRadius: 1,
                color: "#000",
                position: "absolute",
                bottom: "30px",
              }}
            >
              {item.dateName}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", md: "36px" },
              display: { xs: "none", md: "block" },
              // lineHeight: { xs: "28px", md: "48px" },
              mt: 5,
            }}
          >
            What travelers who booked
            <br /> a ride with Aegean Taxi say about us
          </Typography>
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", md: "36px" },
              display: { xs: "block", md: "none" },
              // lineHeight: { xs: "48px", md: "68px" },
            }}
          >
            What travelers who booked a ride with Aegean Taxi say about us
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Slider */}
          <Box sx={{ my: 1, p: { xs: 2, md: 3 } }}>
            <Slider {...settings}>
              {data?.reviews.map((item: any, i: number) => (
                <Review key={i} item={item} />
              ))}
            </Slider>
          </Box>
          {/* ./Slider */}
        </Grid>
      </Grid>
    </Container>
  );
}
