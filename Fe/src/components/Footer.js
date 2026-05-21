import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* info */}
      <div
        style={{
          height: "338px",
          background: "#300058",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            rowSpacing={1}
            sx={{ py: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <h1
                style={{ color: "white", fontWeight: "bold", fontSize: "36px" }}
              >
                SUBSCRIBE
                <br /> NOW!
              </h1>
            </Grid>
            <Grid item xs={6}>
              <div>
                <TextField
                  fullWidth
                  label="Email"
                  id="Email"
                  sx={{ background: "white" }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <p style={{ fontSize: "24px", color: "#999999" }}>
                Sign up to our newsletter for news and access to exclusive
                deals!
              </p>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                sx={{ color: "#FA6A02", borderColor: "#FA6A02", border: 10 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* footer  */}
      <div
        style={{
          pading: 30,
          background: "#000",
          //   height: 200,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 10 }}
            justifyContent={"space-between"}
          >
            <Grid item xs={2}>
              <Stack>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  THE BIG BOX
                </h1>
                <p
                  style={{
                    color: "#9999",
                  }}
                >
                  Canada’s Largest Family Entertainment Center with amazing
                  attractions and ideal event space.
                </p>
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Plan Your Visit
                </h1>
                <p style={{ color: "#9999", lineHeight: "25px" }}>
                  Plays
                  <br />
                  Our Hours
                  <br />
                  Our Locations
                  <br />
                  Sign Waiver
                  <br />
                  The Big Bite
                </p>
                <br />
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Promo & Gift Card
                </h1>
                <p style={{ color: "#9999", lineHeight: "25px" }}>
                  Bundle Packages <br />
                  Current Promotions <br />
                  Gift Cards <br />
                </p>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Parties
                </h1>
                <p style={{ color: "#9999", lineHeight: "25px" }}>
                  Birthday Parties <br />
                  Summer Camps <br />
                  Corporate Events <br />
                </p>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Contact Us
                </h1>
                <p style={{ color: "#9999", lineHeight: "25px" }}>
                  Contact Us <br />
                  FAQ's <br />
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
