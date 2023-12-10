import React from "react";
import {
  Avatar,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const paperStyle = { padding: 20, height: "60vh" };
  const avatarStyle = { backgroundColor: "green" };
  const btnstyle = { margin: "8px 0" };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    console.log(props);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                id="standard-basic"
                name="username"
                label="Username"
                variant="standard"
                placeholder="Enter username"
                fullWidth
                requried
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                id="standard-basic"
                label="Password"
                name="password"
                variant="standard"
                type="password"
                placeholder="Enter password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                style={btnstyle}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
