import React, { FC, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import SnackbarUI from './SnackbarUI';
import { IDialogUI } from '../../types/propsTypes';


const DialogUI: FC<IDialogUI> = ({ shortLink, open, setOpen }) => {
  const [copy, setCopy] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopy = async () => {
    navigator.clipboard.writeText(shortLink).then(() => {
      setCopy(true);
    });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Ваша ссылка сокращена</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {shortLink}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCopy} autoFocus>
            Скопировать
          </Button>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
      <SnackbarUI open={copy} setOpen={setCopy} />
    </>
  );
};

export default DialogUI;
