import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IExperience } from '../types';

const initialState: IExperience[] = [
    {
        id: Math.random(),
        company: '',
        position: '',
        description: '',
        period: [null, null],
    },
];

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        updateExperience: (
            state,
            action: PayloadAction<{ currentItem: IExperience; index: number }>
        ) => {
            const { index, currentItem } = action.payload;

            return [
                ...state.slice(0, index),
                currentItem,
                ...state.slice(index + 1),
            ];
        },
        deleteExperience: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        },
        addExperience: (state) => {
            const emptyExperience: IExperience = {
                id: Math.random(),
                company: '',
                position: '',
                description: '',
                period: [null, null],
            };
            return [...state, emptyExperience];
        },
    },
});

export const { updateExperience, addExperience, deleteExperience } =
    experienceSlice.actions;

export default experienceSlice.reducer;
