import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    isLoading: false,
    status: false,
    moments: []
};

export const getMoments = createAsyncThunk('moment/getMoments', async () => {
    try {
        const {data} = await axios.get('http://localhost:4444/moment');
        return data;
    } catch (e) {

    }
});

export const createMoment = createAsyncThunk('moment/createMoment', async ({title, image}) => {
    try {
        const token = window.localStorage.getItem('token');
        const {data} = await axios.post('http://localhost:4444/moment/', {
            title,
            picture: image
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        });
        return data;
    } catch (e) {

    }
});

export const momentSlice = createSlice({
    name: 'moment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMoments.fulfilled, (state, action) => {
            state.moments = action.payload;
            state.isLoading = false;
            state.status = true;
        });
        builder.addCase(createMoment.fulfilled, (state, action) => {
            state.moments = [...state.moments, action.payload];
            state.status = true;
        });
    }
});

export default momentSlice.reducer;
