import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { FormEditContainer } from './style';
import Button from '@material-ui/core/Button';
import { EDIT_USER_LOADING } from '../store/constants';
import { useDispatch } from 'react-redux';
import Fade from '@material-ui/core/Fade';

const FormEdit = (props) => {
  const { id } = props;

  const [nameInput, setNameInput] = useState('');
  const [maleInput, setMaleInput] = useState('');

  const nameInputRef = useRef();
  const maleInputRef = useRef();

  const dispatch = useDispatch();

  const handleChangeNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleChangeMaleInput = (event) => {
    setMaleInput(event.target.value);
  };

  const handleSubmit = () => {
    if (nameInput.length === 0) {
      nameInputRef.current.focus();
    } else if (maleInput !== 'true' && maleInput !== 'false') {
      maleInputRef.current.focus();
    } else {
      dispatch({
        type: EDIT_USER_LOADING,
        userId: id,
        newUser: { id: id, name: nameInput, male: maleInput },
      });
    }
  };

  return (
    <Fade in={true}>
      <FormEditContainer>
        <div className='header'>Edit id {id}</div>
        <form noValidate autoComplete='off'>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            inputRef={nameInputRef}
            onChange={handleChangeNameInput}
          />
          <TextField
            id='outlined-basic'
            label='Male'
            variant='outlined'
            inputRef={maleInputRef}
            onChange={handleChangeMaleInput}
          />
          <Button onClick={handleSubmit} variant='contained' color='secondary'>
            Edit
          </Button>
        </form>
      </FormEditContainer>
    </Fade>
  );
};

export default FormEdit;
