import React from 'react';
import classes from "./ProfileUrls.module.scss";
const ProfileUrls = () => {
    return (
        <div className={classes.container}>
            <div className={classes.block_info}>
                <div>Website</div> <div className={classes.info}>https://example.ru</div>
            </div>
            <div className={classes.block_info}>
                <div>GitHub</div> <div className={classes.info}>walentyao</div>
            </div>
            <div className={classes.block_info}>
                <div>Telegram</div> <div className={classes.info}>@walentyao</div>
            </div>

        </div>
    );
};

export default ProfileUrls;