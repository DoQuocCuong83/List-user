import React, { useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { GET_USERS_LOADING, DELETE_USER_LOADING } from '../store/constants';
import Fade from '@material-ui/core/Fade';

const User = (props) => {
  const user = useSelector((state) => state.users.usersById[props.id]);

  const dispatch = useDispatch();

  if (user) {
    const { handleShowFormEdit } = props;

    const { id, name, male } = user;

    return (
      <Fade in={true}>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{male.toString()}</td>
          <td>
            <ButtonGroup
              variant='contained'
              color='secondary'
              aria-label='contained secondary button group'>
              <Button onClick={handleShowFormEdit}>Edit</Button>
              <Button
                onClick={() =>
                  dispatch({ type: DELETE_USER_LOADING, userId: id })
                }>
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      </Fade>
    );
  } else return null;
};

const Users = (props) => {
  const userIds = useSelector((state) => state.users.userIds);

  const dispatch = useDispatch();

  const { handleShowFormEdit } = props;

  useEffect(() => {
    dispatch({ type: GET_USERS_LOADING });
  }, [dispatch]);
  return (
    <>
      {userIds &&
        userIds.map((userId) => {
          return (
            <User
              key={userId}
              handleShowFormEdit={() => handleShowFormEdit(userId)}
              id={userId}></User>
          );
        })}
    </>
  );
};

export default React.memo(Users);
