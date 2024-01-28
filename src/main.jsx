import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home/index.jsx';
import MyThemeProvider from './styles/MyThemeProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './templates/Page/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </MyThemeProvider>
  </React.StrictMode>,
);
