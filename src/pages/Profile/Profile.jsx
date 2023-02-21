import React, {useState} from 'react';
import classes from './Profile.module.scss';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileUrls from "../../components/ProfileUrls/ProfileUrls";
import {useDispatch, useSelector} from "react-redux";
import BlackButton from "../../UI/BlackButton/BlackButton";
import Popup from "../../components/Popup/Popup";
import ProfileCreateMoment from "../../components/ProfileCreateMoment/ProfileCreateMoment";
import {createMoment} from "../../features/moment/momentSlice";

const Profile = () => {

    const user = useSelector((state)=>state.auth);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className={classes.container_profile}>
            <div className={classes.left_profile}>
                <div className={classes.avatar}>
                    <img src={'http://localhost:4444/'+user.avatarUrl} alt="avatar"/>
                    <div>
                        {user.username}
                    </div>
                </div>
                <ProfileUrls/>
            </div>
            <div className={classes.right_profile}>
                <ProfileInfo userInfo={user}/>
                <div className={classes.container_btn}>
                    Add your Moment
                    <BlackButton onClick={()=>setIsOpen(true)}>Create Moment</BlackButton>
                </div>
            </div>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
                <ProfileCreateMoment upload={(moment)=> {
                    dispatch(createMoment(moment));
                    setIsOpen(false);
                }}/>
            </Popup>
        </div>
    );
};

export default Profile;