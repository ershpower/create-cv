import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

import { IPersonalInfo } from '../types';

const initialState: IPersonalInfo = {
    address: '',
    fio: '',
    birthday: undefined,
    phone: '',
    avatar: '',
};
export const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        setFio: (state, action: PayloadAction<string>) => {
            state.fio = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        setBirthday: (state, action: PayloadAction<Dayjs>) => {
            state.birthday = action.payload;
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
    },
});

export const { setBirthday, setAddress, setAvatar, setFio, setPhone } =
    personalInfoSlice.actions;

export default personalInfoSlice.reducer;
