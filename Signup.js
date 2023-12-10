import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import axios from 'axios'
import {Formik,Field,Form,ErrorMessage} from 'formik'
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import * as Yup from 'yup' 
import {FormHelperText} from '@mui/material'
const Signup = () => {
  const paperStyle = { padding: "30px 20px ", width: "300" };
  const headerStyle = { margin: "0" };
  const avatarStyle = { backgroundColor: "green" };
  const initialValues={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    termsAndConditions:false
  }
  const validationSchema=Yup.object().shape({
    name:Yup.string().min(3,"too short").required("Required"),
    email:Yup.string().email("Enter valid email").required("Required"),
    password:Yup.string().min(8,"Password minimum length should be 8").required("Required"),
    confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matched").required("Required"),
    termsAndConditions:Yup.string().oneOf(['true'],"Accept terms & conditions")
  })
  const onSubmit=(values,props)=>{
    console.log(values)
    console.log(props)
    setTimeout(()=>{
      props.resetForm()
      props.setSubmitting(false)
    },2000)
    
  }
  return (
    <Grid>
      <Paper  style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Signup</h2>
          <Typography variant="caption"gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik initialValues ={initialValues} validationSchema={validationSchema}onSubmit={onSubmit}>
          {(props)=>(
            <Form>
              
          <Field as={TextField}
            fullWidth
            label="Name"
            name="name"
            variant="standard"
            helperText={<ErrorMessage name='name'/>}
            placeholder="Enter name"
          />
          <Field as= {TextField}
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="standard"
            helperText={<ErrorMessage name='email'/>}
            placeholder="Enter email"
          />
          <Field as={TextField}
            fullWidth
            name="password"
            label="Password"
            type="password"
            variant="standard"
            helperText={<ErrorMessage name='password'/>}
            placeholder="Enter password"
          />
          <Field as ={TextField}
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="standard"
            helperText={<ErrorMessage name='confirmPassword'/>}
            placeholder="Enter confirm password"
          />
          <FormControlLabel
            control={<Field as={Checkbox} name="termsAndConditions" color="primary" />}
            label="I accept the terms and conditions"
          />
          <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>
          <Button type="submit" variant="contained" disabled = {props.isSubmitting} color="primary">{props.isSubmitting?"Loading":"Sign up"}
            
          </Button>
       
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};
export default Signup;
