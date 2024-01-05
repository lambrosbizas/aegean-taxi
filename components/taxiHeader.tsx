"use client";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import Form from "components/requestRideForm/form";
import DownloadAppButton from "components/downloadAppButton";

import bg from "public/assets/taxi-header.png";
import Athens from "public/assets/taxi-athens.jpg";
import Mykonos from "public/assets/taxi-mykonos.png";
import Santorini from "public/assets/taxi-santorini.png";
import Corfu from "public/assets/taxi-corfu.png";
import Rhodes from "public/assets/taxi-rhodes.png";
import Milos from "public/assets/taxi-milos.jpeg";

import { locationDetails } from "@/utils/locationDetails";

export default function TaxiHeader() {
  const params: any = useParams();
  let title = `Your Taxi App <br />in Greece`;
  let subHeader = ` in Greece`;
  let cover = bg;

  const data = locationDetails[params.location];

  if (params.location) {
    const city = (
      params.location.charAt(0).toUpperCase() + params.location.slice(1)
    ).replace("-taxi-app", "");
    title = `Your ${city}<br /> Taxi App`;
    subHeader = ` in ${city}`;
    switch (city) {
      case "Athens":
        cover = Athens;
        break;
      case "Mykonos":
        cover = Mykonos;
        break;
      case "Santorini":
        cover = Santorini;
        break;
      case "Corfu":
        cover = Corfu;
        break;
      case "Rhodes":
        cover = Rhodes;
        break;
      case "Milos":
        cover = Milos;
        break;
    }
  }

  // Your Athens Taxi App
  // The easiest way to book your taxi and transfer in Athens
  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mt: 6,
              display: { xs: "none", md: "block" },
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          ></Typography>
          <Typography
            component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 400,
              mt: 1,
              display: { xs: "block", md: "none" },
            }}
          >
            {title.replaceAll("<br />", "")}
          </Typography>
          <Typography
            component="span"
            variant="h5"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            The easiest way to book your taxi <br /> and transfer
            {subHeader}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundImage: { xs: "none", md: `url(${cover.src})` },
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "230px",
              backgroundImage: `url(${cover.src})`,
              backgroundSize: "cover",
              backgroundPosition: "0 60%",
            }}
          ></Box>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "block", md: "flex" },
              minHeight: { xs: "auto", md: "595px" },
            }}
          >
            <Form />
          </Box>
          {/* Download the app Button */}
          <DownloadAppButton showMd="none" showStoresMD="none" />
        </Grid>
      </Grid>
    </Container>
  );
}
