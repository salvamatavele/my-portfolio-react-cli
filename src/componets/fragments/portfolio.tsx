import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import React, { useState, useEffect, memo } from "react";

import axios from "../../lib/defaults";

interface IPortfolio {
  id: number;
  title: string;
  content: string;
  image: string;
}
interface IMeta {
  total: number;
  page: number;
  per_page: number;
}
const Portfolio: NextPage = () => {
  //states
  const [portfolios, setPortfolios] = useState<[IPortfolio]>([]);

  useEffect(() => {
    async function getPortfolios() {
      try {
        const response = await axios.get("/portfolios");
        setPortfolios(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    getPortfolios();
  }, []);
  return (
    <>
      {portfolios?.map((portfolio: IPortfolio) => {
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/logo.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DRY CODE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Company content{" none"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              Preview
            </Button>
          </CardActions>
        </Card>;
      })}
      {portfolios?.length === 0 && (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/logo.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DRY CODE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Software Company
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="secondary">
                Preview
              </Button>
            </CardActions>
          </Card>
        </>
      )}
    </>
  );
};
export default memo(Portfolio);
