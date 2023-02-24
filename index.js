import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ListProductContextProvider } from './Components/Context/ContextListProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ListProductContextProvider>
        <App />
    </ListProductContextProvider>
    
);

