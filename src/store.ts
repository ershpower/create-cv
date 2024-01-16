import { configureStore } from '@reduxjs/toolkit';

import { educationSlice, personalInfoSlice, skillsSlice } from './slices';

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoSlice.reducer,
        education: educationSlice.reducer,
        skills: skillsSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
