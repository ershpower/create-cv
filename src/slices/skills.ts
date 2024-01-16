import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISkils } from '../types';

const initialState: ISkils = {
    skills: [],
};
export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setSkills: (state, action: PayloadAction<string[]>) => {
            state.skills = action.payload;
        },
    },
});

export const { setSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
