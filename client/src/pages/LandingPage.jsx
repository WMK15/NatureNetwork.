import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Box,
} from "@mui/material";
import "animate.css";

import Logo from "../assets/logo/logo.png";

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Container className="animate__animated animate__fadeIn">
        <Grid container alignItems="center">
          <Grid item>
            <img
              src={Logo}
              alt="Logo"
              style={{ marginRight: "0.5rem", width: "20rem", height: "20rem" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              align="right"
              sx={{
                fontSize: { lg: "2rem", xs: "1rem" },
                fontFamily: "Poppins",
              }}
              className="animate__animated animate__fadeInRight"
            >
              Building a better future, one volunteer at a time.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box
        className="section1"
        sx={{ backgroundColor: "aliceblue", py: "2rem" }}
      >
        <Container>
          <Typography
            className="animate__animated animate__fadeIn"
            fontFamily={"inherit"}
            variant="h5"
          >
            Building a better future, one volunteer at a time. NatureNetwork is
            more than just a platform; it's a community-driven movement
            dedicated to nurturing the planet and our global community through
            collective volunteer action. Whether you're drawn to restoring local
            green spaces, participating in conservation efforts, or supporting
            life-changing initiatives in your urban community, NatureNetwork is
            your bridge to making a meaningful difference. NatureNetwork is the
            first digital hub to offer a truly open volunteering experience:
            With charities, organisations, and individuals free to participate,
            there is a diverse range of opportunities to contribute your part or
            share a potential event.
          </Typography>
        </Container>
      </Box>
      <br />
      <Box className="section2" sx={{ backgroundColor: "#152500", py: "2rem" }}>
        <Container>
          <Typography
            className="animate__animated animate__fadeIn"
            variant="h5"
            fontFamily={"inherit"}
            color={"white"}
          >
            NatureNetwork is the first digital hub to offer a truly open
            volunteering experience: With charities, organisations, and
            individuals free to participate, there is a diverse range of
            opportunities to contribute your part or share a potential event.
            You can do volunteering as a hobby alongside your daily life, or you
            can take a chance and commit yourself in a monumental project; in
            our easy-to-use feed of various events and activities, bettering the
            world is as easy as scrolling and choosing what you like. From
            taking time to revitalise your neighbourhood to environmental
            restoration abroad, you can contribute in any way you like with
            NatureNetwork.
          </Typography>
        </Container>
      </Box>
      <br />
      <Box sx={{ backgroundColor: "#ffffe5", py: "2rem" }} className="section3">
        <Container>
          <Typography
            className="animate__animated animate__fadeIn"
            fontFamily={"inherit"}
            variant="h5"
          >
            Proud of your volunteering achievements, but don’t have a way to
            show it? Within NatureNetwork, your contributions to the world are
            celebrated: As you engage in various volunteering activities, you
            are rewarded with distinctive badges as a testament to your
            accomplishments. These serve as milestones to your journey, and
            range from doing your first volunteering task to reaching an
            impressive total of 100 opportunities taken. Take your engagement
            with our community further and strive to place yourself on the
            leader board. With global, country-specific, and regional rankings,
            you can showcase your progress and badges alongside fellow
            volunteers.
          </Typography>
        </Container>
      </Box>

      <Box>
        <Container>
          <Typography variant="h5" sx={{ marginTop: "2rem" }}>
            Frequently Asked Questions
          </Typography>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary>
              <Typography variant="h6">
                Q. How much of my information will organisations be able to see?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography textAlign={"left"}>
                rivacy is important to us! Organisations will only be able to
                see your name and email to contact you. Other information is
                hidden from them and we automatically check your eligibility for
                the role based on your details!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary>
              <Typography variant="h6">Q. Is NatureNetwork free?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography textAlign={"left"}>
                Yes! We are entirely committed to keeping this service free so
                everyone can work to clean up the environment.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary>
              <Typography variant="h6">
                Q. Will I be able to find projects near me?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography textAlign={"left"}>
                Of course! We are currently in the process of increasing our
                partner organisations globally, meaning that everyone will be
                able to find a local opportunity, whether you live in a city, by
                the sea or in a small village.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
      <br />
      <br />
    </div>
  );
};

export default LandingPage;
