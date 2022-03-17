import { NextPage } from "next";
import {
  Box
} from '@mui/material'
import ResponsiveDrawer from '../../componets/Drawer'

const Portfolios: NextPage = () => {
  return(
    <>
    <Box sx={{display: 'flex'}} >
        <ResponsiveDrawer/>
    </Box>
    </>
  )
}
export default Portfolios;
