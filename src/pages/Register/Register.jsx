import React, {useState} from 'react';
import BlackInput from "../../UI/BlackInput/BlackInput";
import BlackButton from "../../UI/BlackButton/BlackButton";
import {Link} from "react-router-dom";
import classes from './Register.module.scss';
import {useDispatch} from "react-redux";
import {registerUser} from "../../features/auth/authSlice";

const Register = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        fullName: ''
    });
    const handleSubmit = () => {
        try {
            dispatch(registerUser(user));
            setUser({
                username: '',
                password: '',
                email: '',
                fullName: ''
            });
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
                    <label htmlFor="fullname">Full name</label>
                    <BlackInput type="text"
                                className={classes.form_input}
                                placeholder="fullname"
                                id="fullname"
                                value={user.fullName}
                                onChange={(e) => {
                                    setUser({...user, fullName: e.target.value})
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
                <div className={classes.btn_group}>
                    <BlackButton onClick={handleSubmit}>Зарегистрироваться</BlackButton>
                    <Link to={"/login"} className={classes.btn_group_link}>Есть аккаунт?</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;