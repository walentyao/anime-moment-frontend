import React from 'react';
import classes from './Header.module.scss';
import {useLocation, useNavigate} from "react-router-dom";
import SearchTool from "../../UI/SearchTool/SearchTool";
import BlackButton from "../../UI/BlackButton/BlackButton";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../features/auth/authSlice";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const authUser = useSelector((state) => state.auth);

    return (
        <div className={classes.header}>
            <div className={classes.header_logo} onClick={() => navigate("/")}>Anime Moment</div>
            {location.pathname === '/' ? <SearchTool/> : null}
            <div className={classes.header_group_btn}>
                {authUser.status ? [
                        <div key={'username'} className={classes.header_user} onClick={() => navigate("/profile")}>{authUser.username}</div>,
                        <BlackButton onClick={()=> {
                            dispatch(logOut());
                            navigate('/');
                        }} key={'logout'}>Выйти</BlackButton>] :
                    [
                        <BlackButton onClick={() => navigate("/register")} key={'reg'}>Регистрация</BlackButton>,
                        <BlackButton onClick={() => navigate("/login")} key={'log'}>Войти</BlackButton>]
                }
            </div>
        </div>
    );
};

export default Header;