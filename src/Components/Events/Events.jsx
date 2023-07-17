import React, { useState } from 'react'
import AllEvents from './AllEvents/AllEvents';
import AvailableEvents from './AvailableEvents/AvailableEvents';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotAvailableEvents from './NotAvailableEvents/NotAvailableEvents';

function Events() {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Available
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AvailableEvents />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Not Available
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ filter: 'grayscale(100%)' }}>
                    <NotAvailableEvents/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        All Events
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AllEvents />
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Events