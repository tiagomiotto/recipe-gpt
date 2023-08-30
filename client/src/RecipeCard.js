import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function RecipeCard({ recipe, handleClose }) {
    console.log(recipe);
    return (
        <Card style={{
            position: "absolute", top: "10%", zIndex: '2'
        }} sx={{ maxWidth: "80%" }} display="flex" >
            <CardContent>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                <Typography variant="body1"
                    style={{ whiteSpace: 'pre-line' }} display="block" xcolor="text.secondary">
                    {recipe}
                </Typography>
            </CardContent>
        </Card >
    );
}