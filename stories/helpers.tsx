import * as React from 'react'

export const noFrame = {
	border: 'none',
	width: '100%',
	height: '100%',
	borderWidth: '0px'
}

export const imageStyle = {
	width: '100%',
}

export const Centered = ({ children }: React.ComponentProps<'div'>) => (
	<div style={{ padding: '40px' }}>
		{children}
	</div>
)