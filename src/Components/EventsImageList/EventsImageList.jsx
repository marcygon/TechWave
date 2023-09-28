import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import TechWaveServices from '../../Services/TechWaveService';
import { useMediaQuery } from '@mui/material';

function EventsImageList() {
    const [events, setEvents] = useState([]);
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');

    useEffect(() => {
        TechWaveServices.getAllEvents().then((data) => {
            setEvents(data);
        });
    }, []);

    return (
        <Box sx={{
            marginLeft: 0.5,
            marginRight: 0.5,
        }}>
            <ImageList
                sx={{ width: '100%' }}
                cols={isLargeScreen ? 4 : 2}
                rowHeight={isLargeScreen ? 300 : 164}
            >
                {events.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=${isLargeScreen ? 300 : 164}&h=${isLargeScreen ? 300 : 164}&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=${isLargeScreen ? 300 : 164}&h=${isLargeScreen ? 300 : 164}&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default EventsImageList