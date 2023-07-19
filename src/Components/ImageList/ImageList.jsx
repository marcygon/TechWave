import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import TechWaveServices from '../../Services/TechWaveService';

function ImageList() {
    const [events, setEvents] = useState([]);

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
            <ImageList sx={{ width: 382, height: 450 }} cols={2} rowHeight={164}>
                {events.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default ImageList;