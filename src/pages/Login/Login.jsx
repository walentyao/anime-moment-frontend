import React, {useState} from 'react';
import classes from './Login.module.scss';
import BlackInput from "../../UI/BlackInput/BlackInput";
import BlackButton from "../../UI/BlackButton/BlackButton";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../../features/auth/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    function handlerSubmitLogin(event) {
        event.preventDefault();
        try {
            dispatch(loginUser(user));
            setUser({
                username: '',
                password: ''
            })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={classes.container}>
            <form onSubmit={(event) => event.preventDefault()} className={classes.container_form}>
                <label>Авторизация</label>
                <div className={classes.label_input}>
                    <label htmlFor="username">Username</label>
                    <BlackInput type="text"
                                value={user.username}
                                onChange={(event) => {
                                    setUser({...user, username: event.target.value})
                                }}
                                className={classes.form_input}
                                placeholder="input username"
                                id="username"/>
                </div>

                <div className={classes.label_input}>
                    <label htmlFor="password">Password</label>
                    <BlackInput type="password"
                                value={user.password}
                                onChange={(event) => {
                                    setUser({...user, password: event.target.value})
                                }}
                                className={classes.form_input}
                                placeholder="input password"
                                id="password"/>
                </div>

                <div className={classes.btn_group}>
                    <BlackButton onClick={handlerSubmitLogin}>Войти</BlackButton>
                    <Link to={"/register"}
                          className={classes.btn_group_link}>Нет аккаунта?</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;