import './App.css';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkAuth} from "./features/auth/authSlice";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import {getMoments} from "./features/moment/momentSlice";


function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkAuth());
        dispatch(getMoments())
    },[dispatch]);

    return (<div>
        <Header/>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    </div>);
}

export default App;
