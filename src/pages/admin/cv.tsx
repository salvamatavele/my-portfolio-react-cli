import { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Card,
  CardMedia,
  Toolbar,
  Typography,
  CardContent,
  CardActionArea,
  Button,
  CardActions, Snackbar, Alert, DialogTitle, DialogContent, DialogContentText, TextField, Dialog, IconButton, Stack,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import ResponsiveDrawer from '../../componets/Drawer'
import AlertDialog from '../../componets/AlertDialog'
import React, { useState, useEffect } from 'react'
import axios, { url } from '../../lib/defaults'
import { Form, Formik } from 'formik'
import { PhotoCamera } from '@mui/icons-material'

interface CvFields {
  id?: number;
  userId: number;
  doc: any;
}

interface State {
  open: boolean;
  message?: string;
  severity?: string | undefined;
}
const Cv: NextPage = () => {
  const drawerWidth = 240;
  const [cv, setCv] = useState<CvFields>()
  const [snackState, setSnackState] = useState<State>({open:false, message:"", severity: "success"})
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(false)

  useEffect(()=>{
    getCv()
  },[])

  async function getCv() {
    try {
      const response = await axios.get('/about/cv')
      setCv(response.data)
    }catch (error: any) {
      console.log(error.response)
      setSnackState({open: true, message: "Ooops! We got some error", severity: "warning"})
    }
  }
  async function confirmDelete(){
    setOpen(true)
  }
  async function destroy(id: number) {
    try {
      const response = await axios.delete(`/about/cv/${cv?.id}`)
      if (response.data.success){
        setSnackState({open: true, message: "Deleted successfully.", severity: "success"})
        setOpen(false)
      }else{
        setSnackState({open: true, message: "Ooops! We got some problem to delete the item. Try again later.", severity: "error"})
      }
      getCv()
    }catch (error: any) {
      console.log(error.response)
      setSnackState({open: true, message: "Ooops! We got some problem.", severity: "warning"})
    }
  }

  async function onSave(values: CvFields) {
    try {
      const res = await axios.post('/about/cv', values)
      if (res.data.success){
        setSnackState({open: true, message: "Saved successfully.", severity: "success"})
        setOpen(false)
      }else{
        setSnackState({open: true, message: "Ooops! We got some problem to save the item. Try again later.", severity: "error"})
      }
      getCv()
    }catch (error: any) {
      console.log(error.response)
      setSnackState({open: true, message: "Ooops! We got some problem.", severity: "warning"})
    }
  }
  return (
    <>
    <Head>
      <title>CV</title>
    </Head>
      <Box sx={{display: "flex"}} >
        <ResponsiveDrawer/>
        {/*Toast */}
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
          <Typography variant="h4">CV</Typography>
          <Card sx={{ maxWidth: 405 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/logo-img.png"
                alt="CV"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Curriculum Vitae
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I am very pragmatic person,
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
              <Button target="_blank" href={`${url}/document/cv/${cv?.doc}`} size="small" color="primary" disabled={!cv } >
                Open
              </Button>
              <Box component="div" >
                <Button onClick={() => {setForm(true)}} size="small" color="primary" disabled={!!cv } >
                  New CV
                </Button>
                <Button onClick={confirmDelete} size="small" color="primary" disabled={!cv }>
                  Delete
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
        {/*Form upload cv*/}
        <Dialog open={form} onClose={()=>{setForm(false)}}>
          <DialogTitle>Upload new CV</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To upload you cv please load an image on the icon below.
            </DialogContentText>
            <Formik
              initialValues={{
                userId: 1,
                doc: []
              }}
              enableReinitialize={true}
              onSubmit={onSave}
            >
              {({isSubmitting, errors, handleChange, touched})=>(
              <Form >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="icon-button-file">
                    <input accept="image/*" id="contained-button-file" multiple type="file" name="test" onChange={handleChange} />
                    <TextField  id="icon-button-file" name="doc" onChange={handleChange} type="file" sx={{ display: 'none'}}/>
                    <IconButton color="primary" size="large" aria-label="upload picture" component="span">
                      <PhotoCamera fontSize="large" />
                    </IconButton>
                  </label>
                </Stack>
                <Box sx={{display: "flex", justifyContent: "end"}}>
                  <LoadingButton onClick={()=>{setForm(false)}} >Cancel</LoadingButton>
                  <LoadingButton type="submit" loading={isSubmitting} >Save</LoadingButton>
                </Box>
              </Form>
              )}
            </Formik>

          </DialogContent>

        </Dialog>
        {/*delete confirm*/}
        <AlertDialog
          onClick={() => {destroy(cv?.id)}}
          onClose={()=>{setOpen(false)}}
          open={open}
          title="Are you sure?"
          message="After you confirm the deletion you will never see this item."
        />
      </Box>
    </>
  )
}
export  default  Cv