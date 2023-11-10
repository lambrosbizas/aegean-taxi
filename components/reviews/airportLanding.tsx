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

import UK from "public/assets/flags/gb.svg";
import IT from "public/assets/flags/it.svg";
import US from "public/assets/flags/us.svg";

export default function AirportLandingReviews() {
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
            What travelers who booked their
            <br /> Airport transfer with Aegean Taxi say
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
            What travelers who booked their Airport transfer with Aegean Taxi
            say
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Slider */}
          <Box sx={{ my: 1, p: { xs: 2, md: 3 } }}>
            <Slider {...settings}>
              <Stack spacing={2} sx={{ p: 1 }}>
                <Paper
                  sx={{
                    background: "#244284",
                    color: "#fff",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Image src={UK} width={60} alt="UK" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "200px", md: "190px" },
                      }}
                    >
                      {`Aegean Taxi's app makes booking a breeze, and their
                      professional drivers provide smooth rides to the airport.
                      Competitive pricing and quality service make to reccomend
                      them for airport transfers.`}
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
                        }}
                      >
                        Oliver - August 2021
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Stack>
              <Stack spacing={2} sx={{ p: 1 }}>
                <Paper
                  sx={{
                    background: "#2B6D95",
                    color: "#fff",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Image src={IT} width={60} alt="IT" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "200px", md: "190px" },
                      }}
                    >
                      Aegean Taxi provided a seamless experience for my airport
                      transfer. Booking online was easy, the car was
                      comfortable, and the driver was professional. Highly
                      recommend!
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
                        }}
                      >
                        Marco - May 2022
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Stack>
              <Stack spacing={2} sx={{ p: 1 }}>
                <Paper
                  sx={{
                    background: "#244284",
                    color: "#fff",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Image src={US} width={60} alt="US" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "200px", md: "190px" },
                      }}
                    >
                      Choosing Aegean Taxi was a great decision for my airport
                      transfer. I make the booking with a phone call, the price
                      was fair, and the service was top-notch.
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
                        }}
                      >
                        James - August 2021
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Stack>
            </Slider>
          </Box>
          {/* ./Slider */}
        </Grid>
      </Grid>
    </Container>
  );
}
