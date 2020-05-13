import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyle from 'utils/globalStyles';
import store from 'settings/configureStore';
import Chart from 'containers/Chart';

export default function App() {
  return (
		<Provider store={store}>
			<>
				<GlobalStyle />
				<Chart />
			</>
		</Provider>
	);
};
