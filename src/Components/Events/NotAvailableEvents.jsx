import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'
import TechWaveServices from '../../Services/TechWaveService'

function NotAvailableEvents() {

    const [notAvailableEvents, setNotAvailableEvents] = useState([])

    useEffect(() => {
        TechWaveServices.notAvailableEvents()
            .then((data) => {
                setNotAvailableEvents(data);
            })
    }, []);

    return (
        <Box sx={{
            flexGrow: 1,
            marginTop: 2,
            marginBottom: 5,
        }}>
            <Grid container spacing={2}>
                {notAvailableEvents.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id} container justifyContent="center">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to={`/events/${item.id}`} style={{ textDecoration: 'none' }}>
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
                                            {item.eventDate}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default NotAvailableEvents
