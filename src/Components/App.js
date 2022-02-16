import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Bosses from '../Pages/Bosses';
import Raids from '../Pages/Raids';
import Skills from '../Pages/Skills';

const App = () => {
	return (
		<>
			<Header />
      {/* only have boss cards at this level to make sure it renders; still having issues getting react router configured.  */}
      {/* <Bosses /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main/>} />
					<Route path="/raids" element={<Raids/>} />
					<Route path="/bosses" element={<Bosses/>} />
					<Route path="/skills" element={<Skills/>} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
