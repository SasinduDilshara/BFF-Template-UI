import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function OrderSelect({handleChange}) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          onChange={handleChange}
          autoWidth
          label="status"
        >
          <MenuItem value="PENDING">
            <em>status</em>
          </MenuItem>
          <MenuItem value="PENDING">PENDING</MenuItem>
          <MenuItem value="SHIPPED">SHIPPED</MenuItem>
          <MenuItem value="DELIVERED">DELIVERED</MenuItem>
          <MenuItem value="CANCELED">CANCELED</MenuItem>
          <MenuItem value="RETURNED">RETURNED</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
