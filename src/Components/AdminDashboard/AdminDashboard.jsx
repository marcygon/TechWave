import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import TechWaveServices from '../../Services/TechWaveService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom'

function AdminDashboard() {

  const [events, setEvents] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    TechWaveServices.getAllEvents()
      .then((data) => {
        setEvents(data)
      })
  }, []);

  const handleDelete = (eventId) => {
    console.log(`Delete event with ID ${eventId}`);
  };

  return (
    <Box>
      <Typography
        sx={{
          margin: '10px 0px',
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        <IconButton
          aria-label="add">
          <AddIcon />
        </IconButton>
      </Typography>

      <List>
        {events.map((i) => {
          return (
            <ListItem
              disablePadding
              key={i.id}
              sx={{ width: '100%' }}
            >
              <Link
                to={`/events/${i.id}`}
                style={{ 
                  textDecoration: 'none', 
                  color: theme.palette.text.primary, 
                  width: '100%' }}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={i.name}
                      src={i.img}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={i.id}
                    primary={i.name}
                  />
                </ListItemButton>
              </Link>
              <IconButton aria-label="edit">
                <ModeEditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(i.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  )
}

export default AdminDashboard
