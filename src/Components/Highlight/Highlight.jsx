import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import TechWaveServices from '../../Services/TechWaveService';

function Highlight() {
    const [highLights, setHighLights] = useState([]);

    useEffect(() => {
        TechWaveServices.findHighlights()
            .then((data) => {
                setHighLights(data);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '40px',
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <Slider {...settings}>
                {highLights.map((item) => (
                    <div
                        key={item.id}
                    >
                        <Card
                            sx={{
                                maxWidth: 345,
                                margin: '0 5px'
                            }}
                        >
                            <Link
                                to={`events/${item.id}`}
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                <CardActionArea>
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
                                            align="justify"
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions>
                                <IconButton
                                    aria-label="add to favorites"
                                >
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="share"
                                >
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </Slider>
        </Box>
    );
}

export default Highlight;
