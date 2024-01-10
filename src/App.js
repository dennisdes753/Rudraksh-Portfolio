import {Outlet} from 'react-router-dom';

import './App.scss';

function App() {
	return (
		<div className="App your-scroll-container" ref={ref}>
			<ParallaxProvider scrollContainer={scrollEl}>
				<Outlet/>
			</ParallaxProvider>	
		</div>
	);
}

export default App;
