import { configureStore } from '@reduxjs/toolkit';

import {
    educationSlice,
    experienceSlice,
    personalInfoSlice,
    skillsSlice,
} from './slices';

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoSlice.reducer,
        education: educationSlice.reducer,
        skills: skillsSlice.reducer,
        experience: experienceSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
