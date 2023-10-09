import React, { useEffect, useState } from 'react'
import { Box, Divider, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import TechwaveUserServices from '../../Services/TechWaveUserService';


function JoinedEvents() {

    const [joinedEvents, setJoinedEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        TechwaveUserServices.joinedEvents()
            .then((data) => {
                setJoinedEvents(data)
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <Box
            sx={{
                flexGrow: 1,
                marginTop: 2,
                marginBottom: 1,
                marginLeft: 2,
                marginRight: 2,
            }}
        >
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                    marginTop: 1,
                }}
            >
                Joined Events
            </Typography>
            <Divider />
            {isLoading ? (
                <Typography variant="body2">
                    Loading...
                </Typography>
            ) : error ? (
                <Typography variant="body2">
                    Error fetching joined events: {error.message}
                </Typography>
            ) : (
                <Grid
                    container
                    spacing={2}
                >
                    {joinedEvents.length === 0 ? (
                        <Typography variant="body2">No joined events available.</Typography>
                    ) : (
                        joinedEvents.map((item) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={item.id}
                                container
                                justifyContent="center"
                            >
                                <Card
                                    sx={{
                                        maxWidth: 345
                                    }}
                                >
                                    <CardActionArea>
                                        <Link to={`/events/${item.id}`} style={{ textDecoration: 'none' }}>
                                            <CardMedia
                                                sx={{
                                                    height: 140
                                                }}
                                                image={item.img}
                                                title={item.name}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {item.eventDate}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            )}
        </Box>
    );
}

export default JoinedEvents
