import * as React from 'react'
import '../phone.css'
import '../global.css'

interface Props {
	children?: React.ReactNode
	className?: string
}

const Phone = ({ children, className }: Props) => (
	<div
		className={`showcase-phone__phone showcase ${className ? className : ''}`}
	>
		<div className="showcase-phone__inner-frame">
			<div className="showcase-phone__upper-phone">
				<div className="showcase-phone__phone-speaker" />
			</div>
			<div className="showcase-phone__children">{children}</div>
			<div className="showcase-phone__lower-phone">
				<div className="showcase-phone__home-button" />
			</div>
		</div>
	</div>
)

export default Phone
