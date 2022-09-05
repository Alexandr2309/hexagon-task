import React, { FormEvent } from 'react';
import MyButton from '../UI/MyButton';

export function TranslatorForm(props: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  input: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
}) {
  return (
    <form action="#" name="translator" onSubmit={props.onSubmit}>
      <legend className="translator__title">
        Введите URL-ссылку для преобразования:{' '}
      </legend>
      <div className="translator__field">
        <input type="text" {...props.input} />
      </div>
      <div className="translator__submit">
        <MyButton text="Создать" type="submit" />
      </div>
    </form>
  );
}
