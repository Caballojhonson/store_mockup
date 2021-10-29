import React, { useState } from 'react';
import './App.css';
import ApiRequest from './Components/ApiRequest';

export default function App() {
	const [apiData, setApiData] = useState('');

	const apiCall = (data) => setApiData(data);

    

	return (
		<div>
            <h1>This is APP! No te confundas</h1>
			<ApiRequest passData={apiCall} />
		</div>
	);
}
