import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import TechWaveServices from '../../Services/TechWaveService'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import TechwaveUserServices from '../../Services/TechWaveUserService';


function EventInfo() {

    const [eventId, setEventId] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [joined, setJoined] = useState(false);
    const { id } = useParams();
    const userToken = localStorage.getItem("auth_token");
    const role = localStorage.getItem('auth_role');
    const navigate = useNavigate()

    useEffect(() => {
        const joined = localStorage.getItem(`joined_${id}`);
        setJoined(joined === 'false')

        TechWaveServices.eventById(id)
            .then((data) => {
                setEventId(data);
            })
    }, [id])

    const handleJoin = () => {
        if (userToken) {
            if (joined) {
                TechwaveUserServices.joinEvent(id)
                    .then(() => {
                        setEventId((prevState) => ({
                            ...prevState,
                            registersCount: prevState.registersCount - 1,
                        }));
                        localStorage.removeItem(`joined_${id}`);
                        setJoined(false);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                TechwaveUserServices.joinEvent(id)
                    .then((data) => {
                        setEventId((prevState) => ({
                            ...prevState,
                            registersCount: prevState.registersCount + 1,
                        }));
                        console.log(data);
                        localStorage.setItem(`joined_${id}`, 'true');
                        setJoined(true);
                    })
                    .catch((error) => {
                        console.log(error)
                    })

                setShowAlert(true);

                setTimeout(() => {
                    setShowAlert(false);
                    // document.location.reload();
                }, 3000);
            }
        }
        else {
            navigate('/login')
        }
    }

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    marginTop: 2,
                    marginBottom: 5,
                }}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={eventId.id}
                        container
                        justifyContent="center"
                    >
                        <Card
                            sx={{
                                maxWidth: 345
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    sx={{
                                        height: 140
                                    }}
                                    image={eventId.img}
                                    title={eventId.name}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {eventId.name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                    >
                                        {eventId.organizer}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {eventId.eventDate} {eventId.eventHour}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom="true"
                                    >
                                        {eventId.location}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {eventId.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {role === 'USER' && (
                                <Box sx={{ marginLeft: 'auto' }}>
                                    <Button
                                        className="joinBtn"
                                        variant="contained"
                                        aria-label="join"
                                        startIcon={joined ? <CheckCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                                        onClick={handleJoin}
                                        sx={{
                                            backgroundColor: joined ? 'green' : '',
                                        }}
                                    >
                                        {joined ? 'Joined' : 'Join'} {eventId.registersCount}/{eventId.maxParticipants}
                                    </Button>
                                </Box>
                                )} 
                                {role !== 'ADMIN' && !role && (
                                    <Box sx={{ marginLeft: 'auto' }}>
                                        <Link to="/login" style={{ textDecoration: 'none' }}>
                                            <Button
                                                className="joinBtn"
                                                variant="contained"
                                                aria-label="join"
                                                startIcon={<AddCircleOutlineIcon />}
                                            >
                                                Join {eventId.registersCount}/{eventId.maxParticipants}
                                            </Button>
                                        </Link>
                                    </Box>
                                )}
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>
            </Box >

            <Stack
                sx={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 16,
                }}
                spacing={2}
            >
                {showAlert && (
                    <Alert
                        severity={!joined ? 'info' : 'success'}
                        sx={{ width: '100%' }}
                    >
                        {!joined ? 'Event declined' : 'Event joined!'}
                    </Alert>
                )}
            </Stack>
        </>
    )
}



export default EventInfo
