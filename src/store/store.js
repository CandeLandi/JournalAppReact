import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'; // Importa el reducer predeterminado

export const store = configureStore({
  reducer: {
    auth: authReducer, // Usa el reducer predeterminado
  },
});
