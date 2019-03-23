import * as React from 'react'

import back from './back-arrow'
import forward from './forward-arrow'
import refresh from './refresh'

interface IconMap<T> {
    [key: string]: T;
}

const iconMap: IconMap<React.FunctionComponent> = {
    back,
    forward,
    refresh
}

interface IconProps {
    className?: string,
    name: string
}

export default ({ 
    name,
    className
}: IconProps) => {
    const Icon = iconMap[name]
    return (
        <div className={className}>
            <Icon/>
        </div>
    )
}