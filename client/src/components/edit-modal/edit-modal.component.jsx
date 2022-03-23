import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './edit-modal.styles.scss'
import axios from 'axios'
import { axiosPatch } from '../utils/axiosUpdate';

const EditModal = ({ handleClose, show, name, placeholder, type, message, token }) => {
    const [value, setValue] = useState("");
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const handleChange = (e) => {

        setValue(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(token, value, type)
        axiosPatch(token, value, type);
    }

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <form onSubmit={onSubmit} className="editModal__form">
                    <label className="editModal__label"> {name} </label>
                    <p>{message}</p>

                    <TextField className="editModal__input" value={value} onChange={handleChange} id="standard-basic" label={name} type={type} name={type} placeholder={placeholder} variant="standard" />
                    <Button type="submit" className="editModal__submitButton" variant="contained">Submit</Button>
                </form>
                <Button className="editModal__button" type="button" onClick={handleClose}>
                    X Cancel
                </Button>
            </div>
        </div>
    );
};

export default EditModal