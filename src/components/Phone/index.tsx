import * as React from 'react'
import './style.css'
import '../global.css'

interface Props {
    children?: React.ReactNode
}

export default ({ children }: Props) => (
    <div className="phone showcase">
        <div className="inner-frame">
            <div className="upper-phone">
                <div className="phone-speaker"></div>
            </div>
            <div className="children">
                { children }
            </div>
            <div className="lower-phone">
                <div className="home-button"></div>
            </div>
        </div>
    </div>
)