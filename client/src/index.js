/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import store from './store/store';
import theme from './Styles/Theme';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
