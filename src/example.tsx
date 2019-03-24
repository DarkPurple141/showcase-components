import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Laptop, Phone } from '.'

const noFrame = {
	border: 'none',
	width: '100%',
	height: '100%',
	borderWidth: '0px'
}

const url = 'https://example.com'

const Example = () => (
	<main>
		<h2>Laptop</h2>
		<Laptop url={url} htmlAttributes={{ style: { height: '400px' } }}>
			<iframe style={noFrame} src={url} />
		</Laptop>
		<h2>Phone</h2>
		<Phone>
			<iframe style={noFrame} src={url} />
		</Phone>
	</main>
)

ReactDOM.render(<Example />, document.getElementById('app'))
