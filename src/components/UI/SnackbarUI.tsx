import React, { FC, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { setState } from '../../types/propsTypes';

const SnackbarUI: FC<{ open: boolean; setOpen: setState<boolean> }> = ({
  open,
  setOpen,
}) => {
  const vertical = 'top',
    horizontal = 'center';

  const handleClose = () => setOpen(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (open === true) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 2500);
    }

    return function () {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <Alert severity="success">Ссылка успешно скопирована!</Alert>
    </Snackbar>
  );
};

export default SnackbarUI;
