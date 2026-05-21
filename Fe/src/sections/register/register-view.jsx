import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Card } from "@mui/material";

export default function RegisterView() {
    const [error] = useState({confirmPassword: ''});
    return (
        
        <Box
            sx={{
                height: 1,
                mt: 10,
            }}>
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Card sx={{
              p: 5,
              width: 1,
              maxWidth: 550,
              border: "10px solid #fefefe",
            }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Stack spacing={2}>
                    <Avatar display alignItems="center" style={{backgroundColor: "pink"}}> 
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign up
                    </Typography>
                    </Stack>
                    <form noValidate>

                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"                    
                                />
                                {error.confirmPassword && <span>{error.confirmPassword}</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I accept to the term of services"
                                />
                            </Grid>
                        </Grid>
                        <LoadingButton
                            type="submit"
                            size="large"
                            color="inherit"
                            fullWidth
                            variant="contained"
                            
                        >
                            Sign Up
                        </LoadingButton>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="auth" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
            </Card>
            </Stack>
        </Box>
    );
}
