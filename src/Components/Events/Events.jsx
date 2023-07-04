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

function Events() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        TechWaveServices.getAllEvents()
            .then((data) => {
                setEvents(data)
            })
    }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {events.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id} container justifyContent="center">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to={`events/${item.id}`} style={{ textDecoration: 'none' }}>
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
                                </Link>
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
                ))}
            </Grid>
        </Box>
  )
}

export default Events
