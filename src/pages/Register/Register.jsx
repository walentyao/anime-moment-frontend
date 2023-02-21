import React, {useState} from 'react';
import BlackInput from "../../UI/BlackInput/BlackInput";
import BlackButton from "../../UI/BlackButton/BlackButton";
import {Link, useNavigate} from "react-router-dom";
import classes from './Register.module.scss';
import {useDispatch} from "react-redux";
import {registerUser} from "../../features/auth/authSlice";
import InputFile from "../../UI/InputFile/InputFile";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        avatar:null
    });
    const handleSubmit = () => {
        try {
            dispatch(registerUser(user));
            setUser({
                username: '',
                password: '',
                email: '',
                avatar:null
            });
            navigate('/');
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={classes.container}>
            <form onSubmit={(event) => event.preventDefault()} className={classes.container_form}>
                <label>Регистрация</label>
                <div className={classes.label_input}>
                    <label htmlFor="username">Username</label>
                    <BlackInput type="text"
                                className={classes.form_input}
                                placeholder="Username"
                                id="username"
                                value={user.username}
                                onChange={(e) => {
                                    setUser({...user, username: e.target.value})
                                }}
                    />
                </div>
                <div className={classes.label_input}>
                    <label htmlFor="password">Password</label>
                    <BlackInput type="password"
                                className={classes.form_input}
                                placeholder="password"
                                id="password"
                                value={user.password}
                                onChange={(e) => {
                                    setUser({...user, password: e.target.value})
                                }}
                    />
                </div>
                <div className={classes.label_input}>
                    <label htmlFor="email">Email</label>
                    <BlackInput type="email"
                                className={classes.form_input}
                                placeholder="example@mail.ru"
                                id="email"
                                value={user.email}
                                onChange={(e) => {
                                    setUser({...user, email: e.target.value})
                                }}
                    />
                </div>
                <InputFile setFile={(image)=>{setUser({...user,avatar: image})}}/>
                <div className={classes.btn_group}>
                    <BlackButton onClick={handleSubmit}>Зарегистрироваться</BlackButton>
                    <Link to={"/login"} className={classes.btn_group_link}>Есть аккаунт?</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;