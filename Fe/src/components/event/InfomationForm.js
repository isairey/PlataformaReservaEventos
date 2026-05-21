import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

const InfomationForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h3>
        Provide us with some additional details to finalize your event. If you
        haven't already logged in, create a new account by entering a password
        below. Then click Next Step to review the cart.
      </h3>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            label="Email address"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <TextField
            label="Phone"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <TextField
            label="Name"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
        </div>

        <TextField
          label="Address"
          fullWidth
          id="outlined-start-adornment"
          sx={{ m: 1, width: "100%" }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          m: 1,
        }}
      >
        {" "}
        Submit
      </Button>
    </div>
  );
};

export default InfomationForm;
