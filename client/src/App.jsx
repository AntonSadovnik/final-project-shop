import React from 'react';
import './App.scss';
// eslint-disable-next-line no-unused-vars
import { Route, Routes } from 'react-router-dom';
import ClientDataForm from './components/ClientDataForm/ClientDataForm';

function App() {
	return (
		<>
			<ClientDataForm />
			<Routes>{/* <Route path="/" element={<Main />}></Route> */}</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
