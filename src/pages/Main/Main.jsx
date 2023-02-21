import React from 'react';
import MomentsContainer from "../../components/MomentsContainer/MomentsContainer";
import {useSelector} from "react-redux";

const Main = () => {

    const moments = useSelector((state)=>state.moment.moments);

    return (
        <div>
            <MomentsContainer moments={moments}/>
        </div>
    );
};

export default Main;