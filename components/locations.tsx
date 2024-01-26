"use client";
import NextLink from "next/link";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//MUI
import { Link as MUILink } from "@mui/material";

import ATHENS from "public/assets/Athens.png";
import MYKONOS from "public/assets/Mykonos.png";
import SANTORINI from "public/assets/Santorini.png";

import CORFU from "public/assets/Corfu.png";
import RHODES from "public/assets/Rhodes.png";

import MILOS from "public/assets/taxi-locations/taxi-milos.jpeg";
import { locationDetails } from "@/utils/locationDetails";

export default function Locations() {
  let settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 3,
    slidesToShow: 3,
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

  const SlideItems: any = () => {
    return (
      <>
        {Object.values(locationDetails.taxi_locations).map(
          (innerObject: any, i) => (
            <Stack key={i} spacing={2} sx={{ textAlign: "center", p: 1 }}>
              <MUILink
                underline="none"
                href={innerObject.slide.href}
                component={NextLink}
              >
                <Paper>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      component={"div"}
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 500,
                        mb: 2,
                        textAlign: { xs: "left", md: "center" },
                      }}
                    >
                      {innerObject.slide.name}
                    </Typography>
                    <Box
                      sx={{
                        minHeight: { xs: 224, md: 345 },
                        backgroundImage: `url(${innerObject.slide.photo})`,
                        backgroundSize: "cover",
                        mb: 3,
                        borderRadius: 3,
                      }}
                    ></Box>
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        mt: 3,
                        lineHeight: 3,
                        borderBottom: `3px solid #000`,
                        width: "75px",
                      }}
                    >
                      Find a ride
                    </Typography>
                  </Box>
                </Paper>
              </MUILink>
            </Stack>
          )
        )}
      </>
    );
  };

  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          display: { xs: "none", md: "block" },
          // lineHeight: { xs: "28px", md: "48px" },
        }}
      >
        Aegean is available in the following
        <br /> locations
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
        Aegean is available in the following locations
      </Typography>

      {/* Slider */}
      <Box sx={{ my: 5, p: { xs: 2, md: 0 } }}>
        <Slider {...settings}>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <MUILink
              underline="none"
              href="/taxi/athens-taxi-app"
              component={NextLink}
            >
              <Paper>
                <Box sx={{ p: 2 }}>
                  <Typography
                    component={"div"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      textAlign: { xs: "left", md: "center" },
                    }}
                  >
                    Athens
                  </Typography>
                  <Box
                    sx={{
                      minHeight: { xs: 224, md: 345 },
                      backgroundImage: `url(${ATHENS.src})`,
                      backgroundSize: "cover",
                      mb: 3,
                      borderRadius: 3,
                    }}
                  ></Box>

                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "75px",
                    }}
                  >
                    Find a ride
                  </Typography>
                </Box>
              </Paper>
            </MUILink>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <MUILink
              underline="none"
              href="/taxi/mykonos-taxi-app"
              component={NextLink}
            >
              <Paper>
                <Box sx={{ p: 2 }}>
                  <Typography
                    component={"div"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      textAlign: { xs: "left", md: "center" },
                    }}
                  >
                    Mykonos
                  </Typography>
                  <Box
                    sx={{
                      minHeight: { xs: 224, md: 345 },
                      backgroundImage: `url(${MYKONOS.src})`,
                      backgroundSize: "cover",
                      mb: 3,
                      borderRadius: 3,
                    }}
                  ></Box>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "75px",
                    }}
                  >
                    Find a ride
                  </Typography>
                </Box>
              </Paper>
            </MUILink>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <MUILink
              underline="none"
              href="/taxi/santorini-taxi-app"
              component={NextLink}
            >
              <Paper>
                <Box sx={{ p: 2 }}>
                  <Typography
                    component={"div"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      textAlign: { xs: "left", md: "center" },
                    }}
                  >
                    Santorini
                  </Typography>
                  <Box
                    sx={{
                      minHeight: { xs: 224, md: 345 },
                      backgroundImage: `url(${SANTORINI.src})`,
                      backgroundSize: "cover",
                      mb: 3,
                      borderRadius: 3,
                    }}
                  ></Box>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "75px",
                    }}
                  >
                    Find a ride
                  </Typography>
                </Box>
              </Paper>
            </MUILink>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <MUILink
              underline="none"
              href="/taxi/corfu-taxi-app"
              component={NextLink}
            >
              <Paper>
                <Box sx={{ p: 2 }}>
                  <Typography
                    component={"div"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      textAlign: { xs: "left", md: "center" },
                    }}
                  >
                    Corfu
                  </Typography>
                  <Box
                    sx={{
                      minHeight: { xs: 224, md: 345 },
                      backgroundImage: `url(${CORFU.src})`,
                      backgroundSize: "cover",
                      mb: 3,
                      borderRadius: 3,
                    }}
                  ></Box>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "75px",
                    }}
                  >
                    Find a ride
                  </Typography>
                </Box>
              </Paper>
            </MUILink>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <MUILink
              underline="none"
              href="/taxi/rhodes-taxi-app"
              component={NextLink}
            >
              <Paper>
                <Box sx={{ p: 2 }}>
                  <Typography
                    component={"div"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      textAlign: { xs: "left", md: "center" },
                    }}
                  >
                    Rhodes
                  </Typography>
                  <Box
                    sx={{
                      minHeight: { xs: 224, md: 345 },
                      backgroundImage: `url(${RHODES.src})`,
                      backgroundSize: "cover",
                      mb: 3,
                      borderRadius: 3,
                    }}
                  ></Box>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "75px",
                    }}
                  >
                    Find a ride
                  </Typography>
                </Box>
              </Paper>
            </MUILink>
          </Stack>
          {Object.values(locationDetails.taxi_locations).map(
            (innerObject: any, i) => (
              <Stack key={i} spacing={2} sx={{ textAlign: "center", p: 1 }}>
                <MUILink
                  underline="none"
                  href={innerObject.slide.href}
                  component={NextLink}
                >
                  <Paper>
                    <Box sx={{ p: 2 }}>
                      <Typography
                        component={"div"}
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 500,
                          mb: 2,
                          textAlign: { xs: "left", md: "center" },
                        }}
                      >
                        {innerObject.slide.name}
                      </Typography>
                      <Box
                        sx={{
                          minHeight: { xs: 224, md: 345 },
                          backgroundImage: `url(${innerObject.slide.photo})`,
                          backgroundSize: "cover",
                          mb: 3,
                          borderRadius: 3,
                        }}
                      ></Box>
                      <Typography
                        component="span"
                        variant="body1"
                        sx={{
                          mt: 3,
                          lineHeight: 3,
                          borderBottom: `3px solid #000`,
                          width: "75px",
                        }}
                      >
                        Find a ride
                      </Typography>
                    </Box>
                  </Paper>
                </MUILink>
              </Stack>
            )
          )}
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}
