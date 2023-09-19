import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Orders',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  }
];
