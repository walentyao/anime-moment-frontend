import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    avatarUrl: null,
    fullName: null,
    username: null,
    email: null,
    isLoading: false,
    status: false,
    token: null,
};

export const registerUser = createAsyncThunk('auth/registerUser', async ({username, password, fullName, email}) => {
    try {
        const {data} = await axios.post('http://localhost:4444/auth/register/', {
            username,
            password,
            fullName,
            email
        });
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (e) {
        console.log(e)
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({username, password}) => {
    try {
        const {data} = await axios.post('http://localhost:4444/auth/login/', {
            username,
            password,
        });
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (e) {
        console.log(e)
    }
});

export const checkAuth = createAsyncThunk('auth/me', async () => {

    try {

        const token = window.localStorage.getItem('token');

        const {data} = await axios.get('http://localhost:4444/auth/me/', {headers: {Authorization: `Bearer ${token}`}}
        );
        console.log(data)
        return {...data, token};
    } catch (e) {

    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            window.localStorage.removeItem('token');
            state.avatarUrl = null;
            state.token = null;
            state.username = null;
            state.fullName = null;
            state.email = null;
            state.isLoading = false;
            state.status = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.avatarUrl = action.payload.avatarUrl;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.isLoading = false;
            state.status = true;
        });
        builder.addCase(registerUser.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.avatarUrl = action.payload.avatarUrl;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.isLoading = false;
            state.status = true;
        });
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.avatarUrl = action.payload.avatarUrl;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.isLoading = false;
            state.status = true;
        });
    }
});

// Action creators are generated for each case reducer function

export default authSlice.reducer;
export const {logOut} = authSlice.actions;