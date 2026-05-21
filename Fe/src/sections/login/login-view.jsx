import { useState } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { Bounce, toast } from "react-toastify";

// import { useRouter } from "src/routes/hooks";

import { bgGradient } from "../../theme/css";

import Iconify from "../../components/iconify";
import { AuthApi } from "../../api/index";
import { useNavigate } from "react-router-dom";
import { ROLE, ROUTER } from "../../util/index";

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [disbaleBtnLogin, setDisableBtnLogin] = useState(false);
  const navigate = useNavigate();

  // const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const checkRole = (role) => {
    switch (role) {
      case ROLE.ADMIN:
        return navigate(ROUTER.USER);
      case ROLE.HOST:
        return navigate(ROUTER.PACKAGE_HOST);
      case ROLE.CUSTOMER:
        return navigate(ROUTER.PACKAGE);
      default:
        break;
    }
  };
  const handleClick = async () => {
    setDisableBtnLogin(true);
    try {
      const res = await AuthApi.login({
        email,
        password,
      });
      localStorage.setItem("token", JSON.stringify(res.access_token));
      localStorage.setItem("info", JSON.stringify(res));
      toast.success("🦄 Login success!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      checkRole(res?.role);
      setDisableBtnLogin(false);
      window.location.reload();
    } catch (error) {
      setDisableBtnLogin(false);
      toast.error("🦄 Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    // router.push("/dashboard");
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
        disabled={disbaleBtnLogin}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <div>
      <Box
        sx={{
          height: 1,
          mt: 10,
        }}
      >
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Card
            sx={{
              p: 5,
              width: 1,
              maxWidth: 420,
              border: "10px solid #fefefe",
            }}
          >
            <Typography variant="h4">Sign in to Minimal</Typography>

            <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
              Don’t have an account?
              <Link href="register" variant="subtitle2" sx={{ ml: 0.5 }}>
                Get started
              </Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:google-fill" color="#DF3E30" />
              </Button>

              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:facebook-fill" color="#1877F2" />
              </Button>

              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                OR
              </Typography>
            </Divider>

            {renderForm}
          </Card>
        </Stack>
      </Box>
    </div>
  );
}
