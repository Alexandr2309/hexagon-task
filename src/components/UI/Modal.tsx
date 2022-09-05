import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { FC } from 'react';
import { IModal } from '../../types/propsTypes';

const Modal: FC<IModal> = ({ open, setOpen, text, additionalAction }) => {
  const handleClose = () => {
    if (additionalAction) additionalAction();

    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Alert severity="success" sx={{fontSize: '22px', display: 'flex', alignItems: 'center'}}>Регистрация завершена</Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontSize: '18px'}}>{text.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Закрыть</Button>
          <Button onClick={additionalAction || handleClose}>
            {text.extra}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
