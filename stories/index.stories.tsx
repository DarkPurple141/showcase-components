import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Laptop, Phone } from '../src'

const noFrame = {
	border: 'none',
	width: '100%',
	height: '100%',
	borderWidth: '0px'
}

const url = 'https://example.com'

/*
body {
	background-size: 40px 40px;
	background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);
}
*/

const Centred = ({ children }: React.ComponentProps<"div">) => (
	<div style={{ padding: '40px' }}>
		{children}
	</div>
)

storiesOf('Laptop', module)
	.addDecorator(withInfo)
	.addDecorator(storyFn => <Centred>{storyFn()}</Centred>)
  .add('with iFrame', () => (
    <Laptop url={url} htmlAttributes={{ style: { height: '400px' } }}>
      <iframe style={noFrame} src={url} />
    </Laptop>
  )
)

storiesOf('Phone', module)
	.addDecorator(withInfo)
	.addDecorator(storyFn => <Centred>{storyFn()}</Centred>)
  .add('with text', () => (
		<Phone>
			<iframe style={noFrame} src={url} />
		</Phone>
	)
)
