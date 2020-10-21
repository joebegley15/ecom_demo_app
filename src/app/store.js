import { configureStore } from '@reduxjs/toolkit';
import lightingReducer from '../features/lighting/lightingSlice';

export default configureStore({
  reducer: {
    lighting: lightingReducer
  },
});
