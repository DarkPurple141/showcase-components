import * as React from 'react'
import Icon from '../Icon'
import '../laptop.css'
import '../global.css'

interface Props {
	children?: React.ReactNode
	title?: string
	url?: string
	isMonochrome?: boolean
	className?: string
	htmlAttributes?: any
}

const Laptop = ({
	title,
	url = 'https://google.com',
	isMonochrome = false,
	children,
	className,
	htmlAttributes = {}
}: Props) => (
	<div
		className={`showcase-laptop__frame showcase ${className ? className : ''}`}
		{...htmlAttributes}
	>
		<div className="showcase-laptop__controls">
			<div className="showcase-laptop__upper">
				<div className="showcase-laptop__upper-controls">
					{[
						{ icon: 'close', color: isMonochrome ? 'grey' : 'red' },
						{ icon: 'min', color: isMonochrome ? 'grey' : 'yellow' },
						{ icon: 'max', color: isMonochrome ? 'grey' : 'green' }
					].map(({ icon, color }) => (
						<div key={icon} className={`showcase-laptop__circle ${color}`} />
					))}
				</div>
				<div className="showcase-laptop__tab">{title}</div>
			</div>
			<div className="showcase-laptop__lower">
				<div className="showcase-laptop__lower-controls">
					{['back', 'forward', 'refresh'].map(control => (
						<Icon key={control} name={control} className="nav-control" />
					))}
				</div>
				<div className="showcase-laptop__url">{url}</div>
			</div>
		</div>
		<div className="showcase-laptop__children">{children}</div>
	</div>
)

export default Laptop
