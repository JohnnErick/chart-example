import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Reset } from 'styled-reset';

import store from 'settings/configureStore';
import ExampleComponent from 'components/ExampleComponent';

function App() {
  return (
		<Provider store={store}>
			<>
				<Reset />
				<ExampleComponent />
			</>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
