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

export default function Faq({ location, type }: any) {
  console.log("type", type);
  const data = locationDetails[type][location];

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

      {data?.faq ? (
        <Box sx={{ my: 3 }}>
          {data.faq.map((d: any, i: number) => (
            <QuestionList key={i} data={d} />
          ))}
        </Box>
      ) : (
        <Box sx={{ my: 3 }}>
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
                What happens after I complete my booking?
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
                {`After the booking is completed, you will receive a confirmation email of your order. About 3-4 days prior to your arrival, you will receive your driver’s details, including their photo and contact information. We also send email and SMS updates regarding your ride, up until the moment you meet at the arrival gate. Drivers know exactly where to meet you and what to do in case of a delay so rest assured that everything will go according to plan.`}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="question-content"
              id="question-header"
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
                Is it more expensive than a taxi ride?
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
                We try to match the price you would pay for a regular taxi ride.
                That said, Aegean Taxi is much more than a simple ride. Our goal
                is to connect you with a taxi driver who is a proud ambassador
                of their city and who will answer any questions you might have
                about your destination, making your first moments of your
                arrival unique and memorable.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="drivers-content"
              id="drivers-header"
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
                How do you select your drivers?
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
                All our drivers are carefully selected and specially trained in
                order for you to have an excellent experience. Each of them has
                a unique personality, speaks excellent English, and will be more
                than happy to welcome you to their city. The quality of service
                you receive is continuously monitored and improved.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="question-content"
              id="question-header"
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
                I have a different question
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
                Contact us <br />
                email: contact@aegeantaxi.com
                <br /> Phone: +30 215 215 4000
                <br />
                Whatsapp: +306943829494
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
    </Container>
  );
}
