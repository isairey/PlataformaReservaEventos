import { Box, Container, Stack } from "@mui/material";
import { logo } from "../asset";
import React from "react";

const HeaderEvent = () => {
  return (
    <Box
      sx={{
        background: "#f1f1f1",
        borderBottom: "1px solid #d7d7d7",

        height: "59px",
        paddingTop: "10px",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center">
          <img src={logo} alt="logo" width={36} height={36} />
          <h3
            style={{
              marginLeft: "5px",
            }}
          >
            Booking Event
          </h3>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderEvent;
