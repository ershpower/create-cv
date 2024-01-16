import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

import { EducationTypes } from '../components/Education/constants';
import { IEducation } from '../types';

const initialState: IEducation = {
    dateEnd: null,
    degree: EducationTypes.bachelor,
    institution: '',
};
export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        setDateEnd: (state, action: PayloadAction<Dayjs>) => {
            state.dateEnd = action.payload;
        },
        setDegree: (state, action: PayloadAction<EducationTypes>) => {
            state.degree = action.payload;
        },
        setInstitution: (state, action: PayloadAction<string>) => {
            state.institution = action.payload;
        },
    },
});

export const { setInstitution, setDegree, setDateEnd } = educationSlice.actions;

export default educationSlice.reducer;
