// @ts-nocheck

"use client";
import { useState, SyntheticEvent } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";

import Slider from "react-slick";

//
import CAR from "public/assets/horizontal-car.png";
import PHONE from "public/assets/phone-booking.png";
import WEB from "public/assets/app-booking.png";
import WHATSAPP from "public/assets/whatsapp-booking.png";
import RIDEAPP from "public/assets/ride-app.png";

// components

import CallUsButton from "components/callUsButton";
import BookOnlineButton from "components/bookOnlineButton";
import DownloadAppButton from "components/downloadAppButton";

export default function AirportBookingOptions({
  showRideApp = true,
}: {
  showRideApp?: boolean;
}) {
  const params: any = useParams();
  let title = ` in Greece`;

  if (params.location) {
    const city =
      params.location.charAt(0).toUpperCase() + params.location.slice(1);
    title = ` in ${city}`;
  }

  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipeToSlide: true,
  };

  return (
    <Container maxWidth={"lg"}>
      <Box sx={{ marginTop: { xs: 5, md: 10 } }}>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "26px", md: "36px" },
            display: { xs: "none", md: "block" },
          }}
        >
          We made it easier to book your airport transfer <br /> {title}
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "left",
            fontWeight: 700,
            fontSize: { xs: "26px", md: "36px" },
            display: { xs: "block", md: "none" },
          }}
        >
          We made it easier to book <br /> your airport transfer {title}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", mt: 3 }}
      >
        <div
          style={{
            background: "#000",
            height: 7,
            position: "absolute",
            width: "46%",
            zIndex: 1,
            left: "3%",
          }}
        ></div>
        <div
          style={{
            background: "#ECEFF1",
            height: 7,
            position: "absolute",
            width: "46%",
            zIndex: 1,
            right: "3%",
          }}
        ></div>
        <Box sx={{ height: { xs: 40, md: 70 }, zIndex: 3 }}>
          <Image
            src={CAR}
            alt="car"
            style={{ zIndex: 3, height: "100%", width: "auto" }}
          />
        </Box>
      </Box>
      {/* Slider */}
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Slider {...settings}>
          {/* Ride App */}
          {showRideApp && (
            <Stack spacing={0}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
                sx={{ my: { xs: 3, md: 3 } }}
              >
                <Grid item xs={12} md={6}>
                  <Stack sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        textAlign: "left",
                        ml: 15,
                        mt: 18,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <Typography
                        component={"span"}
                        variant="h4"
                        gutterBottom
                        sx={{
                          mt: "0 !important",
                          fontWeight: 700,
                        }}
                      >
                        Taxi App
                        {/* A World Class
                        <br /> Ride App */}
                      </Typography>
                    </Box>
                    <Typography
                      component={"span"}
                      variant="h6"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {/* A World Class Ride App */}
                      Taxi App
                    </Typography>
                    <Box
                      justifyContent="center"
                      alignItems="center"
                      sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                    >
                      <Image src={RIDEAPP} height={391} alt="Ride App" />
                    </Box>
                    <Box
                      sx={{
                        textAlign: "left",
                        ml: 15,
                        mt: 6,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <Typography variant="body1">
                        Get our ride app from the stores,
                        <br />
                        and schedule your ride in minutes
                        {/* Get our ride app from the stores, and start riding
                        <br /> in minutes */}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mt: 3,
                        display: { xs: "block", md: "none" },
                        minHeight: 77,
                      }}
                    >
                      Get our ride app from the stores,
                      <br />
                      and schedule your ride in minutes
                      {/* Get our ride app from the stores,
                      <br /> and start riding in minutes */}
                    </Typography>

                    <Box
                      sx={{
                        textAlign: "left",
                        ml: 15,
                        mt: 6,
                        mr: 8,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <DownloadAppButton showMd="none" />
                    </Box>
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" },
                        mt: 3,
                      }}
                    >
                      <DownloadAppButton showMd="none" />
                    </Box>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: { xs: "none", md: `block` } }}
                >
                  <Box justifyContent="center" alignItems="center">
                    <Image src={RIDEAPP} alt="Ride App" />
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          )}
          {/* ./Ride App  */}
          {/* Phone Booking  */}
          <Stack spacing={0}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0}
              sx={{ my: { xs: 3, md: 3 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 18,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      component={"span"}
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      Phone Booking
                    </Typography>
                  </Box>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Phone Booking
                  </Typography>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                  >
                    <Image src={PHONE} height={391} alt="Phone booking" />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography variant="body1">
                      Give us a call with all your arrival/departure details,
                      <br /> and we will take care of the rest
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77,
                    }}
                  >
                    Give us a call with all your arrival/departure details,
                    <br /> and we will take care of the rest
                  </Typography>

                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      mr: 8,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <CallUsButton />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 3,
                    }}
                  >
                    <CallUsButton />
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: { xs: "none", md: `block` } }}
              >
                <Box justifyContent="center" alignItems="center">
                  <Image src={PHONE} alt="Phone booking" />
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {/* ./Phone Booking  */}
          {/* WhatsApp Booking  */}
          <Stack spacing={0}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0}
              sx={{ my: { xs: 3, md: 3 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 18,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      component={"span"}
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      WhatsApp
                      <br />
                      Booking
                    </Typography>
                  </Box>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    WhatsApp instant Booking
                  </Typography>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                  >
                    <Image src={WHATSAPP} height={391} alt="WhatsApp booking" />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography variant="body1">
                      Just launch whatsapp and request a ride, 24/7
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77,
                    }}
                  >
                    Just launch whatsapp and request a ride, 24/7
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: { xs: "none", md: `block` } }}
              >
                <Box justifyContent="center" alignItems="center">
                  <Image src={WHATSAPP} alt="WhatsApp booking" />
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {/* ./WhatsApp Booking  */}
          {/* Web Booking  */}
          <Stack spacing={0}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0}
              sx={{ my: { xs: 3, md: 3 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 18,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      component={"span"}
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      Web App
                    </Typography>
                  </Box>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Web App
                  </Typography>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                  >
                    <Image src={WEB} height={391} alt="App booking" />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography variant="body1">
                      Book your airport transfer online
                      <br /> in 2 simple steps
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77,
                    }}
                  >
                    Book your airport transfer online
                    <br /> in 2 simple steps
                  </Typography>

                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      mr: 8,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <BookOnlineButton />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 3,
                    }}
                  >
                    <BookOnlineButton />
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: { xs: "none", md: `block` } }}
              >
                <Box justifyContent="center" alignItems="center">
                  <Image src={WEB} alt="App booking" />
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {/* ./Web Booking  */}
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}
