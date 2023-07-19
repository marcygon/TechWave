import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function AvatarPic() {

    function stringAvatar(name) {

        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <Stack direction="row" spacing={2}>
            <Avatar {...stringAvatar('Admin A')} />
        </Stack>
    )
}

export default AvatarPic