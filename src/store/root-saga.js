import { all } from '@redux-saga/core/effects';
import {
  getUsersWatcher,
  deleteUserWatcher,
  editUserWatcher,
  createUserWatcher,
} from '../application/PageUsers/store/actions';

const rootSaga = function* () {
  yield all([
    getUsersWatcher(),
    deleteUserWatcher(),
    editUserWatcher(),
    createUserWatcher(),
  ]);
};

export default rootSaga;
