import {configureStore} from '@reduxjs/toolkit';
import projectsSlice from './projectList-slice';

const store = configureStore ({
    reducer: {
        projects : projectsSlice.reducer,
    }
});


export default store;