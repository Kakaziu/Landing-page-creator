import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home/index.jsx';
import MyThemeProvider from './styles/MyThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Home />
    </MyThemeProvider>
  </React.StrictMode>,
);
