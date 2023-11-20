import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './Components/Layout/Layout';
import Paper from '@mui/material/Paper';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Paper square>
        <App />
      </Paper>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

