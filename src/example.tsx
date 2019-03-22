import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Laptop, Phone } from '.'

const noFrame = {
    border: 'none',
    width: '100%',
    height: '100%'
}

const Example = () => (
    <main>
        <Laptop>
            <iframe style={noFrame} src="https://smartcourse.me"></iframe>
        </Laptop>
        <Phone />
    </main>
)

ReactDOM.render(
    <Example />,
    document.getElementById('app'),
)