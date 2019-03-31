import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import * as testConstants from './constants'

import { Phone } from '../src'
import { Centered, noFrame, imageStyle } from './helpers';

const flexCenter = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}

storiesOf('Phone', module)
	.addDecorator(withInfo)
	.addDecorator(storyFn => <Centered>{storyFn()}</Centered>)
  .add('with iFrame', () => (
		<Phone>
			<iframe style={noFrame} src={testConstants.IFRAME_URL} />
		</Phone>
	))
	.add('with .jpg', () => (
    <Phone>
      <img style={imageStyle} src={testConstants.IMAGE_URL_MOBILE} />
    </Phone>
	))
	.add('multiple phones', () => (
		<div style={flexCenter}>
			{[1, 2, 3].map((_, i) => 
				<Phone key={i}>
					<img style={imageStyle} src={testConstants.IMAGE_URL_MOBILE} />
				</Phone>
			)}
		</div>
		
  ))