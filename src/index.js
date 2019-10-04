import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import storage from './store';
import { RepositoriesPage } from './pages';

const { store, persistor } = storage();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RepositoriesPage/>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
