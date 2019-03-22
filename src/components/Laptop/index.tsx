import * as React from 'react'
import './style.css'

interface Props {
    title?: string,
    url?: string,
    children: React.ReactNode,
}

export default ({
    title,
    url = 'https://google.com',
    children
}: Props) => (
    <div className="frame">
        <div className="upper">
            <div className="upper-controls">
                {['red', 'yellow', 'green']
                    .map(color => (
                        <div key={color} className={`circle ${color}`}></div>
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
                        <div key={control} className='nav-control'>+</div>
                    ))
                }
            </div>
            <div className="url">
                {url}
            </div>
        </div>
        { children }
    </div>
)