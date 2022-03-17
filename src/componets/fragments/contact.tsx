import { Button, Container, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import { NextPage } from "next";
import { Send } from "@mui/icons-material";
import React, { memo } from "react";
import * as Yup from "yup";

import axios from "../../lib/defaults";

type FormFields = {
  full_name: string;
  phone: number;
  email: string;
  content: string;
};

interface IProps {
  resetForm: object;
}

const Contact: NextPage = () => {
  const ContactScheme = Yup.object().shape({
    full_name: Yup.string()
      .required("required")
      .min(3, "too small")
      .max(255, "too large"),
    phone: Yup.number().required("required").min(8, "min 8"),
    email: Yup.string()
      .required("required")
      .min(4, "too small")
      .max(255, "too large")
      .email("invalid email"),
    content: Yup.string().required("required").min(5, "too small"),
  });

  async function contact(values: FormFields, actions: IProps) {
    try {
      const response = await axios.post("/contact", values);
    } catch (error: any) {
      console.log(error.response);
    }
    console.log(values);
    alert(values.full_name);
  }

  return (
    <>
      <Container>
        <Formik
          initialValues={{
            full_name: "",
            phone: 258,
            email: "",
            content: "",
          }}
          onSubmit={contact}
          validationSchema={ContactScheme}
          validateOnMount
        >
          {({ isSubmitting, values, handleChange, errors, touched }) => (
            <Form>
              <TextField
                required
                margin="normal"
                fullWidth
                id="full-name"
                label="Full Name"
                name="full_name"
                variant="standard"
                value={values.full_name}
                onChange={handleChange}
                error={touched.full_name && Boolean(errors.full_name)}
                helperText={touched.full_name && errors.full_name}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                id="phone"
                label="Telephone"
                name="phone"
                variant="standard"
                value={values.phone}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                variant="standard"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                id="content"
                label="Message"
                name="content"
                variant="standard"
                multiline
                rows={2}
                value={values.content}
                onChange={handleChange}
                error={touched.content && Boolean(errors.content)}
                helperText={touched.content && errors.content}
              />
              <LoadingButton
                endIcon={<Send />}
                type="submit"
                loading={isSubmitting}
                variant="contained"
              >
                Send
              </LoadingButton>
              <Button>nane</Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
export default memo(Contact);
