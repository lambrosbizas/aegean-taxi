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
import US from "public/assets/flags/us.svg";
import CA from "public/assets/flags/ca.svg";

export default function ToursLandingReviews() {
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
                        minHeight: { xs: "240px", md: "240px" },
                      }}
                    >
                      I took a solo trip to Athens and was blown away by the
                      Aegean Taxi&apos;s Half-day tour. The driver was friendly
                      and made sure I had an amazing time while visiting the
                      city&apos;s landmarks and hidden gems. them for airport
                      transfers.
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
                        Olivia - July 2019
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
                    <Image src={US} width={60} alt="US" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "240px", md: "240px" },
                      }}
                    >
                      We had the opportunity to take a custom tour with Aegean
                      Taxi in Mykonos and it was exactly what I wanted. The team
                      tailored the tour to our specific interests. The tour was
                      well-organized and provided us with a unique and
                      personalized experience.
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
                        Lucas - June 2022
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
                    <Image src={CA} width={60} alt="CA" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "240px", md: "240px" },
                      }}
                    >
                      I recently went on a full-day tour with Aegean Taxi and it
                      was one of the best experiences I&apos;ve had in
                      Santorini. The itinerary was well planned and took us to
                      all the must-see spots on the island. I would definitely
                      recommend this tour to anyone visiting Santorini.
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
                        Sophia - August 2022
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
