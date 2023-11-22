import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TechWaveServices from '../../Services/TechWaveService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function AdminDashboard() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    TechWaveServices.getAllEvents()
      .then((data) => {
        setEvents(data)
      })
  }, []);

  const handleDelete = (eventId) => {
    // Add the logic to delete the event with the specified eventId
    // You might want to show a confirmation dialog before deleting
    console.log(`Delete event with ID ${eventId}`);
  };

  return (
    <List
      sx={{
        width: '100%',
      }}
    >
      {events.map((i) => {
        return (
          <ListItem
            key={i}
            secondaryAction={
              <>
                <IconButton
                  aria-label="edit"
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(i.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
            disablePadding
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
          </ListItem>
        );
      })}
    </List>
  )
}

export default AdminDashboard
