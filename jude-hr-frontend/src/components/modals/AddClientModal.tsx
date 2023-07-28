import * as React from 'react';
import {FormControl, FormLabel, Input, Modal, ModalDialog, Stack, Typography} from '@mui/joy';

import AddIcon from '@mui/icons-material/Add';
import styles from '../../components/myStyles.module.css'
import { Button } from '@mui/material';

export default function AddClientModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      
      <Button variant='outlined' startIcon={<AddIcon />} className={styles.forAddButton} onClick={() => setOpen(true)} sx={{ backgroundColor: 'rgb(24, 210, 185)', color: 'white'}}>
        Add Client
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Create new Client
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            Fill in the information of the project.
          </Typography>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>User Name</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Client ID</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}