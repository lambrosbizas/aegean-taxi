// @ts-nocheck

"use client";
import Image from "next/image";
import NextLink from "next/link";

// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Logo from "public/assets/at_logo_blue.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function BookOnlineButton({
  displayXS = "block",
  displayMD = "block",
}: {
  displayXS?: string;
  displayMD?: string;
}) {
  return (
    <Link
      underline="none"
      href="/book-online"
      component={NextLink}
      sx={{
        textDecoration: "none",
        color: "#000",
      }}
    >
      <Box
        justifyContent="flex-start"
        alignItems="flex-start"
        display="flex"
        sx={{
          width: "100%",
          height: "105px",
          background: "#EBEBEB",
          p: 2,
          display: { xs: displayXS, md: displayMD },
          mb: 2,
          cursor: "pointer",
        }}
        onClick={() => {}}
      >
        <Grid container spacing={0} sx={{ background: "#fff", p: 1 }}>
          <Grid item xs={3} md={2} sx={{ mt: 1 }}>
            <Image src={Logo} alt="Aegean" height={38} />
          </Grid>
          <Grid item xs={7} md={8} sx={{ mt: 2, textAlign: "left" }}>
            <Typography
              component="span"
              variant="body1"
              gutterBottom
              sx={{
                lineHeight: 1,
                mt: 0,
              }}
            >
              Book online now
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ mt: 1.5 }}>
            <ArrowRightAltIcon fontSize="large" />
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
}
