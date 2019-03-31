import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import * as testConstants from './constants'
import { Centered, noFrame, imageStyle } from './helpers'

import { Laptop } from '../src'

storiesOf('Laptop', module)
	.addDecorator(withInfo)
	.addDecorator(storyFn => <Centered>{storyFn()}</Centered>)
  .add('with iFrame', () => (
    <Laptop url={testConstants.IFRAME_URL} htmlAttributes={{ style: { height: '400px' } }}>
      <iframe style={noFrame} src={testConstants.IFRAME_URL} />
    </Laptop>
	))
	.add('is monochrome', () => (
    <Laptop isMonochrome={true} url={testConstants.IFRAME_URL} htmlAttributes={{ style: { height: '400px' } }}>
      <iframe style={noFrame} src={testConstants.IFRAME_URL} />
    </Laptop>
	))
	.add('with .jpg', () => (
    <Laptop url={testConstants.IMAGE_URL} htmlAttributes={{ style: { height: '550px' } }}>
      <img style={imageStyle} src={testConstants.IMAGE_URL} />
    </Laptop>
  ))