import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
import TechWaveServices from '../../Services/TechWaveService'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';


function EventInfo() {


    const [eventId, setEventId] = useState([])
    const { id } = useParams()
    useEffect(() => {
        TechWaveServices.eventById(id)
            .then((data) => setEventId(data))
    }, [])

    return (
        <Box sx={{
            flexGrow: 1,
            marginTop: 2,
            marginBottom: 5,
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} key={eventId.id} container justifyContent="center">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={eventId.img}
                                title={eventId.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {eventId.name}
                                </Typography>
                                <Typography variant="h6">
                                    {eventId.organizer}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {eventId.eventDate} {eventId.eventHour}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom="true">
                                    {eventId.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {eventId.description}
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
                            <Box sx={{ marginLeft: 'auto' }}>
                                <Button
                                    variant="contained"
                                    aria-label="join"
                                    startIcon={<AddCircleOutlineIcon />}
                                >
                                    Join {eventId.registersCount}/{eventId.maxParticipants}
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}



export default EventInfo
