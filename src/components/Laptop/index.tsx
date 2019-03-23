import * as React from 'react'
import Icon from '../Icon'
import './style.css'
import '../global.css'

interface Props {
    title?: string,
    url?: string,
    children: React.ReactNode,
    isMonochrome?: boolean,
    htmlAttributes?: any,
}

export default ({
    title,
    url = 'https://google.com',
    isMonochrome = false,
    children,
    htmlAttributes = {}
}: Props) => (
    <div className="frame showcase" {...htmlAttributes}>
        <div className="controls">
        <div className="upper">
            <div className="upper-controls">
                {[{ icon: 'close', color: isMonochrome ? 'grey' : 'red'}, { icon: 'min', color: isMonochrome ? 'grey' : 'yellow'}, { icon: 'max', color: isMonochrome ? 'grey' : 'green'}]
                    .map(({ icon, color }) => (
                        <div key={icon} className={`circle ${color}`}></div>
                    ))
                }
            </div>
            <div className="tab">
                { title }
            </div>
        </div>
        <div className="lower">
            <div className="lower-controls">
                {['back', 'forward', 'refresh']
                    .map(control => (
                        <Icon key={control} name={control} className='nav-control' />
                    ))
                }
            </div>
            <div className="url">
                {url}
            </div>
        </div>
        </div>
        <div className="children">
            { children }
        </div>
    </div>
)