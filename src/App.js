import {Outlet} from 'react-router-dom';

import './App.scss';

function App() {
	return (
		<div className="App your-scroll-container" ref={ref}>
			<Outlet/>
		</div>
	);
}

export default App;
