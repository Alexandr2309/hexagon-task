import React, { FC, FormEvent, useState } from 'react';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { getCookie, validateUserAndLink } from '../../utils/helperFuns';
import { squeeze } from '../../api/request';
import { useAppDispatch } from '../../app/hooks';
import DialogUI from '../UI/DialogUI';
import { TranslatorForm } from './TranslatorForm';
import { IValidateUserAndLink } from '../../types/commonTypes';
import { API_URL } from '../../data/constants';

const LinkTranslator: FC = () => {
  const [shortLink, setShortLink] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const input = useInput();
  const na = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateUserAndLink(na, input.value) === false) return;

    const response = await squeeze(input.value, dispatch);

    setShortLink(`${API_URL}s/${response}`);
    setOpenModal(true);
  };

  return (
    <div className="main__translator translator">
      <div className="translator__wrapper form-wrap">
        <TranslatorForm onSubmit={onSubmitHandler} input={input} />
        <DialogUI
          shortLink={shortLink}
          setOpen={setOpenModal}
          open={openModal}
        />
      </div>
    </div>
  );
};

export default LinkTranslator;
