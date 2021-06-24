import { createAction } from '@reduxjs/toolkit';
import {
  getUsersRequest,
  deleteUserRequest,
  editUserRequest,
  createUserRequest,
} from '../../../api/requests';
import * as constants from './constants';
import { call, put, takeLatest } from '@redux-saga/core/effects';

const getUsersAction = createAction(constants.GET_USERS);
const editUserAction = createAction(constants.EDIT_USER);
const deleteUserAction = createAction(constants.DELETE_USER);

function* getUsers() {
  const users = yield call(getUsersRequest);
  yield put(getUsersAction(users));
}

export function* getUsersWatcher() {
  yield takeLatest(constants.GET_USERS_LOADING, getUsers);
}

function* deleteUser(action) {
  const { userId } = action;
  const response = yield call(deleteUserRequest, userId);
  if (response.status === 'success') yield put(deleteUserAction(userId));
}

export function* deleteUserWatcher() {
  yield takeLatest(constants.DELETE_USER_LOADING, deleteUser);
}

function* editUser(action) {
  const { userId, newUser } = action;
  const response = yield call(editUserRequest, userId, newUser);
  if (response.status === 'success')
    yield put(editUserAction({ userId: userId, newUser: newUser }));
}

export function* editUserWatcher() {
  yield takeLatest(constants.EDIT_USER_LOADING, editUser);
}

function* createUser(action) {
  const { newUser } = action;
  const response = yield call(createUserRequest, newUser);
  if (response.status === 'success')
    yield put({ type: constants.GET_USERS_LOADING });
}

export function* createUserWatcher() {
  yield takeLatest(constants.CREATE_USER_LOADING, createUser);
}
