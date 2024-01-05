"use client";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { locationDetails } from "@/utils/locationDetails";

export default function Faq({ location }: any) {
  const data = locationDetails[location];

  const QuestionList = ({ data }: any) => (
    <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="booking-content"
        id="booking-header"
      >
        <Typography
          component="span"
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            color: `rgba(0, 0, 0, 0.6)`,
          }}
        >
          {data.q}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "16px", md: "16px" },
            lineHeight: { xs: "40px", md: "51px" },
          }}
        >
          {data.a}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          // lineHeight: { xs: "48px", md: "68px" },
          mt: 5,
        }}
      >
        Frequently asked questions
      </Typography>

      <Box sx={{ my: 3 }}>
        {data.faq.map((d: any, i: number) => (
          <QuestionList key={i} data={d} />
        ))}
      </Box>
    </Container>
  );
}
