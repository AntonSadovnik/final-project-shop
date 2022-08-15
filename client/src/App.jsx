import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SliderF from './components/Slider/Slider';
import SliderTwo from './components/Slider/SliderTwo';

function App() {
	return (
		<>
			<Header />
			<SliderF />
			 <SliderTwo/> 
			<Routes>{/* <Route path="/" element={<Main />}></Route> */}</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
