import React from 'react';
import Greeter from './Greeter';

// function App(){
// 	return (
// 	<div>
// 		<h1>Hello</h1>
// 		<p>yo</p>

// 		<Greeter />
// 	</div>
// 	)
// }

class App extends React.Component {
	componentDidMount(){
		console.log('this runs once')
	}

	render() {
		return (
			<div>
				<h1>Hello</h1>
				<p>yo</p>
				{1 + 3}
				<Greeter />
			</div>
		);
	}
}

export default App;