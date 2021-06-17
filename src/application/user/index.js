import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions";
import Fade from "@material-ui/core/Fade";

const User = (props) => {
    if (props.user) {
        const { handleShowFormEdit, deleteUser } = props;

        const { id, name, male } = props.user;

        return (
            <Fade in={true}>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{male.toString()}</td>
                    <td>
                        <ButtonGroup
                            variant="contained"
                            color="secondary"
                            aria-label="contained secondary button group"
                        >
                            <Button onClick={handleShowFormEdit}>Edit</Button>
                            <Button onClick={() => deleteUser(id)}>
                                Delete
                            </Button>
                        </ButtonGroup>
                    </td>
                </tr>
            </Fade>
        );
    } else return null;
};

const mapStateToProps = (state, { id }) => {
    return {
        user: state.usersById[id],
    };
};
const mapDispatchToProps = (dispatch) => ({
    deleteUser: (userId) => deleteUser(userId, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(User));
