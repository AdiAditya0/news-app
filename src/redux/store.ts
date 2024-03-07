import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {PERSIST, persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import topNewsReducer from './slices/topNewsSlice';

const rootReducer = combineReducers({reducer: topNewsReducer});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export type IRootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
