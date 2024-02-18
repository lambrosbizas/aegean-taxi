"use client";

// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

// assets
import ATHENS from "public/assets/athens-airport.jpg";
import TAXI from "public/assets/taxi-guide.png";
import TRANSPORT from "public/assets/transport-guide.png";
import { locationDetails } from "../../utils/locationDetails";

export default function AirportGuide({ location }: any) {
  const data =
    location === "default"
      ? locationDetails[location]
      : locationDetails.airports[location];

  if (!data?.airport_Guide) {
    return null;
  }
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h5"
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          lineHeight: { xs: "84px", md: "68px" },
          py: { xs: 1, md: 3 },
        }}
      >
        Airport Guide
      </Typography>
      {/* List */}

      <Stack spacing={{ xs: 2, md: 3.2 }}>
        {/* Services */}
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundImage: `url(${ATHENS.src})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              minHeight: { xs: 238, md: 300 },
            }}
          ></Grid>
          <Grid item xs={12} md={5} sx={{ p: { xs: 0, md: 3 } }}>
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
              }}
            >
              Airport services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              {data.airport_Guide.text}
            </Typography>
          </Grid>
        </Grid>
        {/* ./Services */}

        {/* Taxi */}
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundImage: `url(${TAXI.src})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              minHeight: { xs: 350, md: 526 },
            }}
          ></Grid>
          <Grid item xs={12} md={5} sx={{ p: { xs: 0, md: 3 } }}>
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
              }}
            >
              Taxi Information
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              {data.airport_Guide.taxi_information}
            </Typography>
          </Grid>
        </Grid>
        {/* ./Taxi */}

        {/* Transportation */}
        <Grid container>
          {data.airport_Guide.transportation?.heading && (
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                backgroundImage: `url(${TRANSPORT.src})`,
                backgroundSize: "cover",
                minHeight: { xs: 450, md: 675 },
              }}
            ></Grid>
          )}
          <Grid item xs={12} md={5} sx={{ p: { xs: 0, md: 3 } }}>
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
              }}
            >
              {data.airport_Guide.transportation?.heading}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              {data.airport_Guide.transportation?.info}
              <br />
              {data.airport_Guide?.transportation?.link_title}
              <a href={data.airport_Guide.transportation?.link} target="_blank">
                {data.airport_Guide.transportation?.link}
              </a>
            </Typography>
          </Grid>
        </Grid>
        {/* ./Transportation */}
      </Stack>
      {/* ./List */}
    </Container>
  );
}
