import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'

import TechWaveServices from '../../Services/TechWaveService'

function Highlight() {

    const [highLights, setHighLights] = useState([])

    useEffect(() => {
        TechWaveServices.findHighlights()
            .then((data) => {
                setHighLights(data)
            })
    }, []);

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container  spacing={2}>
                {highLights.map((item) => (
                    <Link to={`events/${item.id}`} key={item.id}>
                    <Grid item xs={12} sm={6} md={4} key={item.id} container justifyContent="center">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.img}
                                    title={item.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    </Link>
                ))}
            </Grid>
        </Box>
    );
}

export default Highlight
