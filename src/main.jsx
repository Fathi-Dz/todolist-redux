import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './ToDoSlice';
import App from './App';

const store = configureStore({
  reducer: {
    siswa: toDoReducer 
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/todolist-redux">
      <App />
    </BrowserRouter>
  </Provider>
);