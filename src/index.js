import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const root = ReactDOM.createRoot(document.getElementById('root'));


let query = new QueryClient()

root.render(
    <QueryClientProvider client={query}>
        <App />
        <ReactQueryDevtools />
    </QueryClientProvider>
);


