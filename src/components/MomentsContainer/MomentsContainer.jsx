import React from 'react';
import Moment from "../Moment/Moment";
import classes from './MomentsContainer.module.scss';

const MomentsContainer = ({moments}) => {
    return (
        <div className={classes.masonry}>
            {moments.map((element)=>{
              return <Moment key={element._id}
                             image={element.imageUrl}
                             title={element.title}
                             user={element.user.username}
                             userAvatar={element.user.avatarUrl}
              />
            })}
        </div>
    );
};

export default MomentsContainer;