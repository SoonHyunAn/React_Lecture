import * as React from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function Buttons() {

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <br />
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="error">Error</Button>
      <br />      <br />
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="error">Error</Button>
      <br /><br />
      <Button variant="outlined" startIcon={<DeleteIcon />}>        Delete      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>        Send      </Button>
    </>
  );
}