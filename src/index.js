import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './Components/Layout/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
        <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

