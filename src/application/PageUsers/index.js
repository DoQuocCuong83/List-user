import React, { useCallback, useState } from 'react';
import { PageUsersContainer } from './style';
import Users from './users';
import FormEdit from './form-edit';
import FormCreate from './form-create';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import './store/reducer';

const PageUsers = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  const { t, i18n } = useTranslation();

  const handleShowFormEdit = useCallback((id) => {
    setIsEdit(true);
    setIdEdit(id);
  }, []);

  return (
    <PageUsersContainer>
      <button onClick={() => i18n.changeLanguage('vi')}>VI</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <h1>{t('title')}</h1>
      <div className='button-create'>
        <Button
          onClick={() => setIsCreate(true)}
          variant='contained'
          color='secondary'>
          Create
        </Button>
      </div>
      {isCreate && (
        <FormCreate handleHideFormCreate={() => setIsCreate(false)} />
      )}
      {isEdit && <FormEdit id={idEdit} />}
      <div className='users'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Male</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Users handleShowFormEdit={handleShowFormEdit} />
          </tbody>
          <tfoot>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Male</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </PageUsersContainer>
  );
};

export default PageUsers;
