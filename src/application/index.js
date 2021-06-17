import React, { useEffect, useState } from "react";
import { PageUsersContainer } from "./style";
import User from "./user";
import FormEdit from "./form-edit";
import FormCreate from "./form-create";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getUsers } from "../store/actions";

const PageUsers = (props) => {
    const { getUsers } = props;

    const { userIds } = props;

    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(null);

    const handleShowFormEdit = (id) => {
        setIsEdit(true);
        setIdEdit(id);
    };

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <PageUsersContainer>
            <h1>List User</h1>
            <div className="button-create">
                <Button
                    onClick={() => setIsCreate(true)}
                    variant="contained"
                    color="secondary"
                >
                    Create
                </Button>
            </div>
            {isCreate && (
                <FormCreate handleHideFormCreate={() => setIsCreate(false)} />
            )}
            {isEdit && <FormEdit id={idEdit} />}
            <div className="users">
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
                        {userIds &&
                            userIds.map((userId) => {
                                return (
                                    <User
                                        key={userId}
                                        handleShowFormEdit={() =>
                                            handleShowFormEdit(userId)
                                        }
                                        id={userId}
                                    />
                                );
                            })}
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

const mapStateToProps = (state) => ({
    userIds: state.userIds,
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => getUsers(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(PageUsers));
