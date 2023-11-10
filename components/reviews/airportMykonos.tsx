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

import UK from "public/assets/flags/gb.svg";
import US from "public/assets/flags/us.svg";
import IT from "public/assets/flags/it.svg";

export default function AirportMykonosReviews() {
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
            <br /> Mykonos airport ride
            <br /> with Aegean Taxi say
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
            What travelers who booked their Mykonos airport ride with Aegean
            Taxi say
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
                        minHeight: { xs: "220px", md: "220px" },
                      }}
                    >
                      Aegean Taxi is good value and a reliable service. Our
                      driver Kostas showed up on time and was super helpful and
                      full of useful local knowledge. We will be very happy to
                      use him again on our departure and highly recommend their
                      service.
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
                        William
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
                        minHeight: { xs: "220px", md: "220px" },
                      }}
                    >
                      We booked our transfers from / to Mykonos airport last
                      summer. The booking process was very simple and on a fare
                      price. The car was clean brand new
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
                        Luca
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
                        minHeight: { xs: "220px", md: "220px" },
                      }}
                    >
                      They were incredible. Very fast to respond and easy to
                      book on short notice. Helped us get to the airport and
                      were right on time for both trips. Beautiful cars and
                      lovely drivers. Highly recommend this for easy transfers
                      in Mykonos. Thank you!
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
                        Edward
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
