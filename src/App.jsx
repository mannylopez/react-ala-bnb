import React from 'react';


function Greeter(){
	return (
		<section>
			<h2>greetings. I am a person</h2>
		</section>
	);
}

function App(){
	return (
	<div>
		<h1>Hello</h1>
		<p>yo</p>

		<Greeter>hi</Greeter>
	</div>
	)
}

export default App;