import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { FormEditContainer } from "./style";
import Button from "@material-ui/core/Button";
import { editUser } from "../../store/actions";
import { connect } from "react-redux";
import Fade from "@material-ui/core/Fade";

const FormEdit = (props) => {
    const { editUser } = props;

    const { id } = props;

    const [nameInput, setNameInput] = useState("");
    const [maleInput, setMaleInput] = useState("");

    const nameInputRef = useRef();
    const maleInputRef = useRef();

    const handleChangeNameInput = (event) => {
        setNameInput(event.target.value);
    };

    const handleChangeMaleInput = (event) => {
        setMaleInput(event.target.value);
    };

    const handleSubmit = () => {
        if (nameInput.length === 0) {
            nameInputRef.current.focus();
        } else if (maleInput !== "true" && maleInput !== "false") {
            maleInputRef.current.focus();
        } else {
            editUser(id, { id: id, name: nameInput, male: maleInput });
        }
    };

    return (
        <Fade in={true}>
            <FormEditContainer>
                <div className="header">Edit id {id}</div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        inputRef={nameInputRef}
                        onChange={handleChangeNameInput}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Male"
                        variant="outlined"
                        inputRef={maleInputRef}
                        onChange={handleChangeMaleInput}
                    />
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="secondary"
                    >
                        Edit
                    </Button>
                </form>
            </FormEditContainer>
        </Fade>
    );
};

const mapDispatchToProps = (dispatch) => ({
    editUser: (userId, newUser) => editUser(userId, newUser, dispatch),
});

export default connect(null, mapDispatchToProps)(React.memo(FormEdit));
