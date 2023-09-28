import React from 'react'
import Avatar from '@mui/material/Avatar';


function AvatarPic() {

    function stringAvatar(name) {

        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <Avatar
            {...stringAvatar('Admin A')}
            sx={{
                width: 80,
                height: 80,
            }}
        />
    )
}

export default AvatarPic