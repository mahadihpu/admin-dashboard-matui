import { Box } from '@mui/system';
import React from 'react';
import SingleUser from './SingleUser';

import './Widget.css';


const newUsers = [
   { name: 'Angela yu', title: 'Software Engineer', image: 'https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk.jpg' },
   { name: 'Winry Rockbell', title: 'Mechanical Engineer', image: 'https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
   { name: 'Roy Mustang', title: 'Police Officer', image: 'https://www.anime-planet.com/images/characters/thumbs/2014.jpg?t=1599831711' },
   { name: 'Edward Elric', title: 'Alchemist', image: 'https://cdn.myanimelist.net/images/characters/9/72533.jpg' },
   { name: 'Alphonse Elric', title: 'Alchemist', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
   { name: 'Gary Salmok', title: 'Software Engineer', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },

];

const WidgetSmall = () => {
   return (
      <Box className="widget-small">
         <br />
         {
            newUsers.map(user => <SingleUser name={user.name} title={user.title} image={user.image} />)
         }
      </Box>
   );
};

export default WidgetSmall;