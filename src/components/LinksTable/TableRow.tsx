import React, { useState } from 'react';
import { API_URL } from '../../data/constants';
import SnackbarUI from '../UI/SnackbarUI';

export function TableRow(props: { link: any }) {
  const [open, setOpen] = useState<boolean>(false);

  const onClickHandler = async () => {
    const key = props.link.short;
    const copyStr = `${API_URL}s/${key}`;

    navigator.clipboard.writeText(copyStr).then(() => {
      setOpen(true);
    });
  };

  return (
    <tr>
      <td>{props.link.target}</td>
      <td onClick={onClickHandler}>{`${API_URL}s/${props.link.short}`}</td>
      <td>{props.link.counter}</td>
      <SnackbarUI {...{ open, setOpen }} />
    </tr>
  );
}
