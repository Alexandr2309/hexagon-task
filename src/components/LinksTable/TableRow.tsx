import React from 'react';

export function TableRow(props: { link: any }) {
  const onClickHandler = async () => {
    const key = props.link.short;
    const copyStr = `${process.env.REACT_APP_API_URL}s/${key}`;

    const result = await window.navigator.clipboard.writeText(copyStr);
    window.navigator.clipboard.readText().then((res) => {
      console.log(res);
    });
  };

  return (
    <tr>
      <td>{props.link.target}</td>
      <td onClick={onClickHandler}>{props.link.short}</td>
      <td>{props.link.counter}</td>
    </tr>
  );
}
