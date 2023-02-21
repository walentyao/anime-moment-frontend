import React from 'react';
import classes from "./Moment.module.css";

const Moment = ({title, user, image, userAvatar}) => {

    return (
        <div className={classes.item}>
            <div className={classes.card}>
                <img src={'http://localhost:4444/' + image} alt="card" className={classes.card_image}/>
                <div className={classes.card_moment_info}>
                    <img src={'http://localhost:4444/' + userAvatar} alt="avatar"
                         className={classes.card_image_avatar}/>
                    <div className={classes.moment_info_text}>
                    <span>
                        {user}
                    </span>
                        <span>
                        {title}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moment;