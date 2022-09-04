import React, { FC, FormEvent, FormEventHandler } from 'react';
import useInput from '../../hooks/useInput';
import MyButton from '../UI/MyButton';

function TranslatorForm(props: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  input: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
}) {
  return (
    <form action='#' name='translator' onSubmit={props.onSubmit}>
      <legend className='translator__title'>
        Введите URL-ссылку для преобразования:{' '}
      </legend>
      <div className='translator__field'>
        <input type='text' {...props.input} />
      </div>
      <div className='translator__submit'>
        <MyButton text='Создать' type='submit' />
      </div>
    </form>
  );
}

const LinkTranslator: FC = () => {
  const input = useInput();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='main__translator translator'>
      <div className='translator__wrapper form-wrap'>
        <TranslatorForm onSubmit={onSubmitHandler} input={input} />
      </div>
    </div>
  );
};

export default LinkTranslator;
