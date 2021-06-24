import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { FormCreateContainer } from './style';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { CREATE_USER_LOADING } from '../store/constants';
import { useDispatch } from 'react-redux';
import Fade from '@material-ui/core/Fade';

const FormCreate = (props) => {
  const { handleHideFormCreate } = props;

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
        type: CREATE_USER_LOADING,
        newUser: { name: nameInput, male: maleInput },
      });
    }
  };

  return (
    <FormCreateContainer>
      <Fade in={true}>
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
          <ButtonGroup
            variant='contained'
            color='secondary'
            aria-label='contained secondary button group'>
            <Button onClick={handleSubmit}>Add</Button>
            <Button onClick={handleHideFormCreate}>Close</Button>
          </ButtonGroup>
        </form>
      </Fade>
    </FormCreateContainer>
  );
};

export default FormCreate;
