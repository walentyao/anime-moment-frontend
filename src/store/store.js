import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import momentSlice from "../features/moment/momentSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        moment:momentSlice
    },
})