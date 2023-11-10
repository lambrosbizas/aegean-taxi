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

import GB from "public/assets/flags/gb.svg";
import US from "public/assets/flags/us.svg";
import FR from "public/assets/flags/fr.svg";

export default function TaxiMykonosReviews() {
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
            What travelers who booked a <br />
            ride with Aegean Taxi in <br />
            Mykonos say about us
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
            What travelers who booked a ride with Aegean Taxi in Mykonos say
            about us
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
                    <Image src={FR} width={60} alt="FR" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "385px", md: "400px" },
                      }}
                    >
                      Booking a ride on Mykonos Island has never been easier
                      with the Web-based service provided by Aegean Taxi. The
                      process is simple, and their professional drivers will
                      ensure you have a comfortable and safe ride.
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
                        Laura
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
                        minHeight: { xs: "385px", md: "400px" },
                      }}
                    >
                      We spent a week in Mykonos and used this company for all
                      of our journeys during our stay. All was communicated
                      through WhatsApp, so really easy to send a text to
                      communicate. The cars were always clean and the drivers
                      made sure we always felt comfortable on our journeys as
                      the roads are pretty unique in Mykonos!! They were always
                      cheaper than Uber and the drivers have all the local
                      knowledge so better if in traffic! Definitely recommend!!
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
                        Jo
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
                    <Image src={GB} width={60} alt="GB" />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        my: 2,
                        minHeight: { xs: "385px", md: "400px" },
                      }}
                    >
                      We have used Aegean Taxi app several times on our stay in
                      Mykonos. It was simple, affordable and convenient, with
                      competitive prices and professional drivers. You can be
                      sure that you will always have a pleasant experience.
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
                        Carter
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
