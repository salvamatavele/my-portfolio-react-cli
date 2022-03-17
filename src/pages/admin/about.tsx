import { Box, Toolbar, Typography, TextField, Container, Snackbar, Alert } from '@mui/material'
import { Formik, Form } from "formik";
import { LoadingButton } from "@mui/lab";
import { Save, Edit } from "@mui/icons-material";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ResponsiveDrawer from "../../componets/Drawer";
import * as Yup from "yup";
import axios from "../../lib/defaults";

interface IAbout {
  userId: number;
  content: string | undefined;
  id?: number;
}
interface State {
  open: boolean;
  message?: string;
  severity?: string | undefined;
}
const About: NextPage = () => {
  const drawerWidth = 240;
  const [about, setAbout] = useState<IAbout>();
  const [snackState, setSnackState] = useState<State>({open:false, message:"", severity: "success"})


  const aboutSchema = Yup.object().shape({
    content: Yup.string().required("required").min(10, "Too small"),
  });

  useEffect(() => {
    getAbout();
  }, []);

  async function getAbout() {
    try {
      const response = await axios.get("/about");
      setAbout(response.data)
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  async function onSubmit(values: IAbout, actions: any) {
    if (about?.id) {
      onEdit(values)
    } else {
      onSave(values)
    }

  }
  async function onSave(values: IAbout) {
    try {
      const response = await axios.post("/about", values)
      if (response.data.success){
        setSnackState({open: true, message: "Saved successfully!", severity: "success"})
      }else{
        setSnackState({open: true, message: "Ooops!...Unsaved! Please try again.", severity: "error"})
      }
      getAbout()
    } catch (error: any) {
      console.log(error.response);
      setSnackState({open: true, message: "Ooops!...We got some problem.", severity: "warning"})
    }
  }
  async function onEdit(values: IAbout) {
    try {
      const response = await axios.put(`/about/${about?.id}`, values)
      if (response.data.success){
        setSnackState({open: true, message: "Saved successfully!", severity: "success"})
      }else{
        setSnackState({open: true, message: "Ooops!...Unsaved! Please try again.", severity: "error"})
      }
      getAbout()
    }catch (error: any) {
      console.error(error.response)
      setSnackState({open: true, message: "Ooops!...We got some problem.", severity: "warning"})
    }

  }
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Box sx={{ display: "flex" }}>
        <ResponsiveDrawer />
        <Snackbar open={snackState.open} onClose={()=>{setSnackState({open: !snackState.open})}}  autoHideDuration={6000} anchorOrigin={{vertical: "top", horizontal: "right"}} >
          <Alert onClose={()=>{setSnackState({open: !snackState.open})}} severity={snackState?.severity} sx={{ width: '100%' }}>
            {snackState.message}
          </Alert>
        </Snackbar>
        <Box
          component="main"
          sx={{
            flowGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography variant="h4">About Me</Typography>
          <Container>
            <Formik
              initialValues={{
                content: about?.content,
                userId: 1,
              }}
              enableReinitialize={true}
              onSubmit={onSubmit}
              validationSchema={aboutSchema}
              validateOnMount
            >
              {({ isSubmitting, values, touched, handleChange, errors }) => (
                <Form>
                  {/*<TextField required value={values.userId} name="userId" type={'hidden'} />*/}
                  <TextField
                    required
                    margin="normal"
                    fullWidth
                    label="About"
                    variant="standard"
                    value={ values.content }
                    id="content"
                    name="content"
                    multiline
                    rows={3}
                    onChange={handleChange}
                    error={touched.content && Boolean(errors.content)}
                    helperText={touched.content && errors.content}
                  />
                  <Box component="div" sx={{
                    display: "flex",
                    justifyContent: "end",
                    m: 1,
                  }}>
                    { about ? (
                      <LoadingButton
                        loading={isSubmitting}
                        endIcon={<Edit />}
                        type="submit"
                        variant="contained"
                      >
                        Edit
                      </LoadingButton>
                    ):(
                      <LoadingButton
                        loading={isSubmitting}
                        endIcon={<Save />}
                        type="submit"
                        variant="contained"
                      >
                        Save
                      </LoadingButton>
                    )}
                  </Box>
                </Form>
              )}
            </Formik>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default About;
