import React from 'react';
import classes from './ProfileInfo.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton";

const ProfileInfo = ({userInfo}) => {
    return (
        <div className={classes.container}>
            <div className={classes.block_info}>
                <div>Username</div> <div className={classes.info}>{userInfo.username}</div>
            </div>
            <div className={classes.block_info}>
                <div>Email</div> <div className={classes.info}>{userInfo.email}</div>
            </div>
            <div className={classes.btn}><BlackButton>Edit</BlackButton></div>
        </div>
    );
};

export default ProfileInfo;