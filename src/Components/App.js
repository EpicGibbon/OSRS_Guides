import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Bosses from '../Components/Bosses';

function App() {
	return (
		<>
			<Header />
      {/* only have boss cards at this level to make sure it renders; still having issues getting react router configured.  */}
      <Bosses />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={Main} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
