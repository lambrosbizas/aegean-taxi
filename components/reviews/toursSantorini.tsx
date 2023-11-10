"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Slider from "react-slick";

//MUI

import US from "public/assets/flags/us.svg";
import UK from "public/assets/flags/gb.svg";
import IT from "public/assets/flags/it.svg";

export default function ToursSantoriniReviews() {
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
            <br /> Santorini tour <br />
            with Aegean Taxi say
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
            What travelers who booked their Santorini tour with Aegean Taxi say
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Slider */}
          <Box sx={{ my: 1, p: { xs: 2, md: 3 } }}>
            <Slider {...settings}>
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
                        minHeight: { xs: "315px", md: "310px" },
                      }}
                    >
                      I had the pleasure of experiencing the Santorini by night
                      tour with Aegean App and it was simply amazing. The tour
                      took us to some of the best spots on the island to admire
                      the stunning views of the sunset and the twinkling lights
                      of the city.
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
                        Jennifer
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
                    <Image src={UK} width={60} alt="UK" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "315px", md: "310px" },
                      }}
                    >
                      I recently went on a full-day tour with Aegean App and it
                      was one of the best experiences I&prime;ve had in
                      Santorini. The itinerary was well planned and took us to
                      all the must-see spots on the island. I would definitely
                      recommend this tour to anyone visiting Santorini
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
                        Paul
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
                    <Image src={IT} width={60} alt="IT" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "315px", md: "310px" },
                      }}
                    >
                      I took the half-day tour with Aegean App and I was
                      extremely impressed with the quality of the tour. From
                      start to finish, the tour was well-organized and provided
                      a great overview of the island&prime;s history and
                      culture. I would highly recommend this tour to anyone
                      visiting Santorini who wants to learn more about the
                      island&prime;s rich history and culture.
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
                        Lucia
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
