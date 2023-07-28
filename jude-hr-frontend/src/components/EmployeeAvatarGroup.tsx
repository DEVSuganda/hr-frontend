import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { alignProperty } from '@mui/material/styles/cssUtils';
import styles from '../components/myStyles.module.css'
import p1 from '../assets/EmployeeImages/puff.jpg'
import p2 from '../assets/EmployeeImages/client.jpg'
import p3 from '../assets/EmployeeImages/puff.png'
import p4 from '../assets/EmployeeImages/kengo.jpg'


export default function EmployeeAvatarGroup() {
  return (
    <AvatarGroup total={10} sx={{ height: 20, alignItems: 'baseline', justifyContent: 'left' }}>
      <Avatar src={p1} sx={{ width: 20, height: 20}} />
      <Avatar src={p2} sx={{ width: 20, height: 20 }} />
      <Avatar src={p3} sx={{ width: 20, height: 20 }} />
      <Avatar src={p4} sx={{ width: 20, height: 20 }} />
    </AvatarGroup>
  ); 
}