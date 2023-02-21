import React, {useState} from 'react';
import classes from "./ProfileCreateMoment.module.css";
import BlackInput from "../../UI/BlackInput/BlackInput";
import InputFile from "../../UI/InputFile/InputFile";
import BlackButton from "../../UI/BlackButton/BlackButton";

const ProfileCreateMoment = ({upload}) => {

    const [moment, setMoment] = useState({
        title: '',
        image: ''
    });

    return (
        <form className={classes.container}>
            <h3>Add Moment</h3>
            <div className={classes.label_input}>
                <label htmlFor="name_moment">Name moment</label>
                <BlackInput type="text"
                            placeholder="Moment"
                            id="name_moment"
                            value={moment.title}
                            onChange={(event) => {
                                setMoment({...moment, title: event.target.value})
                            }}
                />
            </div>
            <InputFile setFile={(image) => {
                setMoment({...moment, image: image})
            }}/>
            <BlackButton onClick={(event) => {
                event.preventDefault();
                upload(moment);
            }}>Добавить</BlackButton>
        </form>
    );
};

export default ProfileCreateMoment;