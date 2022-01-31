import React from 'react';
import { Typography, Card as MuiCard, CardMedia, CardContent, Button, CardActions } from "@mui/material";
import noimage from "~/assets/static/img/noimage.png";

const Card = ({ title, content, img, actions }) => {

    return (
        <MuiCard sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={img == undefined ? noimage : img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                {actions}
            </CardActions>
        </MuiCard>
    )
}
export default Card