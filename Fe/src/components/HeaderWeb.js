import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { logo } from "../asset";
const pages = ["Products", "Package", "Blog"];
const HeaderWeb = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <div
      style={{
        height: 155,
        background: "#000",
        borderBottom: "1px solid #292929",
      }}
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "10px 0",
        }}
      >
        <img src={logo} width={128} height={128} alt="logo" />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Stack>
    </div>
  );
};

export default HeaderWeb;
