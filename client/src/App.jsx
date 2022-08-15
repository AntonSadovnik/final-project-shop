import React from 'react';
import './App.scss';
// eslint-disable-next-line no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';

function App() {
	return (
		<>
			<Header />
			<CardList/>
			<Routes>{/* <Route path="/" element={<Main />}></Route> */}</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
