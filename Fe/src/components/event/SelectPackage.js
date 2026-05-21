import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { PartyImg } from "../../asset";

const SelectPackage = ({ handleNextStep }) => {
  return (
    <div>
      Select Package :
      <Box
        sx={{
          marginTop: "10px",
        }}
      >
        {Array.from({ length: 4 }, (value, index) => index + 1)?.map(
          (item, index) => (
            <CardSelectPackage key={index} handleNextStep={handleNextStep} />
          )
        )}
      </Box>
    </div>
  );
};

export default SelectPackage;

const CardSelectPackage = ({ item, handleNextStep }) => {
  return (
    <Box
      sx={{
        background: "#f1f1f1",
        borderBottom: "1px solid #d7d7d7",
        padding: "20px",
        maxWidth: "800px",
        margin: "10px 0",
      }}
    >
      <Stack direction="row">
        <img src={PartyImg} alt="party img" width={128} height={128} />
        <Stack direction="column" sx={{ flex: 1, marginLeft: "10px" }}>
          <Stack direction="row" justifyContent={"space-between"}>
            <h3
              style={{
                color: "#f8c853",
                fontWeight: "bold",
              }}
            >
              Party Classic
            </h3>
            <p
              style={{
                color: "#f8c853",
                fontWeight: "bold",
              }}
            >
              $299.99
            </p>
          </Stack>
          <p>
            A classic way to have a party with playground admissions, arcade
            credits and free e-tickets for birthday child. Party Classic favors
            include
          </p>
          <ul>
            <li>
              <span
                style={{
                  fontSize: "small",
                }}
              >
                Indoor Playground &amp; Inflatable park admission for 10
                participants
              </span>
            </li>
            <li>
              <span
                style={{
                  fontSize: "small",
                }}
              >
                Up to 20 adult admissions included for free
              </span>
            </li>
            <li>
              <span
                style={{
                  fontSize: "small",
                }}
              >
                Private party space for 90 minutes
              </span>
            </li>
            <li>
              <span
                style={{
                  fontSize: "small",
                }}
              >
                Unlimited play time before and after party time
              </span>
            </li>
            <li>
              <span
                style={{
                  fontSize: "small",
                }}
              >
                20 arcade credits for each child
              </span>
            </li>
            <li>
              <span
                style={{
                  fontSize: "small",
                }}
              >
                100 E-tickets for the birthday child
              </span>
            </li>
            <li>
              <span
                style={{
                  fontSize: "small",
                }}
              >
                Plates, cups, cutlery, napkins &amp; table cloth
              </span>
            </li>
          </ul>
          <p>
            Price covers above services for 10 children. Grip socks are not
            included in the package and can be purchased at next stage of the
            booking. Each additional child is $22.99 + GST. You can upgrade to
            Infinite Day Pass for $49.99 + GST per child only!
          </p>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{
            background: "#f8c853",
            width: "200px",
          }}
          onClick={handleNextStep}
        >
          Select
        </Button>
      </Stack>
    </Box>
  );
};
